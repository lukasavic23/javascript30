"use strict";

const keyParent = document.querySelector(".keys");

const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
};

window.addEventListener("keydown", playSound);

const removeClass = function (e) {
  const { target } = e;

  if (!target.classList.contains("playing")) return;

  target.classList.toggle("playing");
};

keyParent.addEventListener("transitionend", removeClass);
