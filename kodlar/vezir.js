class vezir extends tas{
    constructor(konumx,konumy,renk){
        super(konumx,konumy,renk);
        this.bir_sonraki_hamleleri = [];
        this.tas_goster();
    }
    sonraki_hamle_hesapla(){
        /**
         *     H   H
         *      H H
         *       F
         *      H H 
         *     H   H
         *       
         *      
         *         
         * F harfi FİLİ göstermek üzere bütün hareketleri H olabilir.
         */
        this.bir_sonraki_hamleleri = [];
        var rakip_rengi;
        if(this.renk == "beyaz"){
            rakip_rengi = "siyah";
        }else{
            rakip_rengi = "beyaz";
        }
        var x_koru = this.konumx+1;
        var y_koru = this.konumy+1;
        //asagi sag capraz
        while((x_koru < 8 && y_koru < 8) && (taslar[x_koru][y_koru] == undefined || taslar[x_koru][y_koru].getRenk() == rakip_rengi) ){
            this.bir_sonraki_hamleleri.push([x_koru,y_koru]);
            if(taslar[x_koru][y_koru] != undefined && taslar[x_koru][y_koru].getRenk() == rakip_rengi){
                break;
            }
            x_koru++;
            y_koru++;
        }
        //asagi sol capraz
        x_koru = this.konumx+1;
        y_koru = this.konumy -1;
        while((x_koru < 8 && y_koru > -1 )&& (taslar[x_koru][y_koru] == undefined || taslar[x_koru][y_koru].getRenk() == rakip_rengi) ){
            this.bir_sonraki_hamleleri.push([x_koru,y_koru]);
            if(taslar[x_koru][y_koru] != undefined && taslar[x_koru][y_koru].getRenk() == rakip_rengi){
                break;
            }
            x_koru++;
            y_koru--;
        }

        //yukari sag capraz
        x_koru = this.konumx-1;
        y_koru = this.konumy+1;
        while((x_koru >-1 && y_koru < 8) && (taslar[x_koru][y_koru] == undefined || taslar[x_koru][y_koru].getRenk() == rakip_rengi) ){
            this.bir_sonraki_hamleleri.push([x_koru,y_koru]);
            if(taslar[x_koru][y_koru] != undefined && taslar[x_koru][y_koru].getRenk() == rakip_rengi){
                break;
            }
            x_koru--;
            y_koru++;
        }

        //yukari sol capraz
        x_koru = this.konumx-1;
        y_koru = this.konumy-1;
        while((x_koru >-1 && y_koru >-1) && (taslar[x_koru][y_koru] == undefined || taslar[x_koru][y_koru].getRenk() == rakip_rengi) ){
            this.bir_sonraki_hamleleri.push([x_koru,y_koru]);
            if(taslar[x_koru][y_koru] != undefined && taslar[x_koru][y_koru].getRenk() == rakip_rengi){
                break;
            }
            x_koru--;
            y_koru--;
        }
        //yukari haraketleri.
        var x_koru = this.konumx -1 ;
        while(x_koru > -1 && ((taslar[x_koru][this.konumy] == undefined) || (taslar[x_koru][this.konumy] != undefined && taslar[x_koru][this.konumy].getRenk() == rakip_rengi ) ) ){
            this.bir_sonraki_hamleleri.push([x_koru,this.konumy]);
            if(taslar[x_koru][this.konumy]!= undefined && taslar[x_koru][this.konumy].getRenk() == rakip_rengi  ){
                break;
            }
            x_koru--;
        }

        //asagi haraketleri
        x_koru = this.konumx +1;
        while(x_koru <8 && ((taslar[x_koru][this.konumy] == undefined) || (taslar[x_koru][this.konumy] != undefined && taslar[x_koru][this.konumy].getRenk() == rakip_rengi ) )){
            this.bir_sonraki_hamleleri.push([x_koru,this.konumy]);
            if(taslar[x_koru][this.konumy]!=undefined && taslar[x_koru][this.konumy].getRenk() == rakip_rengi  ){
                break;
            }
            x_koru++;
        }

        //saga haraket
        var y_koru = this.konumy+1;
        while(y_koru < 8 && (taslar[this.konumx][y_koru] == undefined || taslar[this.konumx][y_koru].getRenk() == rakip_rengi ) ){
            this.bir_sonraki_hamleleri.push([this.konumx,y_koru]);
            if(taslar[this.konumx][y_koru]!=undefined && taslar[this.konumx][y_koru].getRenk() == rakip_rengi ){
                break;
            }
            y_koru++;
        }
        //sola hareket
        y_koru = this.konumy-1;
        while(y_koru >-1 && (taslar[this.konumx][y_koru] == undefined || taslar[this.konumx][y_koru].getRenk() == rakip_rengi)){
            this.bir_sonraki_hamleleri.push([this.konumx,y_koru]);
            if(taslar[this.konumx][y_koru]!= undefined && taslar[this.konumx][y_koru].getRenk() == rakip_rengi ){
                break;
            }
            y_koru--;
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
        document.getElementById(this.konumx+"-"+this.konumy).innerHTML += "<img src='resimler/vezir_"+this.renk+".png' >";
    }
    konum_degistir(x,y){
        this.konumx = x;
        this.konumy = y;
        this.tas_goster();
    }
}
