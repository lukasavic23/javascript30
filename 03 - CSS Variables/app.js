"use strict";

const inputsContainer = document.querySelector(".controls");

const handleUpdate = function (e) {
  const { target } = e;

  if (target.nodeName !== "INPUT") return;

  const suffix = target.type === "range" ? "px" : "";

  document.documentElement.style.setProperty(
    `--${target.name}`,
    target.value + suffix
  );
};

inputsContainer.addEventListener("change", handleUpdate);
inputsContainer.addEventListener("input", handleUpdate);

const init = function () {
  inputsContainer.childNodes.forEach((child) => {
    if (child.nodeName === "INPUT") child.value = child.defaultValue;
  });
};

window.addEventListener("DOMContentLoaded", init);
