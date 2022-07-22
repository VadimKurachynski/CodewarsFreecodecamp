


function howMuchILoveYou(nbPetals) {
    let dt = ["I love you", "a little", "a lot",
        "passionately", "madly", "not at all"];

    let e = nbPetals % 6;
    if (e == 0) { return dt[5]; }
    return dt[e - 1];

}
console.log(howMuchILoveYou(12));