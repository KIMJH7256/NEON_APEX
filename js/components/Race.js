export function Race() {

  const html = `
    <section
      id="raceScreen"
      class="screen race-screen"
    >

      <div class="race-background">

        <div class="speed-lines"></div>

        <div class="city">

          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

        <div class="road"></div>

        <div class="race-car-player"></div>

      </div>


      <div class="race-hud">

        <div class="race-top">

          <div class="lap">
            LAP
            <strong>2</strong>
            / 3
          </div>


          <div class="position">

            <strong>3</strong>
            <span>/ 6</span>

          </div>

        </div>


        <div class="mini-map">

          <div class="map-line"></div>

          <i class="map-dot player"></i>

          <i class="map-dot enemy e1"></i>
          <i class="map-dot enemy e2"></i>
          <i class="map-dot enemy e3"></i>
          <i class="map-dot enemy e4"></i>

        </div>


        <div class="race-bottom">

          <div class="ability-hud">

            <span>ABILITY</span>

            <div class="ability-meter">
              <i style="width:76%"></i>
            </div>

            <strong>76%</strong>

            <div class="key">
              E
            </div>

          </div>


          <div class="speedometer">

            <strong id="speed">
              187
            </strong>

            <span>
              KM/H
            </span>

          </div>

        </div>

      </div>

    </section>
  `;


  return {

    html,

    init() {

      this.speed = 187;

      this.speedElement =
        document.querySelector("#speed");

      this.bindEvents();

    },


    bindEvents() {

      document.addEventListener(
        "keydown",
        event => {

          if (event.key.toLowerCase() === "e") {
            this.useAbility();
          }

        }
      );

    },


    useAbility() {

      console.log("NITRO BURST!");

      this.speed += 30;

      if (this.speedElement) {
        this.speedElement.textContent =
          this.speed;
      }

    }

  };

}
