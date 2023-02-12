"use strict";

const secondHand = document.querySelector(".js-second");
const minHand = document.querySelector(".js-min");
const hourHand = document.querySelector(".js-hour");

const setDate = function () {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondsDegrees = seconds / 60;
  const minutesDegrees = (secondsDegrees + minutes) / 60;
  const hoursDegrees = (minutesDegrees + hours) / 12;

  setRotation(secondHand, secondsDegrees);
  setRotation(minHand, minutesDegrees);
  setRotation(hourHand, hoursDegrees);
};

const setRotation = function (element, rotationDegrees) {
  const translate = "translateX(-50%)";
  element.style.transform = `${translate} rotate(${rotationDegrees * 360}deg)`;
};

setInterval(setDate, 1000);
setDate();

const checkbox = document.querySelector(".js-toggle");
const checkboxText = document.querySelector(".js-toggle-text");
const clock = document.querySelector(".clock");
const clockBorder = document.querySelector(".clock-border");

const toggleClass = function (element, className, prop = "add") {
  if (prop === "remove") element.classList.remove(`${className}`);
  else element.classList.add(`${className}`);
};

const toggleHands = function (color) {
  secondHand.style.setProperty("--background", color);
};

const toggleText = function (text, color) {
  checkboxText.textContent = text;
  checkboxText.style.color = color;
};

const enableDarkMode = function () {
  toggleClass(document.body, "dark-bg");
  toggleClass(clock, "dark-clock");
  toggleClass(clockBorder, "dark-clock-border");

  toggleHands("#8E98A1");

  toggleText("Dark", "white");
};

const disableDarkMode = function () {
  toggleClass(document.body, "dark-bg", "remove");
  toggleClass(clock, "dark-clock", "remove");
  toggleClass(clockBorder, "dark-clock-border", "remove");

  toggleHands("#646e82");

  toggleText("Light", "#363e46");
};

const toggleMode = function () {
  if (checkbox.checked) enableDarkMode();
  if (!checkbox.checked) disableDarkMode();
};

checkbox.addEventListener("change", toggleMode);
toggleMode();
