'use client';

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../i18n";
import { Link as Scroll } from 'react-scroll'


const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.0,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex scroll-smooth">
      {/* 左サイドナビゲーション */}
      <nav className="fixed left-0 top-0 h-screen w-20 flex flex-col justify-center items-center text-sm gap-27 bg-black z-50">
        {navItems.map((item) => (
          <Scroll
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            className="-rotate-90 hover:underline whitespace-nowrap cursor-pointer"
          >
            {item.label}
          </Scroll>
        ))}
      </nav>


      {/* 言語切替＆履歴書ダウンロード */}
      <div className="fixed top-4 right-4 text-sm px-8 space-x-2 z-50">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#D8A7B1] text-white px-3 py-1 rounded"
          >
            {i18n.language === "ja" ? "日本語" : "English"}
          </button>

          {isOpen && (
            <div
              className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-md z-10"
              id="language"
            >
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

        <a
          href="/resume.pdf"
          download
          className="bg-[#D8A7B1] text-white px-3 py-1 rounded inline-block"
        >
          {t("resume")}
        </a>
      </div>

      {/* コンテンツラッパー */}
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

        {/* About Me */}
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

        {/* Portfolio */}
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

        {/* Reviews */}
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

        {/* Contact */}
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