import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// All tech stack items with their icons and official URLs
// Perfect inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Row 1 - 12 items (Core Languages & Foundation)
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
    { name: "SQL", icon: "https://img.icons8.com/color/48/database.png", url: "https://en.wikipedia.org/wiki/SQL" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
  ],
  // Row 2 - 10 items (AI & Core Backend Orchestration)
  [
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com" },
    { name: "LangChain", icon: "https://img.icons8.com/color/48/parrot.png", url: "https://langchain.com" },
    { name: "LangGraph", icon: "https://img.icons8.com/color/48/mind-map.png", url: "https://langchain-ai.github.io/langgraph/" },
    { name: "LangSmith", icon: "https://img.icons8.com/color/48/line-chart.png", url: "https://smith.langchain.com" },
    { name: "Ollama", icon: "https://ollama.com/public/ollama.png", url: "https://ollama.com" },
    { name: "Pydantic", icon: "https://raw.githubusercontent.com/pydantic/brand/main/pydantic-logo-square-120px-transparent.svg", url: "https://docs.pydantic.dev" },
    { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", url: "https://www.sqlalchemy.org" },
    { name: "Alembic", icon: "https://img.icons8.com/color/48/database-export.png", url: "https://alembic.zzzeek.org" },
  ],
  // Row 3 - 8 items (APIs, Integration & Automation)
  [
    { name: "REST APIs", icon: "https://img.icons8.com/color/48/api.png", url: "https://en.wikipedia.org/wiki/REST" },
    { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg", url: "https://jwt.io" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
    { name: "n8n", icon: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png", url: "https://n8n.io" },
    { name: "ElevenLabs", icon: "https://img.icons8.com/color/48/audio-wave.png", url: "https://elevenlabs.io" },
    { name: "WhatsApp API", icon: "https://img.icons8.com/color/48/whatsapp.png", url: "https://developers.facebook.com/docs/whatsapp" },
    { name: "Webhooks", icon: "https://img.icons8.com/color/48/api.png", url: "https://en.wikipedia.org/wiki/Webhook" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
  ],
  // Row 4 - 6 items (Databases & DevOps)
  [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
    { name: "pgvector", icon: "https://img.icons8.com/color/48/grid.png", url: "https://github.com/pgvector/pgvector" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", url: "https://sqlite.org" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io" },
    { name: "Compose", icon: "https://img.icons8.com/color/48/docker.png", url: "https://docs.docker.com/compose/" },
    { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png", url: "https://streamlit.io" },
  ],
  // Row 5 - 4 items (Quality & Development Tools)
  [
    { name: "Pytest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg", url: "https://pytest.org" },
    { name: "Ruff", icon: "https://img.icons8.com/color/48/checked-checkbox.png", url: "https://docs.astral.sh/ruff/" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co" },
  ],
  // Row 6 - 2 items (Design & Frontend Tooling)
  [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", url: "https://vite.dev" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
