
function translatePigLatin(str) {

    if (str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u" || str[0] == "y") {
        return str + "way"
    } else {
        let reg = /(^[^a,e,i,o,u,y]*)/;
        let strn = str.replace(reg, "") + str.match(reg)[0] + "ay"
        return strn
    }

}


console.log(translatePigLatin("rhythm"))//rhythmay
//Гласные: A, E, I, O, U, Y