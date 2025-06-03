import React from "react";

const nodeData = {
  page: "top",
  layout: {
    navPosition: "left",
    theme: "dark",
  },
  sections: [
    {
      type: "navigation",
      items: [
        { label: "トップページ", href: "#toppage" },
        { label: "自己紹介", href: "#aboutme" },
        { label: "制作実績", href: "#portfolio" },
        { label: "口コミ実績", href: "#reviews" },
        { label: "お問い合わせ", href: "#contact" },
      ],
    },
    {
      type: "TopPageSentence",
      title: "コードでアイデアを形にする Webエンジニア",
      stats: [
        { label: "abecdef", value: "200+" },
        { label: "abecdef", value: "2,000+" },
        { label: "abecdef", value: "20,000+" },
      ],
      languageSwitch: {
        default: "日本語",
        alternate: "Resume",
        position: "top-right",
      },
    },
  ],
};

export default function Home() {
  const { sections } = nodeData;
  const nav = sections.find((s) => s.type === "navigation");
  const TopPageSentence = sections.find((s) => s.type === "TopPageSentence");

  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* 左ナビゲーション */}
      <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col justify-center items-center text-xs gap-30 bg-black z-50">
        {nav?.items.map((item) => (
          <a key={item.href} href={item.href} className="-rotate-90 hover:underline">
            {item.label}
          </a>
        ))}
      </nav>

      {/* 言語の切り替えボタン */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-8">
        <div className="absolute top-4 right-4 text-sm">
          <button className="bg-[#D8A7B1]  text-white px-3 py-1 rounded mr-2">
            {TopPageSentence?.languageSwitch.default}
          </button>
          <button className="bg-[#D8A7B1]  text-white px-3 py-1 rounded">
            {TopPageSentence?.languageSwitch.alternate}
          </button>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          {TopPageSentence?.title}
        </h1>
        <div className="flex gap-8 mt-8">
          {TopPageSentence?.stats.map((stat, index) => (
            <div key={index} className="text-center border-r last:border-none pr-4 last:pr-0">
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
