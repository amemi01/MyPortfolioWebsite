'use client';

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../i18n";
import { Link as Scroll } from 'react-scroll';

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.0, ease: "easeOut" },
  },
};

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topPageData = {
    title: t("toppage.title"),
    stats: [
      { label: t("toppage.stats.projects"), value: "200+" },
      { label: t("toppage.stats.tools"), value: "2,000+" },
      { label: t("toppage.stats.years"), value: "20,000+" },
    ],
  };

  const navItems = [
    { label: t("nav.home"), to: "toppage" },
    { label: t("nav.about"), to: "aboutme" },
    { label: t("nav.portfolio"), to: "portfolio" },
    { label: t("nav.reviews"), to: "reviews" },
    { label: t("nav.contact"), to: "contact" },
  ];

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex scroll-smooth">

      {/* サイドナビ */}
      <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col justify-center items-center text-sm gap-27 bg-black z-50">
        {navItems.map((item) => (
          <Scroll
            key={item.to}
            to={item.to}
            smooth
            duration={500}
            className="-rotate-90 hover:underline whitespace-nowrap cursor-pointer"
          >
            {item.label}
          </Scroll>
        ))}
      </nav>

      {/* 言語切替 & 履歴書 */}
      <div className="fixed top-4 right-4 text-sm px-8 space-x-2 z-50">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="bg-[#D8A7B1] text-white px-3 py-1 rounded"
          >
            {i18n.language === "ja" ? "日本語" : "English"}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-md z-10">
              <button onClick={() => handleLanguageChange("ja")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                {t("language.japanese")}
              </button>
              <button onClick={() => handleLanguageChange("en")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                {t("language.english")}
              </button>
            </div>
          )}
        </div>

        <a
          href="/resume.pdf"
          download
          className="bg-[#D8A7B1] text-white px-3 py-1 rounded inline-block"
        >
          {t("resume")}
        </a>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 overflow-y-hidden snap-y snap-mandatory">

        {/* Top Page */}
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
              <div key={idx} className="text-center md:border-r md:last:border-none md:pr-4 md:last:pr-0">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* About Me */}
        <motion.section id="aboutme" className="min-h-screen snap-start flex flex-col justify-center items-center px-8" variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-3xl font-semibold mb-4">{t("aboutme.title")}</h2>
          <p className="max-w-2xl leading-relaxed text-center">{t("aboutme.description")}</p>
        </motion.section>

        {/* Portfolio */}
        <motion.section id="portfolio" className="min-h-screen snap-start flex flex-col justify-center items-center px-8" variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-3xl font-semibold mb-4">{t("portfolio.title")}</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
            {[
              { src: "ruby", label: "Ruby" },
              { src: "react", label: "React" },
              { src: "python", label: "Python", className: "w-20 h-20" },
              { src: "nextjs", label: "Node.js" },
              { src: "html", label: "HTML" },
            ].map(({ src, label, className = "w-16 h-16" }) => (
              <div key={label} className="flex flex-col items-center">
                <img src={`/images/${src}.png`} alt={label} className={className} />
                <p className="mt-2 text-sm">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-300 leading-relaxed mt-10 whitespace-pre-line">
            {t("portfolio.description") + "\n" + t("portfolio.description2")}
          </p>
        </motion.section>

        {/* Reviews */}
        <motion.section id="reviews" className="min-h-screen snap-start flex flex-col justify-center items-center px-8" variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-3xl font-semibold mb-4">{t("reviews.title")}</h2>
          <p className="max-w-2xl leading-relaxed text-center">{t("reviews.description")}</p>
        </motion.section>

        {/* Contact */}
        <motion.section id="contact" className="min-h-screen snap-start flex flex-col justify-center items-center px-8" variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-3xl font-semibold mb-4">{t("contact.title")}</h2>
          <p className="max-w-2xl leading-relaxed text-center mb-6">{t("contact.description")}</p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#D8A7B1] text-white px-4 py-2 rounded hover:opacity-90"
          >
            {t("contact.button1")}
          </button>

          {/* モーダルフォーム */}
          {isModalOpen && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="w-full max-w-md bg-white text-black p-6 rounded shadow relative" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }}>
                <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-xl font-bold">×</button>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert("送信されました！（実際の送信処理はここに追加）");
                  setIsModalOpen(false);
                }}>
                  <div>
                    <label className="block mb-1 text-sm">{t("contact.name")}</label>
                    <input type="text" className="w-full border px-3 py-2 rounded" placeholder={t("contact.namePlaceholder")} required />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">{t("contact.email")}</label>
                    <input type="email" className="w-full border px-3 py-2 rounded" placeholder={t("contact.emailPlaceholder")} required />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">{t("contact.message")}</label>
                    <textarea className="w-full border px-3 py-2 rounded" rows={4} placeholder={t("contact.messagePlaceholder")} required />
                  </div>
                  <button type="submit" className="bg-[#D8A7B1] text-white px-4 py-2 rounded hover:opacity-90">
                    {t("contact.button2")}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </motion.section>

      </div>
    </main>
  );
}