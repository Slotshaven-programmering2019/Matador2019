class Bryggeri extends Ejendom{
    constructor(pris,position,leje1,leje2) {
        this.pris = pris;
        this.leje
        this.leje2 = leje2

        this.ejer;
        this.position = position;
        this.pantsat;

    }
    landetpaa(spiller,terningslag){
        if(spiller.ejendomme.includes(allebryggerier)){
            spiller.penge -= this.leje2*terningslag
        }
        spiller.penge -= this.leje1*terningslag
    }
}
