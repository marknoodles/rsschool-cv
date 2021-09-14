import _ from 'lodash';
import printMe from './print.js';
import "./style.scss";
import $ from 'jquery';

$("#slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});

// function component() {
// //     const element = document.createElement('div');
// //     const btn = document.createElement('button');

// //     // Lodash
// //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// //     element.classList.add('hello');
// //     btn.innerHTML = 'Click me and check the console!';
// //   btn.onclick = printMe;

// //   element.appendChild(btn);
// //     return element;
//   }
  
//   document.body.appendChild(component());