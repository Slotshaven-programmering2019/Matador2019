class Ejendom extends Felt {
    // 
    constructor(pris,stolpris,uberstolpris,leje,leje1,leje2,leje3,leje4,lejeuber,kategori,position) {
        this.pris = pris;
        this.huspris;
        this.lejesatser = [leje,leje1,leje2,leje3,leje4,lejeuber];

        this.ejer;
        this.stolpris = stolpris;
        this.uberstolpris = uberstolpris;
        this.kategori = kategori
        this.position = position;
        this.pantsat;
        this.huse;
    }
    landetpaa(spiller){

        spiller.penge -= this.lejesatser[this.huse];
    }

    pantsæt(){
        this.pantsat == true
        ejer.getParent().penge += pris/2

    }

};
