class Spiller {

    constructor(spillere, position, ejendomme, penge, friKort) {
        this.spillere = spiller[1, 2, 3, 4];
        this.position = position;
        this.ejendomme = ejendomme;
        this.penge = penge;
        this.friKort = friKort;
        this.terningSlag = terningSlag;
        this.huse = huse;
        this.hoteller = hoteller;
        this.turStart = turStart;
        this.spillerUde = spillerUde;
        this.lejeVærdi = lejeVærdi;
    };

    spillerUde = false;

turStart(spiller){
    if(spiller.vaerdi >=0){
        spillerUde = true;
        alert("Du er ude af spillet, fucking taber kælling")
        if(spiller == 1){
            spiller = [2,3,4]
        }else if(spiller == 2){
            spiller = [1,3,4]
        }else if(spiller == 3){
            spiller = [1,2,4]
        }else if(spiller == 4){
            spiller = [1,2,3]
        }
    }

    kastTerning();

    rykSpiller = function(position, terningSlag){
        position = terningSlag + position;
    }
    
    if(position == grund){
        if(grundIkkeEjet){
            alert("Vil du købe grunden?" + jaKnap + nejKnap)
            jaKnap = createButton("Ja", jaTilKoeb);
            nejKnap = createButton("nej", nejTilKoeb);
            if(jaTilKoeb){
                købEjendom();
            }else if(nejTilKoeb){
                if(spiller <=3){
                    naesteTur(spiller ++);
                }else if(spiller == 4){
                    naesteTur(spiller == 0)
                }
            }
        }else if(grundIkkeEjet == false){
            betalEjer(leje.grundIkkeEjet);
        }

        købEjendom = function(position){

            if(penge > position.getParent().pris && position.getParent().ejer == bank){
                
                penge = penge-position.getparent().pris;
                position.getParent().ejer = spillerNavn;
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
        }    }
}

 };

