export const showToast = (message: string) => {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.setAttribute("style", `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: rgba(11, 8, 12, 0.95);
      border: 1px solid rgba(194, 164, 255, 0.35);
      box-shadow: 0 10px 30px rgba(194, 164, 255, 0.15);
      padding: 12px 24px;
      border-radius: 30px;
      color: #eae5ec;
      font-family: 'Geist', sans-serif;
      font-size: 14px;
      font-weight: 500;
      z-index: 99999;
      pointer-events: none;
      transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s ease;
      opacity: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    `);
    document.body.appendChild(container);
  }

  container.innerHTML = `<span>✉️</span> <span>${message}</span>`;
  
  // Force a reflow
  container.getBoundingClientRect();

  container.style.transform = "translateX(-50%) translateY(0)";
  container.style.opacity = "1";

  // Hide after 2.5 seconds
  setTimeout(() => {
    if (container) {
      container.style.transform = "translateX(-50%) translateY(100px)";
      container.style.opacity = "0";
    }
  }, 2500);
};
