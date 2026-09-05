export function TopBar({
  number,
  title,
  right = ""
}) {
  return `
    <header class="topbar">

      <button
        class="back-btn"
        data-screen="mainMenu"
      >
        ← BACK
      </button>

      <div class="page-title">
        <span>${number}</span>
        ${title}
      </div>

      <div class="currency">
        ◈
        <strong class="crystal-value">320</strong>
      </div>

      ${right}

    </header>
  `;
}
