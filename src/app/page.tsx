'use client';
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../i18n";
import { useState } from "react"; // useState を追加


const topPageData = {
  title: "コードでアイデアを形にする Webエンジニア",
  stats: [
    { label: "案件数", value: "200+" },
    { label: "開発時間", value: "2,000+" },
    { label: "行数", value: "20,000+" },
  ],
  languageSwitch: {
    language: "日本語",
    resume: "履歴書",
  },
};


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
  
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "#toppage" },
    { label: t("nav.about"), href: "#aboutme" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.reviews"), href: "#reviews" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // メニューを閉じる
  };

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
       <div className="absolute top-4 right-4 text-sm px-8 space-x-2 z-50">
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#D8A7B1] text-white px-3 py-1 rounded"
            >
              {i18n.language === "ja" ? "日本語" : "English"}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-md z-10" id="language">
                <button
                  onClick={() => handleLanguageChange("ja")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t("language.japanese")}
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t("language.english")}
                </button>
              </div>
            )}
          </div>

          {/* 履歴書ダウンロード */}
          <a
            href="/resume.pdf"
            download
            className="bg-[#D8A7B1] text-white px-3 py-1 rounded inline-block"
          >
            {t("resume")}
          </a>
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
          <h2 className="text-3xl font-semibold mb-4">{t("aboutme.title")}</h2>
          <p className="max-w-2xl leading-relaxed text-center">
            {t("aboutme.description")}
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
          <h2 className="text-3xl font-semibold mb-4">{t("portfolio.title")}</h2>
          <p className="max-w-2xl leading-relaxed text-center">
            {t("portfolio.description")}
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
          <h2 className="text-3xl font-semibold mb-4">{t("reviews.title")}</h2>
          <p className="max-w-2xl leading-relaxed text-center">
            {t("reviews.description")}
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
          <h2 className="text-3xl font-semibold mb-4">{t("contact.title")}</h2>
          <p className="max-w-2xl leading-relaxed text-center mb-6">
            {t("contact.description")}
          </p>
          <a
            href="mailto:example@example.com"
            className="bg-[#D8A7B1] text-white px-6 py-2 rounded hover:opacity-90"
          >
            {t("contact.button")}
          </a>
        </motion.section>
      </div>
    </main>
  );
}
