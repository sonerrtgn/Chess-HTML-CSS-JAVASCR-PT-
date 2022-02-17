class piyon extends tas{
    constructor(konumx,konumy,renk){
        super(konumx,konumy,renk);
        this.bir_sonraki_hamleleri = [];
        this.hamle_yaptimi         = false;
        this.tas_goster();
    }
    sonraki_hamle_hesapla(){
        this.bir_sonraki_hamleleri = [];
        var rakip_rengi;
        if(this.renk == "beyaz"){
            rakip_rengi = "siyah";
        }else{
            rakip_rengi = "beyaz";
        }
        if(this.hamle_yaptimi){
            
            if(this.renk == "beyaz"){
                if(this.konumx != 7){
                    var bir_sonraki_hamlex = this.konumx+1;
                    var bir_sonraki_hamley = this.konumy;
                    this.bir_sonraki_hamleleri.push([bir_sonraki_hamlex,bir_sonraki_hamley]);
                    if(this.konumy -1 > -1 && taslar[this.konumx+1][this.konumy-1] != undefined){
                        if(taslar[this.konumx+1][this.konumy-1].getRenk() == rakip_rengi){
                            this.bir_sonraki_hamleleri.push([this.konumx+1,this.konumy-1]);
                        }
                    }
                    if(this.konumy +1 < 8 && taslar[this.konumx+1][this.konumy+1] != undefined){
                        if(taslar[this.konumx+1][this.konumy+1].getRenk() == rakip_rengi){
                            this.bir_sonraki_hamleleri.push([this.konumx+1,this.konumy+1]);
                        }
                    }
                }
               
            }else{
                if(this.konumx != 0){
                    var bir_sonraki_hamlex = this.konumx-1;
                    var bir_sonraki_hamley = this.konumy;
                    this.bir_sonraki_hamleleri.push([bir_sonraki_hamlex,bir_sonraki_hamley]);
                    if(this.konumy -1 > -1 && taslar[this.konumx-1][this.konumy-1] != undefined){
                        if(taslar[this.konumx-1][this.konumy-1].getRenk() == rakip_rengi){
                            this.bir_sonraki_hamleleri.push([this.konumx-1,this.konumy-1]);
                        }
                    }
                    if(this.konumy +1 < 8 && taslar[this.konumx-1][this.konumy+1] != undefined){
                        if(taslar[this.konumx-1][this.konumy+1].getRenk() == rakip_rengi){
                            this.bir_sonraki_hamleleri.push([this.konumx-1,this.konumy+1]);
                        }
                    }
                }
               
            }
            
        }else{
            if(this.renk == "beyaz"){
                var bir_sonraki_hamlex = this.konumx+1;
                var bir_sonraki_hamley = this.konumy;
                this.bir_sonraki_hamleleri.push([bir_sonraki_hamlex,bir_sonraki_hamley]);
                this.bir_sonraki_hamleleri.push([bir_sonraki_hamlex+1,bir_sonraki_hamley]);
            }else{
                var bir_sonraki_hamlex = this.konumx-1;
                var bir_sonraki_hamley = this.konumy;
                this.bir_sonraki_hamleleri.push([bir_sonraki_hamlex,bir_sonraki_hamley]);
                this.bir_sonraki_hamleleri.push([bir_sonraki_hamlex-1,bir_sonraki_hamley]);
            }
            
        }
        return this.bir_sonraki_hamleleri;
    }
    sonraki_hamleleri_goster(){
        var count = 0;
        while(count < this.bir_sonraki_hamleleri.length){
            document.getElementById(this.bir_sonraki_hamleleri[count][0]+"-"+this.bir_sonraki_hamleleri[count][1]).style.backgroundColor= "red";
            count++;
        }
    }

    tas_goster(){
        document.getElementById(this.konumx+"-"+this.konumy).innerHTML += "<img src='resimler/piyon_"+this.renk+".png' >";
    }
    konum_degistir(x,y){
        this.konumx = x;
        this.konumy = y;
        this.tas_goster();
        this.hamle_yaptimi = true;
    }
}
