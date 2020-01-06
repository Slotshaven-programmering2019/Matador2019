function setup() {
    
}

function main(){
var spillerantal = prompt("Hvor mange spillere");
document.getElementById("spilleplade").hidden = false;
document.getElementById("textid").hidden = true;

var startbelob = 2000;
var spillere = [];
var spillerHarTur = 0; 
var antalRunder = 0;
var gameOver = false;

for (let i = 0; i < spillerantal; i++) {
    spillere[i] = new Spiller(0,0,startbelob,0);
    console.log(spillere[i]);
}
    
while(!gameOver) {
    document.getElementById("spilgang").innerHTML += ("Spiller " + spillerHarTur + " rykker " + "<br>" );
    spillere[spillerHarTur].turStart();
    spillerHarTur += 1;
    if (spillerHarTur >= spillere.length) {
        spillerHarTur = 0;
        antalRunder += 1;
        if (antalRunder > 10) gameOver = true;
    }

}

document.getElementById("spilgang").innerHTML += ("Spillet er slut ");

//lav spillerantal spillere
//tegn alle tingende UI + Spillebræt + information omkring hvem der skal kaste først
//få første spiller til at kaste
/*flyt spiller og gør hvad feltet personen har landet på gør ved spilleren 
(? felt få spilleren til at trække kortet, anden spillers felt få spilleren til at betale,osv.osv.)*/
//giv spilleren de muligheder personen har til sidst (trade,køb huse,køb hoteller)


}



// instacere hele programmet
//function lavspillere(antalspillere){
//    if(spillerUde == true){
//        bankerot();
//    }
//}