'use client';
import React from "react";
import { motion } from "framer-motion";

/**
 * ページ内 5 セクション（トップ / 自己紹介 / 制作実績 / 口コミ実績 / お問い合わせ）を
 * 左サイドナビゲーションでスムーズスクロールしつつ、
 * ビューポート遷移時にセクションがスライドインするアニメーションを追加しました。
 *
 * - TailwindCSS v3 以上
 * - Framer Motion v10 以上 (app ディレクトリなら "framer-motion")
 */

const navItems = [
  { label: "トップページ", href: "#toppage" },
  { label: "自己紹介", href: "#aboutme" },
  { label: "制作実績", href: "#portfolio" },
  { label: "口コミ実績", href: "#reviews" },
  { label: "お問い合わせ", href: "#contact" },
];

const topPageData = {
  title: "コードでアイデアを形にする Webエンジニア",
  stats: [
    { label: "案件数", value: "200+" },
    { label: "開発時間", value: "2,000+" },
    { label: "行数", value: "20,000+" },
  ],
  languageSwitch: {
    default: "日本語",
    alternate: "Resume",
  },
};

/**
 * セクションアニメーション共通設定
 *   - initial: 右 5% & 不透明度 0
 *   - animate: 原点 & 不透明度 1
 */
const sectionVariants = {
  initial: { opacity: 0, y: 50 }, // 50px下から
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.0,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex scroll-smooth">
      {/* ────────────────────────────
          左サイドナビゲーション
      ──────────────────────────── */}
      <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col justify-center items-center text-xs gap-30 bg-black z-50">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="-rotate-90 hover:underline whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
      </nav>

       {/* 言語切替 */}
       <div className="absolute top-4 right-4 text-sm px-8 space-x-2">
         <button className="bg-[#D8A7B1] text-white px-3 py-1 rounded">
           {topPageData.languageSwitch.default}
         </button>
         <button className="bg-[#D8A7B1] text-white px-3 py-1 rounded">
           {topPageData.languageSwitch.alternate}
         </button>
       </div>



      {/* ────────────────────────────
          コンテンツラッパー（スナップ＋スクロール）
      ──────────────────────────── */}
      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        {/* ============================== */}
        {/* Top Page                      */}
        {/* ============================== */}
        <motion.section
          id="toppage"
          className="min-h-screen snap-start flex flex-col justify-center items-center px-8 relative"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >

          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            {topPageData.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mt-8 items-center md:items-start">
            {topPageData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center md:border-r md:last:border-none md:pr-4 md:last:pr-0"
              >
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ============================== */}
        {/* About Me                       */}
        {/* ============================== */}
        <motion.section
          id="aboutme"
          className="min-h-screen snap-start flex flex-col justify-center items-center px-8"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">自己紹介</h2>
          <p className="max-w-2xl leading-relaxed text-center">
            フルスタックエンジニアとして、React / Next.js / Node.js を中心に
            UI からバックエンドまで幅広く担当。ユーザー体験と保守性を両立した
            コード設計を得意としています。
          </p>
        </motion.section>

        {/* ============================== */}
        {/* Portfolio                      */}
        {/* ============================== */}
        <motion.section
          id="portfolio"
          className="min-h-screen snap-start flex flex-col justify-center items-center px-8"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">制作実績</h2>
          <p className="max-w-2xl leading-relaxed text-center">
            代表的なプロジェクトや OSS への貢献を掲載します。
          </p>
        </motion.section>

        {/* ============================== */}
        {/* Reviews                         */}
        {/* ============================== */}
        <motion.section
          id="reviews"
          className="min-h-screen snap-start flex flex-col justify-center items-center px-8"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">口コミ実績</h2>
          <p className="max-w-2xl leading-relaxed text-center">
            クライアントやコラボレーターからのフィードバックを紹介します。
          </p>
        </motion.section>

        {/* ============================== */}
        {/* Contact                         */}
        {/* ============================== */}
        <motion.section
          id="contact"
          className="min-h-screen snap-start flex flex-col justify-center items-center px-8"
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">お問い合わせ</h2>
          <p className="max-w-2xl leading-relaxed text-center mb-6">
            お仕事のご依頼やご相談はお気軽にご連絡ください。
          </p>
          <a
            href="mailto:example@example.com"
            className="bg-[#D8A7B1] text-white px-6 py-2 rounded hover:opacity-90"
          >
            メールを送る
          </a>
        </motion.section>
      </div>
    </main>
  );
}
