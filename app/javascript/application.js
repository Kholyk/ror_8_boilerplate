// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

window.addEventListener("turbo:load", (event) => {
  // Sample for using bootstrap Popover on some elements
  // https://getbootstrap.com/docs/5.3/components/popovers/#enable-popovers
  const nodesList = document.querySelectorAll('[data-bs-toggle="popover"]');
  Array.from(nodesList).map(el => new bootstrap.Popover(el, {'trigger': 'focus'}))

  // Offcanvas menu
  // https://getbootstrap.com/docs/5.3/components/offcanvas/#via-javascript
  const offCanvasnodelist = document.querySelectorAll('.offcanvas');
  [...offCanvasnodelist].map(el => new bootstrap.Offcanvas(el));
  
  // Dismissable alerts ant notices
  const dissmissableNodes = document.querySelectorAll('.alert');
  [...dissmissableNodes].map((dismissable) => {
    const alert = new bootstrap.Alert(dismissable);
    // Closes after 2 seconds
    setTimeout(() => alert.close(), 6000);
  })
});
