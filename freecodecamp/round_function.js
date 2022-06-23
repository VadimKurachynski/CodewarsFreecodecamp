let nn = 6.35;

function Okrugl(nn) {
    let okr = (nn * 10).toFixed(1);
    okr = Math.round(okr);
    okr = okr / 10;
    return okr;
}

console.log(Okrugl(6.55));

