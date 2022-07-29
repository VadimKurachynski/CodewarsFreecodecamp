
function domainName(url) {

    let tch = url.indexOf(".");
    if (url.slice(tch - 3, tch) == "www") {
        let tch2 = url.indexOf(".", tch + 1);
        return url.slice(tch + 1, tch2)
    } else {
        let pl = url.indexOf("//");
        if (pl = -1) { return url.slice(0, tch) }
        return url.slice(pl + 2, tch)
    }

}
console.log(domainName("jtyfkufkugluglgi.co.uk"))





  //* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"
//("http://google.com"), "google");
 //   ("http://google.co.jp"), "google");
 //   ("www.xakep.ru"), "xakep");
 //   ("https://youtube.com"), "youtube");