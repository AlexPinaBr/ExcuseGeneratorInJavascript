/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let random = 0;
let result = "Hello world";
const excuse = document.querySelector("#excuse");

window.onload = function() {
  //write your code here
  const ranNum = arr => {
    return (random = Math.floor(Math.random() * arr.length));
  };
  result = `${who[ranNum(who)]} ${action[ranNum(action)]} ${
    what[ranNum(what)]
  } ${when[ranNum(when)]}`;

  excuse.innerHTML = result;
};
