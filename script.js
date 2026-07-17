/* ============================================================
   EMES SARL — script.js (partagé)
   ============================================================ */

/* -------- Data (mock, remplacer par API plus tard) -------- */
const SERVICES = [
  { icon: "fa-shield-halved", title: "Accompagnement en Conformité", short: "Mise en conformité RGPD, APDP, ISO 27001.",
    long: "Nous auditons vos traitements de données, cartographions vos risques, rédigeons vos politiques de sécurité et vous accompagnons jusqu'à l'obtention de la conformité (RGPD, APDP, ISO 27001, PCI-DSS).", tag: "Conformité" },
  { icon: "fa-graduation-cap", title: "Formation", short: "Programmes pour pros, diplômés et étudiants.",
    long: "Bootcamps intensifs, préparation aux certifications Linux Foundation (LFCS, LFCE), OffSec (OSCP), sensibilisation cybersécurité pour entreprises et formations vacances pour jeunes.", tag: "Formation" },
  { icon: "fa-code", title: "Génie logiciel", short: "Sécurité intégrée dans vos projets IT.",
    long: "Accompagnement de vos chefs de projet et développeurs sur les bonnes pratiques SecDevOps : threat modeling, revue de code sécurisée, CI/CD durci, tests SAST/DAST.", tag: "SecDevOps" },
  { icon: "fa-network-wired", title: "Réseaux & Systèmes", short: "Conception, réalisation et optimisation.",
    long: "Architecture réseau (LAN/WAN/SD-WAN), virtualisation, cloud hybride, monitoring, haute disponibilité, PRA/PCA — pensés pour la résilience et la sécurité.", tag: "Infrastructure" },
  { icon: "fa-user-secret", title: "Sécurité Informatique", short: "PenTest, documentation, SOC.",
    long: "Tests d'intrusion (web, mobile, réseau, cloud), rédaction de politiques SSI, mise en place et exploitation de Centres des Opérations de Sécurité (SOC).", tag: "Cybersécurité" },
  { icon: "fa-clipboard-check", title: "Audit & Pentest", short: "Vulnérabilités identifiées proactivement.",
    long: "Audits techniques et organisationnels : boîte noire, grise ou blanche. Livrables clairs : rapport exécutif, rapport technique, plan de remédiation priorisé.", tag: "Audit" },
];

const PROJECTS = [
  { img: "./img/project-grc.jpg", tag: "GRC", title: "Plateforme GRC — Banque régionale",
    short: "Cartographie des risques et suivi de conformité pour un groupe bancaire.",
    long: "Déploiement d'une plateforme centralisée de gestion des risques, conformité et audit pour une banque opérant dans 4 pays. Intégration avec l'ERP, workflows d'approbation, tableaux de bord temps réel.",
    stack: ["Node.js", "PostgreSQL", "Docker", "Keycloak"], link: "#" },
  { img: "./img/project-cloud.jpg", tag: "Cloud", title: "Migration Cloud sécurisée",
    short: "Bascule d'un SI on-premise vers un cloud hybride avec zero-trust.",
    long: "Refonte complète de l'architecture réseau, mise en place d'un Zero Trust Network Access, chiffrement bout-en-bout et supervision SOC 24/7.",
    stack: ["AWS", "Terraform", "Wazuh", "OpenVPN"], link: "#" },
  { img: "./img/project-banking.jpg", tag: "Fintech", title: "Audit sécurité — Application mobile bancaire",
    short: "Pentest complet iOS/Android d'une application de mobile money.",
    long: "Audit technique approfondi : reverse engineering, tests d'API, analyse cryptographique, revue du binaire. 27 vulnérabilités identifiées, toutes corrigées avant mise en production.",
    stack: ["MobSF", "Burp Suite", "Frida"], link: "#" },
  { img: "./img/project-academy.jpg", tag: "Formation", title: "EMES Academy — Plateforme LMS",
    short: "Plateforme d'apprentissage en ligne pour nos formations.",
    long: "Développement d'une plateforme LMS sur mesure : gestion des cohortes, labs interactifs, évaluations automatiques, certificats vérifiables sur blockchain.",
    stack: ["Next.js", "PostgreSQL", "Docker", "Nginx"], link: "#" },
  { img: "./img/project-govnet.jpg", tag: "Public", title: "GovNet — Sécurisation réseau administration",
    short: "Refonte réseau et durcissement pour une administration publique.",
    long: "Segmentation réseau, déploiement de pare-feux nouvelle génération, mise en place d'un SIEM et formation des équipes internes à la réponse à incident.",
    stack: ["Fortinet", "Wazuh", "Ansible"], link: "#" },
  { img: "./img/project-pentest.jpg", tag: "Pentest", title: "Red Team — Simulation d'attaque ciblée",
    short: "Exercice red team complet contre un opérateur télécom.",
    long: "Simulation d'attaque ciblée sur 6 semaines : phishing, intrusion physique, escalade de privilèges. Rapport détaillé et accompagnement de l'équipe blue team pendant la remédiation.",
    stack: ["Cobalt Strike", "BloodHound", "Empire"], link: "#" },
];

