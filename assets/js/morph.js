import '../anime-master/lib/anime.es.js';
import anime from '../anime-master/lib/anime.es.js';

const moonPath = "M12.5 25C12.5 38.8071 25 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C25 0 12.5 11.1929 12.5 25Z";
const sunPath = "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z";

const moon = document.querySelector('.moon');
let path = moonPath;

moon.addEventListener('click', () => {
  path = path === moonPath ? sunPath : moonPath;
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  timeline.add({
    targets: '.moon path',
    d: [
      { value: path }
    ]
  })

  // change colors
  let root = document.documentElement;
  const primary = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
  const secondary = getComputedStyle(document.documentElement)
    .getPropertyValue('--secondary');
  root.style.setProperty('--secondary', primary.valueOf());
  root.style.setProperty('--primary', secondary.valueOf());
});