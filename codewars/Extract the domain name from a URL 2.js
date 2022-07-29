
function domainName(url) {

    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];

}
console.log(domainName("jtyfkufkugluglgi.co.uk"))





  //* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"
//("http://google.com"), "google");
 //   ("http://google.co.jp"), "google");
 //   ("www.xakep.ru"), "xakep");
 //   ("https://youtube.com"), "youtube");