const FORMATIONS = [
  { tag: "Bootcamp", title: "ZeroToHero — Sécurité Web & Mobile",
    short: "22 jours intensifs sur les fondamentaux web/mobile, en partenariat avec OWASP Cotonou.",
    long: "Programme complet couvrant OWASP Top 10, tests d'intrusion web et mobile, analyse dynamique, exploitation de vulnérabilités classiques, rédaction de rapports professionnels.",
    duree: "22 jours", niveau: "Intermédiaire", format: "Présentiel" },
  { tag: "Certification", title: "Préparation Linux Foundation",
    short: "Parcours structuré pour passer les certifications LFCS et LFCE.",
    long: "8 semaines de cours théoriques et pratiques, labs illimités, sessions de révision et examen blanc. Taux de réussite : 92%.",
    duree: "8 semaines", niveau: "Tous niveaux", format: "Hybride" },
  { tag: "Certification", title: "Préparation OffSec (OSCP)",
    short: "Formation offensive orientée pratique pour l'OSCP.",
    long: "12 semaines de préparation intensive : méthodologie de pentest, buffer overflows, privilege escalation Linux/Windows, Active Directory, rédaction du rapport d'examen.",
    duree: "12 semaines", niveau: "Avancé", format: "Présentiel" },
  { tag: "Vacances", title: "Formation Vacances Jeunes",
    short: "Initiation à la programmation, à l'IA et à l'hygiène numérique.",
    long: "Programme ludique destiné aux 12-20 ans : Scratch, Python, initiation à l'IA générative, hygiène numérique et bases de la bureautique.",
    duree: "4 semaines", niveau: "Débutant", format: "Présentiel" },
  { tag: "Entreprise", title: "Sensibilisation Cybersécurité",
    short: "Programme sur mesure pour vos collaborateurs.",
    long: "Modules interactifs sur le phishing, la gestion des mots de passe, les données sensibles, le télétravail sécurisé. Simulation de phishing incluse.",
    duree: "1 à 3 jours", niveau: "Tous", format: "Intra-entreprise" },
  { tag: "Gratuit", title: "Meetings OWASP Cotonou",
    short: "Rencontres régulières autour de la sécurité applicative.",
    long: "Un jeudi par mois : conférences, ateliers, retours d'expérience et networking. Ouvert à toute la communauté.",
    duree: "Demi-journée", niveau: "Tous", format: "Présentiel" },
];

const NEWS = [
  { img: "./img/project-pentest.jpg", date: "12 mars 2026", tag: "Événement",
    title: "EMES au Cyber Africa Forum 2026",
    short: "Notre équipe présente ses retours d'expérience sur la sécurisation des infrastructures critiques en Afrique de l'Ouest." },
  { img: "./img/project-academy.jpg", date: "28 février 2026", tag: "Formation",
    title: "Nouvelle cohorte ZeroToHero — Inscriptions ouvertes",
    short: "La 5è promotion de notre bootcamp sécurité web & mobile démarre le 15 avril. Places limitées à 20 participants." },
  { img: "./img/project-govnet.jpg", date: "10 février 2026", tag: "Actualité",
    title: "Partenariat avec l'APDP Bénin",
    short: "Signature d'une convention de collaboration pour l'accompagnement des entreprises béninoises vers la conformité." },
  { img: "./img/project-cloud.jpg", date: "22 janvier 2026", tag: "Publication",
    title: "Guide pratique — Sécuriser son cloud en 2026",
    short: "Nos experts publient un livre blanc gratuit couvrant les fondamentaux du zero-trust et de la sécurité cloud." },
  { img: "./img/project-banking.jpg", date: "05 janvier 2026", tag: "Certification",
    title: "EMES devient partenaire officiel OffSec",
    short: "Nous rejoignons le programme partenaires OffSec pour proposer les certifications OSCP et OSWP en Afrique." },
  { img: "./img/project-grc.jpg", date: "18 décembre 2025", tag: "Événement",
    title: "OWASP Cotonou — Édition spéciale fin d'année",
    short: "Retour sur notre meetup annuel qui a réuni plus de 120 professionnels de la cybersécurité au Bénin." },
];

/* -------- Renderers -------- */
function renderProjects(sel = "#projects-grid", data = PROJECTS) {
  const el = document.querySelector(sel); if (!el) return;
  el.innerHTML = data.map((p, i) => `
    <article class="card card--project reveal" data-i="${i}">
      <div class="card__media"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
      <div class="card__body">
        <span class="tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <a class="card__more" data-open-project="${i}">Voir plus <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </article>`).join("");
}

