// src/main.js
import 'core-js/stable';
import 'regenerator-runtime/runtime';



import './public/style.css';
import Regular from './src/utils/my-regular.js';

new Regular({
    template: `
    <Father></Father>
    <Counter></Counter>
  `
}).$inject('#app');
