import React from "react";

function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function CoinFlipper() {
  return (
    <div className="d">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Welcome to the task</h1>
      <h1>this task is in the console </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function fiveHeadsSync() {
  let headsCount = 0;
  let attempts = 0;
  while (headsCount < 5) {
    attempts++;
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if (result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }
  return `It took ${attempts} tries to flip five "heads"`;
}
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
  return new Promise((resolve, reject) => {
    // your code here!
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
      attempts++;
      headsCount = tossCoin() === "heads" ? headsCount + 1 : 0;
      if (headsCount === 5) {
        resolve(
          `yes! We got 5 headcounts. Coin has been flipped ${attempts} times!`
        );
      }
      if (attempts > 100) {
        reject(
          "Coin has been flipped 100 times and we still don't have 5 headcounts."
        );
      }
    }
  });
}

async function Msg() {
  const Msg = await fiveHeads();
  console.log(".................... msg is _-_-_" + Msg);
}
Msg()
  .then((res) => Msg())
  .then(res => (res.ok ? res : Promise.reject(res)))
  .catch((err) => console.log(err));

console.log(`-------------This is the resolve`);
console.log("When does this run now?");

export default CoinFlipper;
