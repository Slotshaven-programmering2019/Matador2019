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
        
    };
rykSpiller = function(position, terningSlag){

    position = terningSlag + position;

}


    købEjendom = function(position){

        if(penge > position.getParent().pris && position.getParent().ejer == bank){
            
            penge = penge-position.getparent().pris;
            position.getParent().ejer = spillerNavn;


        }

    }};