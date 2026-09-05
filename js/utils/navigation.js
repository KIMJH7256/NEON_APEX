export function initNavigation() {

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest("[data-screen]");

      if (!button) return;

      const targetId =
        button.dataset.screen;

      showScreen(targetId);
    }
  );

}


export function showScreen(screenId) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });


  const target =
    document.getElementById(screenId);

  if (!target) return;

  target.classList.add("active");

}
