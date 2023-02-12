"use strict";

const panels = document.querySelector(".panels");

const handleClick = function (e) {
  const target = e.target.closest(".panel");

  target.classList.toggle("open");
};

const handleTransition = function (e) {
  const target = e.target.closest(".panel");
  if (!target) return;

  if (e.propertyName.includes("flex-grow"))
    target.classList.toggle("open-active");
};

panels.addEventListener("click", handleClick);
panels.addEventListener("transitionend", handleTransition);
