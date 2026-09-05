import { TopBar } from "./TopBar.js";

export function Garage() {

  const html = `
    <section id="garageScreen" class="screen">

      ${TopBar({
        number: "02",
        title: "GARAGE"
      })}


      <div class="garage-layout">

        <div class="car-preview">

          <div class="car-glow"></div>

          <div class="fake-car">
            <div class="car-body"></div>
            <div class="car-window"></div>

            <div class="car-wheel wheel-left"></div>
            <div class="car-wheel wheel-right"></div>

            <div class="car-light"></div>
          </div>


          <div class="car-name">
            <span>LEGENDARY</span>
            <h2>APEX</h2>
            <p>THE PERFECT BALANCE</p>
          </div>

        </div>


        <div class="car-info">

          <div class="rarity legendary">
            LEGENDARY
          </div>

          <h2>APEX</h2>

          <p class="description">
            극한의 속도와 안정성을 동시에 갖춘 차세대 레이싱 머신.
          </p>


          <div class="stats">

            <div class="stat">
              <div>
                <span>TOP SPEED</span>
                <b>★★★★★</b>
              </div>

              <div class="bar">
                <i style="width:96%"></i>
              </div>
            </div>


            <div class="stat">
              <div>
                <span>ACCELERATION</span>
                <b>★★★★☆</b>
              </div>

              <div class="bar">
                <i style="width:84%"></i>
              </div>
            </div>


            <div class="stat">
              <div>
                <span>HANDLING</span>
                <b>★★★★★</b>
              </div>

              <div class="bar">
                <i style="width:94%"></i>
              </div>
            </div>


            <div class="stat">
              <div>
                <span>DRIFT</span>
                <b>★★★★☆</b>
              </div>

              <div class="bar">
                <i style="width:87%"></i>
              </div>
            </div>

          </div>


          <div class="ability-box">

            <span>SPECIAL ABILITY</span>

            <h3>NITRO BURST</h3>

            <p>
              강력한 순간 가속으로 최고속도에 도달한다.
            </p>

            <div class="ability-key">
              E
            </div>

          </div>


          <button
            class="action-btn"
            id="selectCar"
          >
            SELECT CAR
          </button>

        </div>

      </div>

    </section>
  `;

  return {
    html,
    init() {
      this.bindEvents();
    },

    bindEvents() {
      const button = document.querySelector("#selectCar");

      button?.addEventListener("click", () => {
        console.log("APEX selected");
      });
    }
  };
}
