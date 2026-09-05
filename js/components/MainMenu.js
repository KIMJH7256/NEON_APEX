export function MainMenu() {
  return `
    <main id="mainMenu" class="screen active">

      <div class="logo-area">
        <div class="logo-small">NEON</div>

        <h1>APEX</h1>

        <p>FUTURE RACING CHAMPIONSHIP</p>
      </div>


      <div class="main-menu">

        <button class="menu-btn primary" data-screen="raceScreen">
          <span>01</span>
          RACE
          <small>레이스 시작</small>
        </button>

        <button class="menu-btn" data-screen="garageScreen">
          <span>02</span>
          GARAGE
          <small>자동차 선택</small>
        </button>

        <button class="menu-btn" data-screen="gachaScreen">
          <span>03</span>
          GACHA
          <small>자동차 뽑기</small>
        </button>

        <button class="menu-btn" data-screen="collectionScreen">
          <span>04</span>
          COLLECTION
          <small>자동차 도감</small>
        </button>

      </div>


      <div class="menu-footer">

        <span>
          NEON APEX // SYSTEM ONLINE
        </span>

        <span>
          CRYSTAL
          <strong id="crystalCount">320</strong>
        </span>

      </div>

    </main>
  `;
}
