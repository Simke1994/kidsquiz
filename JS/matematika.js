var x = Math.floor(Math.random() * 5);
var y = Math.floor(Math.random() * 5);

setTimeout(pocetak,500);

function pocetak(){
    if(x==0){x+=1;}
    if(y==0){y+=1;}

    zbir= x+y;

    if(zbir==1){document.getElementById("broj1").play();}
    else if(zbir==2){document.getElementById("broj2").play();}
    else if(zbir==3){document.getElementById("broj3").play();}
    else if(zbir==4){document.getElementById("broj4").play();}
    else if(zbir==5){document.getElementById("broj5").play();}
    else if(zbir==6){document.getElementById("broj6").play();}
    else if(zbir==7){document.getElementById("broj7").play();}
    else if(zbir==8){document.getElementById("broj8").play();}
    else if(zbir==9){document.getElementById("broj9").play();}
    else if(zbir==10){document.getElementById("broj10").play();}
    document.getElementById("pitanjcemat").innerHTML = "Koliko je " + x + " + " + y + " = " + zbir;
}

function odgovor(){
    var tacanodgovor = x + y;
    var odgovor = document.getElementById("polje").value; 
    document.getElementById("polje").value = ""; 
    if(odgovor == tacanodgovor){
        document.getElementById('yes').style.display = "block";  
        document.getElementById('ekran2').style.display = "none";  
        document.getElementById("audio").play();
    }else{
        document.getElementById('panic').style.display = "block"; 
        document.getElementById('ekran2').style.display = "none";   
        document.getElementById("audio2").play();
    }
    setTimeout(kraj,6000);
}
function kraj(){
    x = Math.floor(Math.random() * 5);
    y = Math.floor(Math.random() * 5);

    if(x==0){x+=1;}
    if(y==0){y+=1;}
    zbir= x+y;
    setTimeout(prvibroj,500);
    setTimeout(plus,1500);
    setTimeout(drugibroj,2500);
    setTimeout(jednako,3500);
    setTimeout(trecibroj,4500);
    document.getElementById('yes').style.display = "none";
    document.getElementById('panic').style.display = "none";
    document.getElementById('ekran2').style.display = "block";
    document.getElementById("polje").setAttribute('autofocus','on');
    document.getElementById("pitanjcemat").innerHTML = "Koliko je " + x + " + " + y + " = " + zbir;
}
function prvibroj(){
    if(x==1){document.getElementById("broj1").play();}
    else if(x==2){document.getElementById("broj2").play();}
    else if(x==3){document.getElementById("broj3").play();}
    else if(x==4){document.getElementById("broj4").play();}
    else if(x==5){document.getElementById("broj5").play();}
    else if(x==6){document.getElementById("broj6").play();}
    else if(x==7){document.getElementById("broj7").play();}
    else if(x==8){document.getElementById("broj8").play();}
    else if(x==9){document.getElementById("broj9").play();}
    else if(x==10){document.getElementById("broj10").play();}
}
function plus(){document.getElementById("plus").play();}
function drugibroj(){
    if(y==1){document.getElementById("broj1").play();}
    else if(y==2){document.getElementById("broj2").play();}
    else if(y==3){document.getElementById("broj3").play();}
    else if(y==4){document.getElementById("broj4").play();}
    else if(y==5){document.getElementById("broj5").play();}
    else if(y==6){document.getElementById("broj6").play();}
    else if(y==7){document.getElementById("broj7").play();}
    else if(y==8){document.getElementById("broj8").play();}
    else if(y==9){document.getElementById("broj9").play();}
    else if(y==10){document.getElementById("broj10").play();}
}
function jednako(){
document.getElementById("jednako").play();
}
function trecibroj(){
    if(zbir==1){document.getElementById("broj1").play();}
    else if(zbir==2){document.getElementById("broj2").play();}
    else if(zbir==3){document.getElementById("broj3").play();}
    else if(zbir==4){document.getElementById("broj4").play();}
    else if(zbir==5){document.getElementById("broj5").play();}
    else if(zbir==6){document.getElementById("broj6").play();}
    else if(zbir==7){document.getElementById("broj7").play();}
    else if(zbir==8){document.getElementById("broj8").play();}
    else if(zbir==9){document.getElementById("broj9").play();}
    else if(zbir==10){document.getElementById("broj10").play();}
}