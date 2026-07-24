export const config = {
    developer: {
        name: "Ahmad",
        fullName: "Ahmad Raza",
        title: "AI Automation & Backend Developer",
        description: "AI Automation & Python Backend Developer building intelligent systems, automated workflows, and modern web applications. Passionate about FastAPI, chatbots, voice agents, and n8n AI automation."
    },
    social: {
        github: "4hmad69",
        email: "4hmadraza021@gmail.com",
        location: "Lahore, Pakistan"
    },
    about: {
        title: "ABOUT ME",
        description: "Full Stack AI and Automation Engineer with 1+ years of hands-on project experience building RAG systems, AI agents, workflow automations, and API-driven web applications. Strong in Python, FastAPI, PostgreSQL/pgvector, n8n, LangChain/LangGraph, Docker, LLM integrations, secure authentication, and REST API architecture. Passionate about creating practical systems that automate queries, notifications, and client support flows. Code is poetry, AI is the canvas."
    },
    experiences: [
        {
            position: "AI Automation Engineer",
            company: "Freelance & Projects",
            period: "2024 - Present",
            location: "Lahore, Pakistan",
            description: "Developing complex n8n workflows, WhatsApp chatbots, and ElevenLabs voice assistant automations. Connecting databases, APIs, and LLM nodes.",
            responsibilities: [
                "Building WhatsApp chatbot workflows for real estate and university activity routing",
                "Integrating ElevenLabs voice assistant flows with backend systems for custom brand actions",
                "Designing multi-step n8n automation flows with webhooks, API requests, and conditional logic",
                "Configuring prompt workflows, LLM integrations, and document query systems"
            ],
            technologies: ["n8n", "ElevenLabs", "WhatsApp Cloud API", "LangChain", "LLMs", "Webhooks"]
        },
        {
            position: "Backend Developer",
            company: "Academic Projects",
            period: "2024",
            location: "Lahore, Pakistan",
            description: "Designing e-commerce APIs and full-stack web applications. Focusing on schema validation, authentication models, and relational database systems.",
            responsibilities: [
                "Building FastAPI e-commerce backend with Pydantic request/response models",
                "Implementing JWT authentication and secure bcrypt password hashing",
                "Designing SQLite/PostgreSQL schemas, role-based admin routing, and CRUD operations",
                "Writing and organizing API test suites and managing endpoints validation"
            ],
            technologies: ["Python", "FastAPI", "SQLite", "PostgreSQL", "Pydantic", "React", "JWT"]
        },
        {
            position: "Software Engineering Student",
            company: "PUCIT",
            period: "2024 - Present",
            location: "Lahore, Pakistan",
            description: "Studying Software Engineering at Punjab University College of Information Technology. Grasping programming fundamentals, object-oriented concepts, and algorithms.",
            responsibilities: [
                "Mastering Programming Fundamentals, Object-Oriented Programming, and Data Structures",
                "Studying Analysis of Algorithms, Database Systems, AI, and Computer Networks",
                "Participating in PUCIT projects and winning Olympiad exhibition awards",
                "Applying computer organization and assembly language concepts"
            ],
            technologies: ["C", "C++", "Python", "Data Structures", "Algorithms", "Databases"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI Engineering Copilot",
            category: "AI Engineering / RAG",
            technologies: "FastAPI, Streamlit, PostgreSQL, pgvector, Sentence Transformers, Ollama, Docker",
            image: "/images/ai-copilot.png",
            description: "A local-first, codebase-aware RAG system for software projects. Safely ingests and chunks codebases, generates embeddings, retrieves context using pgvector, and answers repository questions with source citation and confidence scores.",
            link: "https://github.com/4hmad69/ai-engineering-copilot"
        },
        {
            id: 2,
            title: "FastCart API",
            category: "Backend / API",
            technologies: "Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, JWT, Docker, Pytest, GitHub Actions",
            image: "/images/fastcart-api.png",
            description: "A production-style multi-vendor e-commerce backend using FastAPI. Handles user registration and JWT login, role-based access, products/categories, cart systems with stock validation, order creation, and mock payments.",
            link: "https://github.com/4hmad69/fastcart-api"
        },
        {
            id: 3,
            title: "WhatsApp AI Lead Qualifier",
            category: "AI Automation",
            technologies: "n8n, Groq AI, WhatsApp Business API, Google Sheets, Conversation Memory",
            image: "/images/whatsapp-lead-qualifier.png",
            description: "An AI-powered WhatsApp Lead Qualifier for real estate businesses. Instantly replies to buyers/investors, collects property type, budget, and timeline, and saves leads into Google Sheets automatically.",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7473733305801064448/"
        },
        {
            id: 4,
            title: "AI Voice Assistant",
            category: "AI Automation / Voice AI",
            technologies: "ElevenLabs Conversational AI, Voice Design, n8n Automation, Custom Tools",
            image: "/images/voice-agent.png",
            description: "An interactive, friendly AI Voice Support Agent ('Sara') for the restaurant Cheezious. Instantly handles user booking and reservation inquiries, validates slot availability, and completes bookings via custom reservation tools.",
            link: "https://elevenlabs.io/app/agents/agents/agent_9201kvn1kqzdfk28nm26yx6w3bv9?branchId=agtbrch_8601kvn1ksk1fhrvxavsc32jnvs0"
        }
    ],
    contact: {
        email: "4hmadraza021@gmail.com",
        github: "https://github.com/4hmad69",
        linkedin: "https://linkedin.com/in/ahmad-raza-76b85b413",
        twitter: "https://x.com/4hmad021",
        facebook: "https://www.facebook.com/share/1GhYnxFACy/",
        instagram: "https://www.instagram.com/ahmad_razaaaaaa?igsh=MTVneWk4Z2tkN2NteQ=="
    },
    skills: {
        develop: {
            title: "AI ENGINEER",
            description: "Local-first codebase-aware RAG systems",
            details: "Building RAG pipelines, semantic & MMR search retrievers, codebase chunking workflows, prompt engineering frameworks, and evaluation suites using local LLMs.",
            tools: ["Python", "FastAPI", "pgvector", "LangChain", "Ollama", "Sentence Transformers", "Streamlit", "Docker", "PostgreSQL"]
        },
        design: {
            title: "BACKEND ENGINEER",
            description: "Production-style APIs & database architecture",
            details: "Developing multi-vendor REST APIs, JWT authentication/authorization flows, role-based routing, Pydantic request validation, Alembic migrations, database schemas, and robust automated test suites.",
            tools: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "SQLite", "JWT", "Pytest", "Docker", "GitHub Actions"]
        }
    }
};
