let deyer = prompt("Kevinin Sevgi Etirafina He desen xosbext olacaqsan Yox desen basina bedbext isler gelecek ");

let num = 0;
let reqem = 9000000000;

while (num < 5) {
    if (deyer=="He") {
        num++;
    } else if(deyer=="Yox") {
        reqem *= 99999999999999;
        console.log("Sen Boyuk Sehv etdin Cezasını çək ")
    }
}
document.getElementById("cavab").innerHTML = "Tesekurler "