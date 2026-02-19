---
title: "OpenClaw 終極安全：用 Bedrock IAM SSO 徹底消滅 API Key"
date: "2026-02-19"
description: "API Key 寫在設定檔是 OpenClaw 最大安全隱患。用 Amazon Bedrock + IAM SSO 實現零金鑰架構的完整做法。"
cover: "/assets/blog/openclaw-bedrock-security.png"
tags: ["OpenClaw", "AWS Bedrock", "資訊安全", "技術教學"]
---

先講結論：如果你在意 OpenClaw 的安全性，Bedrock + IAM Identity Center SSO 是目前最乾淨的架構——設定檔裡零 API Key，憑證自動過期，最小權限。

> 本文核心做法來自 AWS Community Hero [Pahud Hsieh 的實測分享](https://www.facebook.com/pahud.hsieh/posts/pfbid02CryZ4PT2VLsgHmHRp3t566RvAGnWfZTa5uA75Rnijo2dQ6iuXwg7CvQEzT98y6pNl)，我們在此基礎上補充 GetClaw 部署實務觀點。

---

## 問題：API Key 在 OpenClaw 裡有多危險？

OpenClaw 的 `openclaw.json` 設定檔會把 API Key 寫入 `models.json`。更嚴重的是：所有環境變數會被解析後注入 LLM 的 prompt context。

這代表什麼？**每個模型供應商都能在 context 裡看到其他供應商的憑證。** 如果有人透過 social engineering 讓 Agent 洩漏 context，你所有的 API Key 就一次全部外洩。

這不是理論風險。OpenClaw 社群已經在 GitHub Issue [#11202](https://github.com/cline/cline/issues/11202) 和 [#14411](https://github.com/cline/cline/issues/14411) 中討論過這個問題。

## 中間嘗試：Local Proxy

最直覺的解法是在本地跑一個 proxy，讓 OpenClaw 透過 proxy 呼叫模型，避免 API Key 直接寫在設定檔裡。

Pahud 實測發現這只解決了一半問題。後來他提交了 [PR #14836](https://github.com/cline/cline/pull/14836)，修正了 Key 被寫入磁碟的行為。但根本問題還在：只要有 API Key 存在，就有洩漏的可能。

## 終極解法：Bedrock + IAM Identity Center (SSO)

Amazon Bedrock 作為模型供應商的獨特之處：**它不需要 API Key。**

整個架構長這樣：

1. **~/.openclaw.json 裡零憑證** — 設定檔只寫 Bedrock 的 region 和 model ID，沒有任何 key
2. **~/.aws/config 只有 SSO 資訊** — 不是 access key，是 SSO session 設定
3. **~/.aws/credentials 直接刪除** — 完全不存在這個檔案
4. **臨時憑證自動過期** — SSO token 最長 12 小時，到期自動失效
5. **即使 SSO cache 外洩也安全** — 因為 token 會過期，窗口極短

Pahud 甚至設定了 OpenClaw 在 SSO 過期時自動把授權 URL 發到 Telegram，一鍵重新認證。

## 設定步驟

### Step 1：設定 AWS Identity Center

在 AWS 管理控制台啟用 IAM Identity Center，建立使用者和群組。

### Step 2：建立最小權限 Permission Set

建立一個 `BedrockInvoke` permission set，只給 `bedrock:InvokeModel` 權限。不多不少。

### Step 3：設定 ~/.aws/config

```ini
[profile openclaw]
sso_session = my-sso
sso_account_id = 123456789012
sso_role_name = BedrockInvoke
region = us-west-2

[sso-session my-sso]
sso_start_url = https://my-instance.awsapps.com/start
sso_region = us-west-2
sso_registration_scopes = sso:account:access
```

### Step 4：清理所有 API Key

從 `openclaw.json` 移除所有 API Key 設定。刪除 `~/.aws/credentials`。確認環境變數裡沒有殘留的 `OPENAI_API_KEY`、`ANTHROPIC_API_KEY` 等。

### Step 5：登入 SSO

```bash
aws sso login --profile openclaw
```

完成。你的 OpenClaw 現在是零 API Key 架構。

---

## 為什麼這件事很重要？

三層防禦同時到位：

- **零金鑰** — 設定檔裡沒有任何可洩漏的 secret
- **最小權限** — 只能呼叫 Bedrock model invoke，做不了其他事
- **時效限制** — 即使 token 外洩，12 小時後自動失效

這是 defense in depth 的教科書案例。

---

## GetClaw 的觀點

這正是為什麼專業部署重要。多數自行安裝 OpenClaw 的使用者，不會走到 SSO + 最小權限 + 零金鑰這個層級的 hardening。不是不想，是不知道該做、不知道怎麼做。

GetClaw 的[一鍵安裝](/collison-install)預設就處理了憑證管理的問題。我們的[安全架構](/security)從第一天就把「設定檔裡不該有 secret」當作基本原則。

> 想讓你的 OpenClaw 部署達到企業級安全標準？[預約免費諮詢](/book)，我們幫你從零建立安全架構。

*本文核心做法歸功於 Pahud Hsieh 的實測與開源貢獻，GetClaw 團隊在此基礎上補充部署實務觀點。*
