class sah extends tas{
    constructor(konumx,konumy,renk){
        super(konumx,konumy,renk);
        this.bir_sonraki_hamleleri = [];
        this.tas_goster();
    }
    sonraki_hamle_hesapla(){
        /**
         *  | X X X X X 
         *  | X H H H X       
         *  | X H S H X
         *  | X H H H X         
         *          
         * S harfi sahi göstermek üzere H hareketleri gibi yapabilir.
         */
        this.bir_sonraki_hamleleri = [];
        var rakip_rengi;
        if(this.renk == "beyaz"){
            rakip_rengi = "siyah";
        }else{
            rakip_rengi = "beyaz";
        }
        //yukari
        if(this.konumx-1 > -1){
            if(taslar[this.konumx-1][this.konumy] == undefined || taslar[this.konumx-1][this.konumy].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx-1,this.konumy]);
            }
        }
        
        //yukari sag capraz
        if(this.konumx-1 > -1 && this.konumy+1 < 8){
            if(taslar[this.konumx-1][this.konumy+1] == undefined || taslar[this.konumx-1][this.konumy+1].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx-1,this.konumy+1]);
            }
        }
        
        // yukari sol capraz
        if(this.konumx -1 > -1 && this.konumy-1 > -1){
            if(taslar[this.konumx-1][this.konumy-1] == undefined || taslar[this.konumx-1][this.konumy-1].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx-1,this.konumy-1]);
            }
        }
        // sol areket
        if(this.konumy-1 > -1){
            if(taslar[this.konumx][this.konumy-1] == undefined || taslar[this.konumx][this.konumy-1].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx,this.konumy-1]);
            }
        }
        // sag hareket
        if(this.konumy+1 < 8){
            if(taslar[this.konumx][this.konumy+1] == undefined || taslar[this.konumx][this.konumy+1].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx,this.konumy+1]);
            }
        }

        // asagi hareket
        if(this.konumx+1 < 8){
            if(taslar[this.konumx+1][this.konumy] == undefined || taslar[this.konumx+1][this.konumy].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx+1,this.konumy]);
            }
        }
        //asagi sag hareket
        if(this.konumx+1 < 8 && this.konumy+1 < 8){
            if(taslar[this.konumx+1][this.konumy+1] == undefined || taslar[this.konumx+1][this.konumy+1].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx+1,this.konumy+1]);
            }
        }

        //asagi sol hareket
        if(this.konumx+1 <8 && this.konumy-1 > -1){
            if(taslar[this.konumx+1][this.konumy-1] == undefined || taslar[this.konumx+1][this.konumy-1].getRenk() == rakip_rengi){
                this.bir_sonraki_hamleleri.push([this.konumx+1,this.konumy-1]);
            }
        }
        


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
        document.getElementById(this.konumx+"-"+this.konumy).innerHTML += "<img src='resimler/sah_"+this.renk+".png' >";
    }
    konum_degistir(x,y){
        this.konumx = x;
        this.konumy = y;
        this.tas_goster();
    }
}
