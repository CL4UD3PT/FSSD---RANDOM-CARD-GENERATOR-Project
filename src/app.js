/* eslint-disable */
import "bootstrap";
import "./style.css";

// let numCards = 0;
// const cards = [];
// const faces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const suits = [1, 2, 3, 4];

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getCardNumberOrLetter(cardNumber) {
  if (cardNumber == 1) return "A";
  if (cardNumber == 11) return "J";
  if (cardNumber == 12) return "Q";
  if (cardNumber == 13) return "K";
  if (cardNumber >= 2 && cardNumber <= 10) return cardNumber;
}

function getCardSuit(suitIndex) {
  if (suitIndex == 1) return "♣";
  if (suitIndex == 2) return "♦";
  if (suitIndex == 3) return "♥";
  if (suitIndex == 4) return "♠";
}

function classSuitColor(suitIndex) {
  if (suitIndex == 1) return "clubs";
  if (suitIndex == 2) return "diamonds";
  if (suitIndex == 3) return "hearts";
  if (suitIndex == 4) return "spades";
}

function cardConstructor(cardIndex = 1, suitIndex = 1) {
  const cardNumber = getCardNumberOrLetter(cardIndex);
  const cardSuit = getCardSuit(suitIndex);
  const suitClass = classSuitColor(suitIndex);

  const card = `<div class="card ${suitClass}">
                  <div class="fs-3 d-flex justify-content-start">
                    <span class="card-number d-inline-block">${cardNumber}</span>
                  </div>
                  <div class="card-suit fs-1">${cardSuit}</div>
                  <div class="fs-3 d-flex justify-content-end">
                    <span class="card-number rotate-180 d-inline-block">${cardNumber}</span>
                  </div>
                </div>`;
  return card;
}

window.onload = () => {
  const cardContainer = document.querySelector("#table");
  const cardNumberIndex = randomNumber(1, 13);
  const cardSuitIndex = randomNumber(1, 4);

  cardContainer.innerHTML = cardConstructor(cardNumberIndex, cardSuitIndex);
};
