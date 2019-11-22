class Spiller {

    constructor(spillerNavn, position, ejendomme, penge, friKort) {
        this.spillerNavn = spillerNavn;
        this.position = position;
        this.ejendomme = ejendomme;
        this.penge = penge;
        this.friKort = friKort;
        this.terningSlag = terningSlag;
        this.huse = huse;
        this.hoteller = hoteller;
        this.turStart = turStart;
        this.spillerUde = spillerUde
    };

    spillerUde = false;

turStart(){
    if(spillerNavn.vaerdi >=0){
        spillerUde = true;
        alert("Du er ude af spillet, fucking taber kælling")
    }

    kastTerning();

    rykSpiller();

    if(position == grund){
        if(grundIkkeEjet){
            alert("Vil du købe grunden?" + jaKnap + nejKnap)
            jaKnap = createButton("Ja", jaTilKoeb);
            nejKnap = createButton("nej", nejTilKoeb);
            if(jaTilKoeb){
                købEjendom();
            }else if(nejTilKoeb){
                naesteTur();
            }
        }
    }
}

rykSpiller = function(position, terningSlag){
    position = terningSlag + position;
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
           */}
        };
    }
};