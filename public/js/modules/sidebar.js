const initialize = () => {  
  initializeSidebarCollapse();
}

const initializeSidebarCollapse = () => {
  const sidebarElement = document.getElementsByClassName("js-sidebar")[0];
  const sidebarToggleElement = document.getElementsByClassName("js-sidebar-toggle")[0];

  if(sidebarElement && sidebarToggleElement) {
    sidebarToggleElement.addEventListener("click", () => {
      sidebarElement.classList.toggle("collapsed");

      sidebarElement.addEventListener("transitionend", () => {
        window.dispatchEvent(new Event("resize"));
      });
    });
  }
}
