// const contentContainer = document.querySelector('.content-container');
const blackSunEl = document.querySelector('.blackcircle');
const sunEl = document.querySelector('.sun-container');
// function updateMargins(event) {
//   let styles = `
//       .content-container { 
//         height: ${ 900 - event.pageY}px !important;
//       }
//   `
//   const styleSheet = document.createElement("style")
//   styleSheet.textContent = styles
//   document.head.appendChild(styleSheet)
// }
function updateMargins(event) {
  // let styles = `
  //     .blackcircle { 
  //       left: -50px;
  //       transform: translateX(${event.pageX}px);
  //     }

  //     .sun-container { 
  //       left: -50px;
  //       transform: translateX(${-event.pageX}px);
  //     }
  // `
  blackSunEl.style.transform = `translate(${event.pageX}px)`
  sunEl.style.transform = `translate(${event.pageX}px)`
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

window.addEventListener("mousemove", updateMargins, false);