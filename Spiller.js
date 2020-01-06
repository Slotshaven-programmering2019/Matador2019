class Spiller {

    constructor(position, ejendomme, penge, friKort) {
        //this.spillere = spillere;
        this.position = position;
        this.ejendomme = ejendomme;
        this.penge = penge;
        this.friKort = friKort;

     //   this.terningSlag = terningSlag;
     //   this.huse = huse;
     //   this.hoteller = hoteller;
     //   this.turStart = turStart;
     //   this.spillerUde = spillerUde

    }

    turStart = function (){
        var terningSlag = 7;//kastTerning(Terninger.kast());
        this.rykSpiller(terningSlag, this.position);
    }

    rykSpiller = function (position, terningSlag) {
            this.position = terningSlag + position;
            document.getElementById("spilgang").innerHTML += (" slag = " + terningSlag +", ny pos = " + this.position);
    }
        /*if (position == grund) {
            if (grundIkkeEjet) {
                alert("Vil du købe grunden?" + jaKnap + nejKnap)
                jaKnap = createButton("Ja", jaTilKoeb);
                nejKnap = createButton("nej", nejTilKoeb);
                if (jaTilKoeb) {
                    købEjendom();
                } else if (nejTilKoeb) {
                    if (spiller <= 3) {
                        naesteTur(spiller++);
                    } else if (spiller == 4) {
                        naesteTur(spiller == 0)
                    }
                }
            } else if (grundIkkeEjet == false) {
                betalEjer(leje.grundIkkeEjet);
            }

            købEjendom = function (position) {

                if (penge > position.getParent().pris && position.getParent().ejer == bank) {

                    penge = penge - position.getparent().pris;
                    position.getParent().ejer = spiller;
                } else if (penge < position.getParent().pris && position.getParent().ejer == bank) {
                    alert('Du har ikke råd din samfundsnasserøv. Få dig et job');
                }
                /* switch (key) {
                    case Proevlykken:
                        
                        break;
                    case 123:
    
                        break;
    
                    case 123:
    
                        break;
                    
                    case 123:
    
                        break;
                    
                    case 123:
    
                        break;
    
                    case 123:
    
                        break;
                        
                    default:
                    
                        break;
            
            }*/
        
}