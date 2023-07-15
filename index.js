const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
hamburger.addEventListener('click', function (ev) {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})
const main = document.querySelector('main')
const root = document.querySelector(':root')
document.getElementById('lmp').addEventListener('click', function () {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color2', '#8a8e92')
    root.style.setProperty('--bg-color1', '#e9e9e9d8')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--border-color', '#191919')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color2', '#302e2e')
    root.style.setProperty('--bg-color1', '#191919')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#ffff')
    main.dataset.theme = 'dark'
  }
})



