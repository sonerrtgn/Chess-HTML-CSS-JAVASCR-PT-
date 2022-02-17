var tas_secildimi = false;
var oyun_sirasi   = "beyaz";
var secili_tas    = null;
var secili_tas_x;
var secili_tas_y;
var hareket_edebilecegi_konumlar;

function tas_sec(x,y){
    if(tas_secildimi == false ){
        if(taslar[x][y] != undefined){
            if(taslar[x][y].getRenk() == oyun_sirasi){
                secili_tas                   = taslar[x][y];
                secili_tas_x                 = x;
                secili_tas_y                 = y;
                hareket_edebilecegi_konumlar = secili_tas.sonraki_hamle_hesapla();
                secili_tas.sonraki_hamleleri_goster();
                tas_secildimi = true;
            }else{
                alert("oyun sırasi sizde değil.");
            }
        }
    }else{
        if(tas_haraket_edermi(x,y,hareket_edebilecegi_konumlar)){
            taslar[x][y]                       = taslar[secili_tas_x][secili_tas_y];
            taslar[secili_tas_x][secili_tas_y] = undefined

            document.getElementById(secili_tas_x+"-"+secili_tas_y).innerHTML = "";
            document.getElementById(x+"-"+y).innerHTML = "";

            taslar[x][y].konum_degistir(x,y);
            tas_secildimi = false;
            taslari_eski_rengine_cevir();
            if(oyun_sirasi == "beyaz"){
                oyun_sirasi = "siyah";
            }else{
                oyun_sirasi = "beyaz";
            }
            
            beyaz_sahmi();
            siyah_sahmi();

        }else if(secili_tas == taslar[x][y]){
            tas_secildimi = false;
            taslari_eski_rengine_cevir();
        }else{
            alert("bu tas buraya hareket etmez");
        }
    }
}

function tas_haraket_edermi(x,y,hareket_edebilecegi_konumlar){
    var count = 0;
    var uzunluk = hareket_edebilecegi_konumlar.length;
    while(count < uzunluk){
        if(x == hareket_edebilecegi_konumlar[count][0] && y == hareket_edebilecegi_konumlar[count][1]){
            return true;
        }
        count++;
    }
    return false;
}

function taslari_eski_rengine_cevir(){
    var count = 0;
    var uzunluk = hareket_edebilecegi_konumlar.length;
    var renk;
    while(count < uzunluk){
        if(hareket_edebilecegi_konumlar[count][0] %2 == 0){
            if(hareket_edebilecegi_konumlar[count][1]%2 == 0){
                renk = "gray";
            }else{
                renk = "yellow";
            }
        }else{
            if(hareket_edebilecegi_konumlar[count][1]%2 == 0){
                renk = "yellow";
            }else{
                renk = "gray";
            }
        }
        document.getElementById(hareket_edebilecegi_konumlar[count][0]+"-"+hareket_edebilecegi_konumlar[count][1]).style.backgroundColor = renk;

        count++;
    }
}