/* =========================================
   NEON APEX
   UI Prototype
========================================= */

const screens = document.querySelectorAll(".screen");

let crystals = 320;

const cars = [
  {
    name: "NOVA",
    rarity: "COMMON",
    type: "BALANCED"
  },
  {
    name: "PULSE",
    rarity: "COMMON",
    type: "ACCELERATION"
  },
  {
    name: "DRIFT-X",
    rarity: "COMMON",
    type: "DRIFT"
  },
  {
    name: "VOLT",
    rarity: "RARE",
    type: "SPEED"
  },
  {
    name: "PHANTOM",
    rarity: "RARE",
    type: "HANDLING"
  },
  {
    name: "INFERNO",
    rarity: "RARE",
    type: "ACCELERATION"
  },
  {
    name: "ECLIPSE",
    rarity: "EPIC",
    type: "DRIFT"
  },
  {
    name: "HYPERION",
    rarity: "EPIC",
    type: "SPEED"
  },
  {
    name: "ZERO-G",
    rarity: "LEGENDARY",
    type: "ABILITY"
  },
  {
    name: "APEX",
    rarity: "LEGENDARY",
    type: "BALANCED"
  }
];


/* =========================================
   SCREEN NAVIGATION
========================================= */

function showScreen(id) {

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }
}


document.querySelectorAll("[data-screen]").forEach(button => {

  button.addEventListener("click", () => {

    const screen = button.dataset.screen;

    showScreen(screen);

  });

});


/* =========================================
   CRYSTAL
========================================= */

function updateCrystals() {

  document.querySelector("#crystalCount").textContent = crystals;

  document.querySelectorAll(".crystal-value").forEach(element => {
    element.textContent = crystals;
  });

}

updateCrystals();


/* =========================================
   GARAGE
========================================= */

const selectCarButton = document.querySelector("#selectCar");

if (selectCarButton) {

  selectCarButton.addEventListener("click", () => {

    selectCarButton.textContent = "SELECTED ✓";

    selectCarButton.style.background = "transparent";
    selectCarButton.style.color = "#00f5ff";

    setTimeout(() => {

      selectCarButton.textContent = "SELECT CAR";

      selectCarButton.style.background = "";
      selectCarButton.style.color = "";

    }, 1500);

  });

}


/* =========================================
   GACHA
========================================= */

const summonButton = document.querySelector("#summonBtn");
const capsule = document.querySelector("#capsule");
const result = document.querySelector("#gachaResult");

const resultRarity = document.querySelector("#resultRarity");
const resultName = document.querySelector("#resultName");

const closeResult = document.querySelector("#closeResult");


function summonCar() {

  if (crystals < 100) {

    alert("크리스탈이 부족합니다.");

    return;
  }


  crystals -= 100;

  updateCrystals();


  summonButton.disabled = true;

  capsule.style.transform = "scale(1.15)";

  capsule.querySelector(".capsule-core").style.boxShadow =
    "0 0 80px #00f5ff, 0 0 150px rgba(0,245,255,.8)";


  setTimeout(() => {

    capsule.style.transform = "scale(.9)";

  }, 300);


  setTimeout(() => {

    const availableCars = cars.filter(car => {

      return !["APEX", "ECLIPSE"].includes(car.name);

    });


    const randomCar =
      availableCars[
        Math.floor(Math.random() * availableCars.length)
      ];


    resultRarity.textContent = randomCar.rarity;
    resultName.textContent = randomCar.name;


    result.classList.remove("hidden");

    capsule.style.transform = "scale(1)";

    capsule.querySelector(".capsule-core").style.boxShadow =
      "0 0 40px #9b4dff";


  }, 900);

}


if (summonButton) {

  summonButton.addEventListener("click", summonCar);

}


if (closeResult) {

  closeResult.addEventListener("click", () => {

    result.classList.add("hidden");

    summonButton.disabled = false;

  });

}


/* =========================================
   RACE SPEED EFFECT
========================================= */

const speedElement = document.querySelector("#speed");

let speed = 187;

function updateSpeed() {

  if (!speedElement) {
    return;
  }

  speed += Math.floor(Math.random() * 7) - 3;

  speed = Math.max(160, Math.min(215, speed));

  speedElement.textContent = speed;

}


setInterval(updateSpeed, 500);


/* =========================================
   ABILITY METER
========================================= */

const abilityMeter =
  document.querySelector(".ability-meter i");

const abilityPercent =
  document.querySelector(".ability-hud strong");

let ability = 76;


function chargeAbility() {

  if (!abilityMeter) {
    return;
  }

  ability += Math.random() * 2;

  if (ability >= 100) {
    ability = 100;
  }

  abilityMeter.style.width = `${ability}%`;

  abilityPercent.textContent =
    `${Math.floor(ability)}%`;

}


setInterval(chargeAbility, 1000);


/* =========================================
   KEYBOARD SHORTCUT
========================================= */

document.addEventListener("keydown", event => {

  // R 키 → 레이스 화면
  if (event.key.toLowerCase() === "r") {

    const activeScreen =
      document.querySelector(".screen.active");

    if (activeScreen?.id === "raceScreen") {

      showScreen("raceScreen");

    }

  }


  // ESC → 메인 메뉴
  if (event.key === "Escape") {

    showScreen("mainMenu");

  }

});


/* =========================================
   INITIALIZATION
========================================= */

showScreen("mainMenu");

console.log(
  "%cNEON APEX",
  "color:#00f5ff;font-size:30px;font-weight:bold"
);

console.log(
  "%cSYSTEM ONLINE",
  "color:#9b4dff;font-size:12px"
);
