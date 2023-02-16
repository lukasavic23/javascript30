"use strict";

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const getJSON = async function () {
  const response = await fetch(endpoint);

  if (!response.ok) return;

  const data = await response.json();
  cities.push(...data);
};
getJSON();

const debounce = function (func, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const findMatches = function (wordToMatch) {
  return cities.filter((item) => {
    const regex = new RegExp(wordToMatch, "gi");
    return item.city.match(regex) || item.state.match(regex);
  });
};

const numberWithCommas = function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const displayMatches = function () {
  const matchArray = findMatches(this.value, cities);
  const markup = matchArray
    .map((item) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = item.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = item.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
       <span class="name">${cityName}, ${stateName}</span>
       <span class="population">${numberWithCommas(item.population)}</span>
      </li>
    `;
    })
    .join("");

  suggestions.insertAdjacentHTML("afterbegin", markup);
};

searchInput.addEventListener("input", displayMatches);
