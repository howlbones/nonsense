const contentContainer = document.querySelector('.content-container');
function updateMargins(event) {
  let styles = `
      .content-container { 
        height: ${ 900 - event.pageY}px !important;
      }
  `
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

window.addEventListener("mousemove", updateMargins, false);