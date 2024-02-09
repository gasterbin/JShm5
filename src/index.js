"use strict";

/**
 * Функція calculateFathersAsTwiceElder обчислює, через скільки років (або скільки років тому)
 * Батько буде (був) вдвічі старший за сина.
 * @param {number} fathersAge - Вік батька.
 * @param {number} sonsAge - Вік сина.
 * @returns {string} - Повідомлення, що вказує через скільки років батько буде (був) вдвічі старший за сина.
 */

function calculateFathersAsTwiceElder(fathersAge, sonsAge) {
  if (fathersAge - sonsAge < 15 || sonsAge < 0) {
    return NaN;
  }

  return fathersAge / sonsAge === 2 ? 0 : fathersAge - sonsAge * 2;
}

const fathersAge = 50;
const sonsAge = 27;

const res = calculateFathersAsTwiceElder(fathersAge, sonsAge);

let strYear;
switch (Math.abs(res)) {
  case 1:
    strYear = "рік";
    break;
  case 2:
  case 3:
  case 4:
    strYear = "роки";
    break;
  default:
    strYear = "років";
}

if (Number.isNaN(res)) {
  console.log("Ви ввели неправильну інформацію! Спробуйте ще раз.");
} else {
  if (res < 0) {
    console.log(`Батько був старшим за сина ${res * -1} ${strYear} тому`);
  } else if (res > 0) {
    console.log(`Батько буде старшим за сина вдічі через ${res} ${strYear}`);
  } else {
    console.log("Батько зараз двічі старший за сина");
  }
}
