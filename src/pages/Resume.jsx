import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

const CONTENT = {
  en: {
    dir: "ltr",
    name: "Shantia Eslami",
    role: "AI Intern / Software Developer",
    location: "Isfahan, Iran",
    contact: {
      email: "shantiaeslami@gmail.com",
      phone: "+98 903 782 4494",
      phoneHref: "+989037824494",
      telegram: "@ishantia",
      telegramUrl: "https://t.me/ishantia",
      github: "github.com/ishantia",
      githubUrl: "https://github.com/ishantia"
    },
    details: [
      { label: "Marital status", value: "Single" },
      { label: "Military service", value: "Obligated" },
      { label: "Born", value: "Jul 18, 2009" }
    ],
    sectionExperience: "Work Experience",
    sectionEducation: "Education",
    sectionSkills: "Skills",
    sectionLanguages: "Languages",
    sectionDetails: "Details",
    experience: [
      {
        title: "AI Intern",
        org: "SnowaTech",
        period: "Jun 2026 – Aug 2026",
        body:
          "Completed a 240-hour internship working on \u2018Snowan\u2019, a Persian-language AI voice assistant built for Entekhab Industrial Group (Snowa/Daewoo home appliances). Worked on the Python backend server and integrated the speech-to-text pipeline, a language model (LLM), and text-to-speech using the Gemma-3-27B model via LM Studio, alongside face-detection capability. Also contributed to system performance optimization and fixed behavioral bugs in the assistant's response pipeline, improving system stability and answer accuracy."
      }
    ],
    education: [
      {
        title: "Computer Science",
        org: "Fan Afarin Technical School",
        period: "Sep 2024 – Present",
        degree: "Diploma"
      }
    ],
    skills: [
      { name: "C#", value: 30 },
      { name: "Java", value: 85 },
      { name: "Git", value: 90 },
      { name: "Python", value: 90 }
    ],
    languages: [{ name: "English", value: 40 }]
  },
  fa: {
    dir: "rtl",
    name: "شنتیا اسلامی",
    role: "کارآموز هوش مصنوعی / توسعه‌دهنده نرم‌افزار",
    location: "اصفهان، ایران",
    contact: {
      email: "shantiaeslami@gmail.com",
      phone: "۰۹۰۳۷۸۲۴۴۹۴",
      phoneHref: "+989037824494",
      telegram: "@ishantia",
      telegramUrl: "https://t.me/ishantia",
      github: "github.com/ishantia",
      githubUrl: "https://github.com/ishantia"
    },
    details: [
      { label: "وضعیت تاهل", value: "مجرد" },
      { label: "وضعیت نظام وظیفه", value: "مشمول" },
      { label: "متولد", value: "۱۳۸۸/۰۴/۲۷" }
    ],
    sectionExperience: "سوابق شغلی",
    sectionEducation: "سوابق تحصیلی",
    sectionSkills: "مهارت ها",
    sectionLanguages: "زبان ها",
    sectionDetails: "مشخصات",
    experience: [
      {
        title: "کارآموز هوش مصنوعی",
        org: "اسنواتک",
        period: "تیر ۱۴۰۵ - مرداد ۱۴۰۵",
        body:
          "یک دوره کارآموزی ۲۴۰ ساعته را با موفقیت به پایان رساندم که در آن روی «اسنوان» کار کردم؛ یک دستیار صوتی هوش مصنوعی فارسی‌زبان که برای گروه صنعتی انتخاب (لوازم خانگی اسنوا/دوو) توسعه داده شده است. روی سرور بک‌اند پایتون این پروژه فعالیت داشتم و پایپ‌لاین تبدیل گفتار به متن، مدل زبانی (LLM)، و تبدیل متن به گفتار را با استفاده از مدل Gemma-3-27B از طریق LM Studio یکپارچه کردم، در کنار قابلیت تشخیص چهره. همچنین در بهینه‌سازی عملکرد سیستم مشارکت داشتم و باگ‌های رفتاری موجود در پایپ‌لاین پاسخ‌دهی دستیار را برطرف کردم که منجر به افزایش پایداری سیستم و دقت پاسخ‌ها شد."
      }
    ],
    education: [
      {
        title: "کامپیوتر",
        org: "هنرستان فن آفرین",
        period: "مهر ۱۴۰۳ - تاکنون",
        degree: "دیپلم"
      }
    ],
    skills: [
      { name: "سی شارپ", value: 30 },
      { name: "جاوا", value: 85 },
      { name: "گیت", value: 90 },
      { name: "پایتون", value: 90 }
    ],
    languages: [{ name: "انگلیسی", value: 40 }]
  }
};

