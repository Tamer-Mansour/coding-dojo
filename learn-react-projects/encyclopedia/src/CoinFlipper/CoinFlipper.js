import React from "react";

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function CoinFlipper() {
    return (
        <div className="App">
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
            let result = tossCoin();

            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
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
fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
console.log("When does this run now?");

export default CoinFlipper;
