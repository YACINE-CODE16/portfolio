import { Code2, Database, BarChart3, Terminal, Award, Briefcase, GraduationCap, Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

export const personalInfo = {
  name: "Yacine ALLAM",
  title: "Data Science & Data Analysis",
  subtitle: "Futur Ingénieur en Data Science",
  description: "Étudiant en 4ème année d'école d'ingénieur passionné par la Data Science et le Machine Learning. Je recherche un stage de 4-5 mois en Data Science/Data Analysis à partir d'avril 2026.",
  email: "yacineallam00@gmail.com",
  phone: "+33 6.02.48.30.52",
  linkedin: "https://linkedin.com/in/yacine-allam",
  github: "https://github.com/yacineallam",
  location: "Paris, France",
};

export const education = [
  {
    school: "ESIEA Paris",
    degree: "Diplôme d'Ingénieur Informatique & Data",
    period: "2022 - 2027",
    description: "Grande école d'ingénieurs spécialisée en informatique et cybersécurité",
    courses: ["Machine Learning", "Numerical Python", "Bases de données NoSQL", "Analyse probabiliste"],
    logo: "ESIEA",
  },
  {
    school: "KMUTT Bangkok",
    degree: "Échange Académique - Data & AI",
    period: "Janvier - Mai 2025",
    description: "King Mongkut's University of Technology Thonburi - Semestre d'échange international",
    courses: ["Machine Learning", "NLP", "Database Systems", "Data Modeling", "Cybersecurity"],
    logo: "KMUTT",
  },
  {
    school: "Lycée Alexandre Dumas",
    degree: "Baccalauréat Scientifique - Mention Assez Bien",
    period: "2019 - 2022",
    description: "Lycée Français d'Alger",
    courses: ["Mathématiques", "Physique-Chimie", "SVT"],
    logo: "BAC",
  },
];

export const experiences = [
  {
    company: "Webentis DM",
    role: "Co-fondateur",
    period: "Décembre 2024 - Présent",
    location: "Paris, France",
    type: "Entrepreneuriat",
    description: "Agence de services digitaux spécialisée en data visualization et automatisation",
    achievements: [
      "Accompagnement de 10+ clients en data visualization, automatisation et reporting",
      "Développement de 5 tableaux de bord Power BI pour le suivi d'activité",
      "Supervision d'une équipe internationale de développeurs et designers",
    ],
    technologies: ["Power BI", "Python", "Excel", "SQL"],
  },
  {
    company: "Natixis - Groupe BPCE",
    role: "Stagiaire Data Analyst",
    period: "Juillet - Août 2025",
    location: "Alger, Algérie",
    type: "Stage",
    description: "Analyse et contrôle qualité des données au sein du département Data",
    achievements: [
      "Analyse des processus de contrôle qualité des données bancaires",
      "Développement d'un script Python automatisé pour la génération de rapports statistiques",
      "Création de tableaux de bord Power BI pour le suivi des indicateurs de qualité",
    ],
    technologies: ["Python", "Power BI", "SQL", "Excel"],
  },
  {
    company: "IMC",
    role: "Stagiaire Marketing & Data",
    period: "Juin - Août 2023",
    location: "Alger, Algérie",
    type: "Stage",
    description: "Analyse des données commerciales et support marketing",
    achievements: [
      "Analyse des tendances de vente avec Excel et Power BI",
      "Suivi logistique de plus de 40 commandes clients",
      "Support aux activités marketing et commerciales",
    ],
    technologies: ["Excel", "Power BI"],
  },
];

export const skills = {
  languages: {
    title: "Langages",
    icon: Code2,
    items: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 70 },
      { name: "Java", level: 65 },
      { name: "JavaScript", level: 60 },
      { name: "C", level: 55 },
    ],
  },
  dataML: {
    title: "Data & ML",
    icon: Database,
    items: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 75 },
      { name: "PyTorch", level: 60 },
    ],
  },
  visualization: {
    title: "Visualisation",
    icon: BarChart3,
    items: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Matplotlib", level: 85 },
      { name: "Plotly", level: 80 },
      { name: "Excel/VBA", level: 85 },
      { name: "Seaborn", level: 80 },
    ],
  },
  tools: {
    title: "Outils",
    icon: Terminal,
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
      { name: "Jupyter", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "Streamlit", level: 80 },
    ],
  },
};

export const projects = [
  {
    title: "Prédiction Tendance CAC40",
    description: "Modèle de Deep Learning LSTM bidirectionnel pour prédire la tendance du CAC40 à 15 jours. Comparaison avec Random Forest comme baseline.",
    longDescription: "Développement d'un modèle de prédiction de tendance boursière utilisant des réseaux de neurones LSTM bidirectionnels. Le projet inclut le feature engineering avec des indicateurs techniques (RSI, MACD, moyennes mobiles), l'optimisation des hyperparamètres, et une application Streamlit interactive.",
    image: "/portfolio/cac40.png",
    technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "Plotly", "yfinance"],
    metrics: {
      "AUC LSTM": "0.55",
      "AUC RF": "0.54",
      "Horizon": "15 jours",
    },
    github: "https://github.com/yacineallam/cac40-prediction",
    demo: "https://cac40-prediction.streamlit.app",
    featured: true,
  },
  {
    title: "Analyse Prédictive S&P 500",
    description: "Dashboard Tableau interactif analysant la croissance et la valorisation des entreprises du S&P 500 par secteur.",
    longDescription: "Création d'un tableau de bord analytique complet pour explorer les métriques financières des entreprises du S&P 500. Analyse des ratios de valorisation, croissance des revenus, et performance sectorielle.",
    image: "/portfolio/sp500.png",
    technologies: ["Python", "Tableau", "Yahoo Finance", "Pandas"],
    metrics: {
      "Entreprises": "500+",
      "Secteurs": "11",
      "Métriques": "15+",
    },
    github: "https://github.com/yacineallam/sp500-analysis",
    featured: true,
  },
  {
    title: "Prédiction Défaut de Crédit",
    description: "Modèle de Machine Learning pour prédire le risque de défaut de crédit sur le German Credit Dataset.",
    longDescription: "Développement d'un modèle prédictif pour évaluer le risque de défaut de crédit. Utilisation de techniques d'ensemble (XGBoost, Random Forest) avec optimisation des hyperparamètres et analyse SHAP pour l'interprétabilité.",
    image: "/portfolio/credit.png",
    technologies: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas"],
    metrics: {
      "Accuracy": "78%",
      "AUC-ROC": "0.82",
      "Features": "20+",
    },
    github: "https://github.com/yacineallam/credit-default-prediction",
    featured: true,
  },
];

export const certifications = [
  {
    name: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "2024",
    icon: Award,
  },
  {
    name: "Bloomberg Finance Fundamentals",
    issuer: "Bloomberg",
    date: "2024",
    icon: Award,
  },
];

export const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Expériences", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Formation", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "Email", href: "mailto:yacineallam00@gmail.com", icon: Mail },
  { name: "LinkedIn", href: "https://linkedin.com/in/yacine-allam", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/yacineallam", icon: Github },
];
