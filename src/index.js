const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  sp: " ",
};

function decode(expr) {
  const numbers = {
    10: ".",
    11: "-",
    "**": "sp",
  };
  const arrayNumbers = expr.split("");
  const arrayMultiTen = [];
  for (let i = 0; i < arrayNumbers.length; i += 10) {
    arrayMultiTen.push(arrayNumbers.slice(i, i + 10));
  }
  arrayMultiTen.forEach((item) => {
    let count = item.indexOf("1");
    if (count === -1) {
      item.splice(0, 8);
    }
    item.splice(0, count);
  });
  return arrayMultiTen
    .map((item) => {
      const array = [];
      for (let i = 0; i < item.length; i += 2) {
        array.push(numbers[item.slice(i, i + 2).join("")]);
      }
      return array.join("");
    })
    .map((item) => MORSE_TABLE[item])
    .join("");
}

module.exports = {
  decode,
};