const LABELS = {
  en: { toggle: "فارسی", back: "Back to site", print: "Print / Save as PDF" },
  fa: { toggle: "English", back: "بازگشت به سایت", print: "چاپ / ذخیره PDF" }
};

export default function Resume() {
  const [lang, setLang] = useState("en");
  const t = CONTENT[lang];
  const labels = LABELS[lang];

  return (
    <section className={`section resume-page lang-${lang}`} id="resume" dir={t.dir}>
      <div className="container">
        <div className="resume-inner">        <div className="resume-toolbar no-print">
          <Link to="/" className="button">
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> {labels.back}
          </Link>
          <div className="resume-toolbar-actions">
            <button
              type="button"
              className="button"
              onClick={() => setLang(current => (current === "en" ? "fa" : "en"))}
            >
              <i className="fa-solid fa-language" aria-hidden="true"></i> {labels.toggle}
            </button>
            <button type="button" className="button primary" onClick={() => window.print()}>
              <i className="fa-solid fa-print" aria-hidden="true"></i> {labels.print}
            </button>
          </div>
        </div>

        <Reveal as="header" className="resume-header">
          <h1 className="resume-name">{t.name}</h1>
          <p className="resume-role">{t.role}</p>
          <div className="resume-contact-row">
            <a href={`mailto:${t.contact.email}`}>
              <i className="fa-solid fa-envelope" aria-hidden="true"></i> {t.contact.email}
            </a>
            <a href={`tel:${t.contact.phoneHref}`} dir="ltr">
              <i className="fa-solid fa-phone" aria-hidden="true"></i> {t.contact.phone}
            </a>
            <a href={t.contact.telegramUrl} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram" aria-hidden="true"></i> {t.contact.telegram}
            </a>
            <a href={t.contact.githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true"></i> {t.contact.github}
            </a>
            <span>
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i> {t.location}
            </span>
          </div>
        </Reveal>

        <Reveal as="div" className="resume-block">
          <p className="section-kicker">{t.sectionDetails}</p>
          <ul className="resume-details-list">
            {t.details.map(detail => (
              <li key={detail.label}>
                <span className="resume-detail-label">{detail.label}</span>
                <span>{detail.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className="resume-block">
          <p className="section-kicker">{t.sectionExperience}</p>
          <ul className="resume-timeline">
            {t.experience.map(item => (
              <li key={item.title + item.org} className="resume-timeline-item">
                <div className="resume-timeline-head">
                  <h3>{item.title}</h3>
                  <span className="resume-timeline-period">{item.period}</span>
                </div>
                <p className="resume-timeline-org">{item.org}</p>
                <p className="resume-timeline-body">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className="resume-block">
          <p className="section-kicker">{t.sectionEducation}</p>
          <ul className="resume-timeline">
            {t.education.map(item => (
              <li key={item.title + item.org} className="resume-timeline-item">
                <div className="resume-timeline-head">
                  <h3>{item.title}</h3>
                  <span className="resume-timeline-period">{item.period}</span>
                </div>
                <p className="resume-timeline-org">{item.org}</p>
                <p className="resume-timeline-body">{item.degree}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="resume-two-col">
          <Reveal as="div" className="resume-block">
            <p className="section-kicker">{t.sectionSkills}</p>
            <ul className="resume-bars">
              {t.skills.map(skill => (
                <li key={skill.name}>
                  <div className="resume-bar-top">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className="resume-block">
            <p className="section-kicker">{t.sectionLanguages}</p>
            <ul className="resume-bars">
              {t.languages.map(language => (
                <li key={language.name}>
                  <div className="resume-bar-top">
                    <span>{language.name}</span>
                    <span>{language.value}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${language.value}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
