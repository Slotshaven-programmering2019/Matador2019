class Byggegrund extends Ejendom {
    constructor(stolpris,uberstolpris,leje,leje1,leje2,leje3,leje4,lejeuber,kategori,pris,position) {
        this.huspris;
        this.lejesatser = [leje,leje1,leje2,leje3,leje4,lejeuber];
        this.stolpris = stolpris;
        this.uberstolpris = uberstolpris;
        this.kategori = kategori
        this.huse;
        this.ejer;
        this.position = position;
        this.pantsat;
    }
landetpaa(spiller){
    spiller.penge -= this.lejesatser[this.huse];
}
};
