function taslari_goster(){
    var tahta = document.getElementById("tahta");
    var count = 0 ;
    var birincil_renk = "gray";
    var ikincil_renk  = "yellow";
    while(count < 64){
        var x_pos = Math.floor(count/8);
        var y_pos = count%8;
        if(count%2 == 0 ){
            tahta.innerHTML += "<div class=\"tas\" id=\""+x_pos+"-"+y_pos+"\" onclick='tas_sec("+x_pos+","+y_pos+")' style='background-color:"+birincil_renk+";' >"+

            "</div>";
        }else{
            tahta.innerHTML += "<div class=\"tas\" id=\""+x_pos+"-"+y_pos+"\" onclick='tas_sec("+x_pos+","+y_pos+")' style='background-color:"+ikincil_renk+";' >"+

            "</div>";
        }
        if(x_pos%2 == 1){
            birincil_renk = "yellow";
            ikincil_renk  = "gray";
        }else{
            birincil_renk = "gray";
            ikincil_renk  = "yellow";
        }
        
        count++;
    }
}

taslari_goster();
document.getElementById("1-0").style.backgroundColor = "yellow";
document.getElementById("2-0").style.backgroundColor = "gray";
document.getElementById("3-0").style.backgroundColor = "yellow";
document.getElementById("4-0").style.backgroundColor = "gray";
document.getElementById("5-0").style.backgroundColor = "yellow";
document.getElementById("6-0").style.backgroundColor = "gray";
document.getElementById("7-0").style.backgroundColor = "yellow";


var oyuncu_beyaz = [];
var oyuncu_siyah = [];
var taslar = [];
for(var i=0;i<8;i++){
    taslar[i] = []
    for(var j=0;j<8;j++){
        taslar[i][j] = undefined;
    }
}
//beyaz sah
taslar[0][3]    = new sah(0,3,"beyaz");

//siyah sah
taslar[7][4]    = new sah(7,4,"siyah");

oyuncu_beyaz.push(taslar[0][3]);
oyuncu_siyah.push(taslar[7][4]);

for(var i=0; i< 8;i++){
    taslar[1][i] = new piyon(1,i,"beyaz");
    taslar[6][i] = new piyon(6,i,"siyah");
    oyuncu_beyaz.push(taslar[1][i]);
    oyuncu_siyah.push(taslar[6][i]);
}
//beyaz kaleler
taslar[0][0]    = new kale(0,0,"beyaz");
taslar[0][7]    = new kale(0,7,"beyaz");
oyuncu_beyaz.push(taslar[0][0]);
oyuncu_beyaz.push(taslar[0][7]);


//siyah kaleler
taslar[7][0]    = new kale(7,0,"siyah");
taslar[7][7]    = new kale(7,7,"siyah");
oyuncu_siyah.push(taslar[7][0]);
oyuncu_siyah.push(taslar[7][7]);


//beyaz atlar
taslar[0][1]    = new at(0,1,"beyaz");
taslar[0][6]    = new at(0,6,"beyaz");
oyuncu_beyaz.push(taslar[0][1]);
oyuncu_beyaz.push(taslar[0][6]);

//siyah atlar
taslar[7][1]    = new at(7,1,"siyah");
taslar[7][6]    = new at(7,6,"siyah");
oyuncu_siyah.push(taslar[7][1]);
oyuncu_siyah.push(taslar[7][6]);


//beyaz filler
taslar[0][2]    = new fil(0,2,"beyaz");
taslar[0][5]    = new fil(0,5,"beyaz");
oyuncu_beyaz.push(taslar[0][2]);
oyuncu_beyaz.push(taslar[0][5]);



//siyah filler
taslar[7][2]    = new fil(7,2,"siyah");
taslar[7][5]    = new fil(7,5,"siyah");
oyuncu_siyah.push(taslar[7][2]);
oyuncu_siyah.push(taslar[7][5]);

//beyaz veizr
taslar[0][4]    = new vezir(0,4,"beyaz");
oyuncu_beyaz.push(taslar[0][4]);

//siyah vezir
taslar[7][3]    = new vezir(7,3,"siyah");
oyuncu_siyah.push(taslar[7][3]);




