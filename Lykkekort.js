var vælgkort = -1;
var mængdekort = 4;
var lykken = 0;
if (lykken == 1) {
    vælgkort = random(0, mængdekort + 1);
    lykken = 0;
}
if (vælgkort != -1) {
    gørnoget();
    console.log(vælgkort);
}

function gørnoget() {
    if (vælgkort == 1) {
        alert("Du købte 4 pølsehorn i kantinen: -500 kroner");
        console.log(spiller.penge);
        spiller.penge -= 500;
        console.log(spiller.penge);
        vælgkort = -1;
    }
    if (vælgkort == 2) {
        alert("Din bimmer blev piftet, rul 4 felter tilbage");
        console.log(spiller.position);
        spiller.position -= 4;
        console.log(spiller.position);
        vælgkort = -1;
    }
    if (vælgkort == 3) {
        alert("Du kom til at vælge danske bank: -10% af din nuværende formue");
        console.log(spiller.penge);
        spiller.penge *= .9;
        console.log(spiller.penge);
        vælgkort = -1;
    }
    if (vælgkort == 4) {
        alert("Du vandt aktiedysten!!: +500 kroner (4 kantinepølsehorn)");
        console.log(spiller.penge);
        spiller.penge += 500;
        console.log(spiller.penge);
        vælgkort = -1;
    }

}
