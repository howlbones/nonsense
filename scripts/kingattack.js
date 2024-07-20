let punchButton = document.querySelector('.king-controls_punch');
let kickButton = document.querySelector('.king-controls_kick');
let kingStill = document.querySelector('.king__img_still');
let kingPunch = document.querySelector('.king__img_punch');
let kingKick = document.querySelector('.king__img_kick');

let isPunching = false;
let isKicking = false;

punchButton.addEventListener('mousedown', () => {
  if (!isPunching) {
    kingStill.classList.toggle('hidden');
    kingPunch.classList.toggle('hidden');
    isPunching = true;
    setTimeout(() => {
      kingStill.classList.toggle('hidden');
      kingPunch.classList.toggle('hidden');
      isPunching = false;
    }, 200);
  }
});

kickButton.addEventListener('mousedown', () => {
  if (!isKicking) {
    kingStill.classList.toggle('hidden');
    kingKick.classList.toggle('hidden');
    isKicking = true;
    setTimeout(() => {
      kingStill.classList.toggle('hidden');
      kingKick.classList.toggle('hidden');
      isKicking = false;
    }, 200);
  }
});



cr.api(function (page) {
  page.executeBackendScenario("testirovanie", {
  param1: "data",
  param2: 384
  }).then(function (r) { console.log(r) });
})