import { TopBar } from "./TopBar.js";

export function Gacha() {

  const html = `
    <section id="gachaScreen" class="screen">

      ${TopBar({
        number: "03",
        title: "GACHA"
      })}


      <div class="gacha-container">

        <div class="gacha-title">

          <span>
            VEHICLE ACQUISITION SYSTEM
          </span>

          <h2>SUMMON</h2>

          <p>
            새로운 레이싱 머신을 획득하세요.
          </p>

        </div>


        <div
          class="capsule"
          id="capsule"
        >

          <div class="capsule-ring"></div>

          <div class="capsule-core">
            <span>?</span>
          </div>

          <div class="capsule-light"></div>

        </div>


        <div
          id="gachaResult"
          class="gacha-result hidden"
        >

          <span id="resultRarity">
            LEGENDARY
          </span>

          <h2 id="resultName">
            ZERO-G
          </h2>

          <p>
            NEW VEHICLE ACQUIRED
          </p>

          <button
            class="small-btn"
            id="closeResult"
          >
            CONTINUE
          </button>

        </div>


        <div class="gacha-bottom">

          <p>1 SUMMON</p>

          <strong>100 ◈</strong>

          <button
            class="action-btn"
            id="summonBtn"
          >
            SUMMON
          </button>

          <small>
            보유 크리스탈에서 100이 차감됩니다.
          </small>

        </div>

      </div>

    </section>
  `;

  return {
    html,

    init() {
      this.crystal = 320;

      this.summonButton =
        document.querySelector("#summonBtn");

      this.capsule =
        document.querySelector("#capsule");

      this.result =
        document.querySelector("#gachaResult");

      this.closeButton =
        document.querySelector("#closeResult");

      this.bindEvents();
    },

    bindEvents() {

      this.summonButton?.addEventListener(
        "click",
        () => this.summon()
      );

      this.closeButton?.addEventListener(
        "click",
        () => this.closeResult()
      );
    },

    summon() {

      if (this.crystal < 100) {
        alert("크리스탈이 부족합니다.");
        return;
      }

      this.crystal -= 100;

      this.updateCrystal();

      this.capsule.classList.add("active");

      setTimeout(() => {
        this.showResult();
      }, 1200);
    },

    showResult() {

      this.capsule.classList.remove("active");

      this.result.classList.remove("hidden");

      document.querySelector("#resultRarity")
        .textContent = "LEGENDARY";

      document.querySelector("#resultName")
        .textContent = "ZERO-G";
    },

    closeResult() {
      this.result.classList.add("hidden");
    },

    updateCrystal() {

      document.querySelectorAll(
        ".crystal-value"
      ).forEach(element => {
        element.textContent = this.crystal;
      });

      const mainCrystal =
        document.querySelector("#crystalCount");

      if (mainCrystal) {
        mainCrystal.textContent = this.crystal;
      }
    }
  };
}
