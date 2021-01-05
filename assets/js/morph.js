import '../anime-master/lib/anime.es.js';
import anime from '../anime-master/lib/anime.es.js';

const moonPath = "M21.5 25.1202C21.5 31.1608 25.1202 36.0577 25.1202 36.0577C19.0796 36.0577 14.1827 31.1608 14.1827 25.1202C14.1827 19.0796 19.0796 14.1827 25.1202 14.1827C25.1202 14.1827 21.5 19.0796 21.5 25.1202Z";
const sunPath = "M36.0577 25.1202C36.0577 31.1608 31.1608 36.0577 25.1202 36.0577C19.0796 36.0577 14.1827 31.1608 14.1827 25.1202C14.1827 19.0796 19.0796 14.1827 25.1202 14.1827C31.1608 14.1827 36.0577 19.0796 36.0577 25.1202Z";

const moon = document.querySelector('.moon');
let toggle = true;

moon.addEventListener('click', () => {
  const path = toggle === true ? moonPath : sunPath;
  const fill = path === moonPath ? '#333' : '#EFC83E';
  const rotate = toggle === true ? 320 : 0;
  toggle = !toggle;
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });

  timeline
    .add({
      targets: '.moon .disc',
      d: [
        { value: path }
      ]
    })
    .add({
      targets: '.moon .ray',
      fill
    },
      "-= 750")
    .add({
      targets: '.moon',
      rotate
    }, "-= 500");

  // change colors
  let root = document.documentElement;
  const primary = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary');
  const secondary = getComputedStyle(document.documentElement)
    .getPropertyValue('--secondary');
  root.style.setProperty('--secondary', primary.valueOf());
  root.style.setProperty('--primary', secondary.valueOf());
});