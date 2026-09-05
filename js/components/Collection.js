import { TopBar } from "./TopBar.js";
import { cars } from "../data/cars.js";

export function Collection() {

  const cards = cars.map(car => `
    <article class="car-card ${car.rarity.toLowerCase()}">

      <div class="card-car car-${car.color}"></div>

      <span>${car.rarity}</span>

      <h3>${car.name}</h3>

      <small>${car.type}</small>

    </article>
  `).join("");


  const lockedCards = Array.from(
    { length: 10 - cars.length },
    () => `
      <article class="car-card locked">

        <div class="lock">?</div>

        <span>UNKNOWN</span>

        <h3>LOCKED</h3>

      </article>
    `
  ).join("");


  const html = `
    <section id="collectionScreen" class="screen">

      ${TopBar({
        number: "04",
        title: "COLLECTION"
      })}


      <div class="collection-header">

        <div>
          <span>VEHICLE DATABASE</span>

          <h2>COLLECTION</h2>
        </div>


        <div class="progress-container">

          <span>60%</span>

          <div class="progress">
            <i style="width:60%"></i>
          </div>

        </div>

      </div>


      <div class="car-grid">

        ${cards}

        ${lockedCards}

      </div>

    </section>
  `;


  return {
    html,

    init() {
      this.bindEvents();
    },

    bindEvents() {

      document
        .querySelectorAll(".car-card:not(.locked)")
        .forEach(card => {

          card.addEventListener("click", () => {

            const name =
              card.querySelector("h3")?.textContent;

            console.log(
              `Selected car: ${name}`
            );

          });

        });

    }
  };
}
