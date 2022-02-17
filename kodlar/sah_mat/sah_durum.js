/**
 * herhangi bir taş hareket ettiğinde iki oyuncunun tüm taşlarının gideceği yerler bir dizide tutlmalı
 * 
 * ornek olarak beyazları ele alaım bir hareketten sonra siyahların gidebileceği bütün yerleri ele elalım 
 * bu gidebileceği yerlerin içerisinde beyaz sah varsa sah durumu ortaya cikmis demektir.
 * 
 * 
 */

function beyaz_sahmi(){
    var siyah_oyuncu_tas_sayisi = oyuncu_siyah.length;
    var count = 0;
    var siyahlarin_gidebilecegi_yerler = [];
    while(count < siyah_oyuncu_tas_sayisi){
        siyahlarin_gidebilecegi_yerler.push(oyuncu_siyah[count].sonraki_hamle_hesapla());
        count++;
    } 

    var beyaz_sah_konumx = oyuncu_beyaz[0].getKonumx();
    var beyaz_sah_konumy = oyuncu_beyaz[0].getKonumy();
    if(iki_boyutlu_arama(beyaz_sah_konumx,beyaz_sah_konumy,siyahlarin_gidebilecegi_yerler)){
        alert("sah durtumu var beyaz");
    }else{
        //alert("sah durmu yok beyaz");
    }
    //console.log("beyaz: "+siyahlarin_gidebilecegi_yerler);
}

function siyah_sahmi(){
    var beyaz_oyuncu_tas_sayisi = oyuncu_beyaz.length;
    var count = 0;
    var beyazlarin_gidebilecegi_yerler = [];
    while(count < beyaz_oyuncu_tas_sayisi){
        beyazlarin_gidebilecegi_yerler.push(oyuncu_beyaz[count].sonraki_hamle_hesapla());
        count++;
    } 

    var siyah_sah_konumx = oyuncu_siyah[0].getKonumx();
    var siyah_sah_konumy = oyuncu_siyah[0].getKonumy();
    if(iki_boyutlu_arama(siyah_sah_konumx,siyah_sah_konumy,beyazlarin_gidebilecegi_yerler)){
        alert("sah durtumu var siyah");
    }else{
        //alert("sah durmu yok siyah");
    }
    //console.log("siyah: "+beyazlarin_gidebilecegi_yerler);

}


// bu fonksiyon a = [[1,2],[2,3],[4,5]] gibi bir dizi içerisinde x ve y leri arar bulunursa true yoksa false döndürür.
function iki_boyutlu_arama(x,y,aranacak){
    //console.log(aranacak);

    var boyut = aranacak.length;
    var count = 0;
    while(count < 16){
        for(var j=0; j< aranacak[count].length;j++){
            //console.log(aranacak[count][j][0]+ ","+aranacak[count][j][1]);

            if(x == aranacak[count][j][0] && y == aranacak[count][j][1]){
                return true;
            }


        }
        
        count++;
    }
    return false;

}