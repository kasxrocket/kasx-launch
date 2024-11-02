import '../css/animate.css';
import '../css/style.css';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import ApexCharts from 'apexcharts';
import WOW from 'wowjs';

Alpine.plugin(intersect);
window.Alpine = Alpine;
Alpine.start();

window.wow = new WOW.WOW({
  live: false,
});

window.wow.init({
  offset: 50,
});

// ==== Token Chart
const charts = document.querySelectorAll('#chart');
if(charts.length) {
  let options = {
    series: [73, 55, 38, 20],
    chart: {
      type: "donut",
      width: 400,
    },
    colors: ["#2347B9", "#3363FF", "#8BA6FF", "#8696CA"],
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

// ==== darkToggler
const darkTogglerCheckbox = document.querySelector('#darkToggler');
const html = document.querySelector('html');

const darkModeToggler = () => {
  darkTogglerCheckbox.checked ? html.classList.remove('dark') : html.classList.add('dark');
};
darkModeToggler();

darkTogglerCheckbox.addEventListener('click', darkModeToggler);

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.querySelector('.back-to-top').onclick = () => {
  scrollTo(document.documentElement);
};
