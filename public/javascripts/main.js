/*
 * Vänta på att sidan har laddats.
 * Läs mer, https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
window.addEventListener('load', (event) => {
  const button = document.querySelector('.navbar-toggle');
  const collapse = document.querySelector('.navbar-collapse');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    collapse.classList.toggle('show');
  }, false);
});
