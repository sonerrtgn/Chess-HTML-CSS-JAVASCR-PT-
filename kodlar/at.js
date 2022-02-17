class at extends tas{
    constructor(konumx,konumy,renk){
        super(konumx,konumy,renk);
        this.bir_sonraki_hamleleri = [];
        this.tas_goster();
    }
    sonraki_hamle_hesapla(){
        /**
         *  = = = = = = =        
         *  = = K = K = =
         *  = K = = = K =
         *  = = = A = = =
         *  = K = = = K =
         *  = = K = K = =
         *  = = = = = = =
         *  
         *         
         *         
         * A harfi atı göstermek üzere bütün hareketleri H olabilir.
         */
        this.bir_sonraki_hamleleri = [];
        var rakip_rengi;
        if(this.renk == "beyaz"){
            rakip_rengi = "siyah";
        }else{
            rakip_rengi = "beyaz";
        }
        var hareketleri = [];
        hareketleri.push([this.konumx-1,this.konumy+2]);
        hareketleri.push([this.konumx-2,this.konumy+1]);
        hareketleri.push([this.konumx-2,this.konumy-1]);
        hareketleri.push([this.konumx-1,this.konumy-2]);
        hareketleri.push([this.konumx+1,this.konumy-2]);
        hareketleri.push([this.konumx+2,this.konumy-1]);
        hareketleri.push([this.konumx+2,this.konumy+1]);
        hareketleri.push([this.konumx+1,this.konumy+2]);
        //console.log(hareketleri);
        for(var i=0; i<8; i++){
            if((hareketleri[i][0] >-1 && hareketleri[i][0] <8) &&
                (hareketleri[i][1] >-1 && hareketleri[i][1] <8)){
                    if(taslar[hareketleri[i][0]][hareketleri[i][1]] == undefined){
                        this.bir_sonraki_hamleleri.push([hareketleri[i][0],hareketleri[i][1]]);
                    }else if(taslar[hareketleri[i][0]][hareketleri[i][1]].getRenk() == rakip_rengi){
                        this.bir_sonraki_hamleleri.push([hareketleri[i][0],hareketleri[i][1]]);
                    }
            }
        }

        
        //console.log(this.bir_sonraki_hamleleri);
        return this.bir_sonraki_hamleleri;
    }
    sonraki_hamleleri_goster(){
        var count = 0;
        while(count < this.bir_sonraki_hamleleri.length){
            console.log(this.bir_sonraki_hamleleri[count][0]+this.bir_sonraki_hamleleri[count][1]);
            document.getElementById(this.bir_sonraki_hamleleri[count][0]+"-"+this.bir_sonraki_hamleleri[count][1]).style.backgroundColor= "red";
            count++;
        }
    }

    tas_goster(){
        document.getElementById(this.konumx+"-"+this.konumy).innerHTML += "<img src='resimler/at_"+this.renk+".png' >";
    }
    konum_degistir(x,y){
        this.konumx = x;
        this.konumy = y;
        this.tas_goster();
    }
}
