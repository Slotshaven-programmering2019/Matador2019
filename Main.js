function setup() {
    
}

function main(){
var spillerantal = prompt("Hvor mange spillere");
document.getElementById("spilleplade").hidden = false;
document.getElementById("textid").hidden = true;

var startbeløb = 2000;
var spillere = [];
for (let i = 0; i < spillerantal; i++) {
    spillere[i] = new Spiller("spiller"+i,1,0,startbeløb,0);
    console.log(spillere[i]);
}
    



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