class tas{
    constructor(konumx,konumy, renk){
        this.konumx = konumx;
        this.konumy = konumy;
        this.renk  = renk;
    }

    getRenk(){
        return this.renk;
    }
    
    getKonumx(){
        return this.konumx;
    }
    setKonumx(konumx){
        this.konumx = konumx;
    }

    getKonumy(){
        return this.konumy;
    }
    setKonumy(konumy){
        this.konumy = konumy;
    }
}