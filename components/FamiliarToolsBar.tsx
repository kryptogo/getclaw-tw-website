const familiarTools = [
  { name: "LINE", icon: "https://cdn.simpleicons.org/line", highlight: true },
  { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
  { name: "Telegram", icon: "https://cdn.simpleicons.org/telegram" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar" },
];

export default function FamiliarToolsBar() {
  return (
    <section className="py-8 px-10 bg-bg border-b border-border max-md:py-6 max-md:px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-text-muted text-xs font-medium mb-3 tracking-wide">
          用你已經習慣的工具，直接跟 AI 員工對話 · 整合超過 10,000 種服務
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {familiarTools.map((item) => (
            <span
              key={item.name}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border ${
                item.highlight
                  ? "text-text border-green-500/30 bg-green-50"
                  : "text-text-secondary border-border bg-bg-white"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.icon}
                alt={item.name}
                width={14}
                height={14}
                loading="lazy"
              />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
