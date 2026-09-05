import { Background } from "./components/Background.js";
import { MainMenu } from "./components/MainMenu.js";
import { Garage } from "./components/Garage.js";
import { Gacha } from "./components/Gacha.js";
import { Collection } from "./components/Collection.js";
import { Race } from "./components/Race.js";

import { initNavigation } from "./utils/navigation.js";


const app =
  document.querySelector("#app");


/*
 * 컴포넌트 생성
 */

const garage =
  Garage();

const gacha =
  Gacha();

const collection =
  Collection();

const race =
  Race();


/*
 * HTML 조립
 */

app.innerHTML = `

  ${Background()}

  ${MainMenu()}

  ${garage.html}

  ${gacha.html}

  ${collection.html}

  ${race.html}

`;


/*
 * 이벤트 초기화
 */

initNavigation();

garage.init();
gacha.init();
collection.init();
race.init();