function renderServices(sel = "#services-grid", data = SERVICES) {
  const el = document.querySelector(sel); if (!el) return;
  el.innerHTML = data.map((s, i) => `
    <article class="card reveal" data-i="${i}">
      <div class="icon-box"><i class="fa-solid ${s.icon}"></i></div>
      <span class="tag">${s.tag}</span>
      <h3>${s.title}</h3>
      <p>${s.short}</p>
      <a class="card__more" data-open-service="${i}">Voir plus <i class="fa-solid fa-arrow-right"></i></a>
    </article>`).join("");
}

function renderFormations(sel = "#formations-grid", data = FORMATIONS) {
  const el = document.querySelector(sel); if (!el) return;
  el.innerHTML = data.map((f, i) => `
    <article class="card reveal" data-i="${i}">
      <span class="tag">${f.tag}</span>
      <h3>${f.title}</h3>
      <p>${f.short}</p>
      <ul class="meta-list">
        <li><i class="fa-regular fa-clock"></i> ${f.duree}</li>
        <li><i class="fa-solid fa-signal"></i> ${f.niveau}</li>
        <li><i class="fa-solid fa-location-dot"></i> ${f.format}</li>
      </ul>
      <a class="card__more" data-open-formation="${i}" style="margin-top:14px">Voir plus <i class="fa-solid fa-arrow-right"></i></a>
    </article>`).join("");
}

function renderNews(sel = "#news-grid", data = NEWS) {
  const el = document.querySelector(sel); if (!el) return;
  el.innerHTML = data.map(n => `
    <article class="card news-card reveal">
      <div class="card__media"><img src="${n.img}" alt="${n.title}" loading="lazy" /></div>
      <div class="card__body">
        <span class="tag">${n.tag}</span>
        <h3>${n.title}</h3>
        <p class="date"><i class="fa-regular fa-calendar"></i> ${n.date}</p>
        <p>${n.short}</p>
        <a class="card__more" href="#">Lire l'article <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </article>`).join("");
}

/* -------- Modal -------- */
function openModal({ img, tag, title, long, extra = "", link }) {
  const modal = document.getElementById("detail-modal"); if (!modal) return;
  modal.querySelector("#modal-img-wrap").innerHTML = img ? `<img src="${img}" alt="${title}" />` : "";
  modal.querySelector("#modal-tag").textContent = tag || "";
  modal.querySelector("#modal-title").textContent = title || "";
  modal.querySelector("#modal-desc").textContent = long || "";
  modal.querySelector("#modal-extra").innerHTML = extra;
  const l = modal.querySelector("#modal-link");
  if (link) { l.href = link; l.style.display = "inline-flex"; } else { l.style.display = "none"; }
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  const modal = document.getElementById("detail-modal"); if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* -------- Reveal on scroll -------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    // Fallback: pas de support -> on affiche tout directement
    els.forEach(el => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" });

  els.forEach(el => io.observe(el));

  // Filet de sécurité : si un élément n'est toujours pas révélé
  // après 2s (bug d'observer, élément hors flux, etc.), on le force.
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach(el => el.classList.add("in"));
  }, 2000);
}

/* -------- Init -------- */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderProjects();
  renderFormations();
  renderNews();
  initReveal();

  // Nav mobile
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  toggle?.addEventListener("click", () => links.classList.toggle("open"));

  // Delegation clicks
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open-project],[data-open-service],[data-open-formation],[data-close]");
    if (!t) return;
    if (t.hasAttribute("data-close")) return closeModal();
    if (t.dataset.openProject != null) {
      const p = PROJECTS[+t.dataset.openProject];
      const extra = `<ul class="meta-list" style="margin-top:16px">${p.stack.map(s=>`<li>${s}</li>`).join("")}</ul>`;
      openModal({ img: p.img, tag: p.tag, title: p.title, long: p.long, extra, link: p.link });
    } else if (t.dataset.openService != null) {
      const s = SERVICES[+t.dataset.openService];
      openModal({ tag: s.tag, title: s.title, long: s.long });
    } else if (t.dataset.openFormation != null) {
      const f = FORMATIONS[+t.dataset.openFormation];
      const extra = `<ul class="meta-list" style="margin-top:16px"><li><i class="fa-regular fa-clock"></i> ${f.duree}</li><li><i class="fa-solid fa-signal"></i> ${f.niveau}</li><li><i class="fa-solid fa-location-dot"></i> ${f.format}</li></ul>`;
      openModal({ tag: f.tag, title: f.title, long: f.long, extra });
    }
  });

  // Escape modal
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  // Forms feedback
  document.querySelectorAll("form[data-ok]").forEach(f => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = f.querySelector(".form__ok");
      if (ok) ok.hidden = false;
      f.reset();
    });
  });
});
