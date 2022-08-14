
function convertToRoman(num) {
    let mass = [];
    let len = String(num).length;
    for (let i = 0; i < len; i++) {
        mass.push(per((Number(String(num)[i] + "0".repeat(len - 1 - i)))));

        // mass.push((Number(String(num)[i] + "0".repeat(len - 1 - i))));
    }
    console.log(mass)

    function per(x) {
        let z = 1;
        let y = "";
        let glav = "";
        if (x >= 1000) { z = x / 1000; x = 1000 }
        switch (x) {
            case 1000: y = "M"; break;
            case 900: y = "CM"; break;
            case 800: y = "DCCC"; break;
            case 700: y = "DCC"; break;
            case 600: y = "DC"; break;
            case 500: y = "D"; break;
            case 400: y = "CD"; break;
            case 300: y = "CCC"; break;
            case 200: y = "CC"; break;
            case 100: y = "C"; break;
            case 90: y = "XC"; break;
            case 80: y = "LXXX"; break;
            case 70: y = "LXX"; break;
            case 60: y = "LX"; break;
            case 50: y = "L"; break;
            case 40: y = "XL"; break;
            case 30: y = "XXX"; break;
            case 20: y = "XX"; break;
            case 10: y = "X"; break;
            case 9: y = "IX"; break;
            case 8: y = "VIII"; break;
            case 7: y = "VII"; break;
            case 6: y = "VI"; break;
            case 5: y = "V"; break;
            case 4: y = "IV"; break;
            case 3: y = "III"; break;
            case 2: y = "II"; break;
            case 1: y = "I"; break;
        }
        if (x > 0) {
            glav = y.repeat(z);
        } else { glav = "" }
        return glav;
    }
    return mass.join("");
}
console.log(convertToRoman(30));//MMMCMLXXXVI

