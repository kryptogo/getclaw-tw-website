import ScrollReveal from "./ScrollReveal";

const quotes = [
  {
    text: "這是我最近看到最接近科幻小說的東西。",
    author: "Andrej Karpathy",
    role: "前 Tesla AI 總監、OpenAI 創始成員",
  },
  {
    text: "I replaced my EA with this. It's insane how good it is.",
    author: "Sam Parr",
    role: "The Hustle 創辦人",
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-24 px-10 bg-bg max-md:py-16 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold text-primary tracking-[0.12em] uppercase mb-4">
            WHAT PEOPLE SAY
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {quotes.map((q) => (
            <ScrollReveal key={q.author}>
              <blockquote className="bg-bg-white rounded-2xl p-8 border border-border h-full flex flex-col">
                <p className="text-lg font-medium leading-relaxed mb-6 flex-1">
                  「{q.text}」
                </p>
                <footer>
                  <p className="font-bold text-sm">{q.author}</p>
                  <p className="text-text-muted text-xs">{q.role}</p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
