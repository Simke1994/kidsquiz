var x = Math.floor(Math.random() * 10);
var y = Math.floor(Math.random() * 4);

setTimeout(pocetak,500);

function pocetak(){
    if(x==0){x+=1;}
    if(y==0){y+=1;}

    var boja = document.getElementById("krug");
    boja.src="slike/slika"+x+".png";

    if(x==1){
        if(y==1){
            document.getElementById("dugme1").style.background="black";
            document.getElementById("dugme1").innerHTML = "Crna";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").style.color="white";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme2").style.background="black";
            document.getElementById("dugme2").innerHTML = "Crna";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").style.color="white";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme3").style.background="black";
            document.getElementById("dugme3").innerHTML = "Crna";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").style.color="white";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme4").style.background="black";
            document.getElementById("dugme4").innerHTML = "Crna";
            document.getElementById("dugme4").style.color="white";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==2){
        if(y==1){
            document.getElementById("dugme1").style.background="gray";
            document.getElementById("dugme1").innerHTML = "Siva";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="gray";
            document.getElementById("dugme2").innerHTML = "Siva";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="gray";
            document.getElementById("dugme3").innerHTML = "Siva";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="gray";
            document.getElementById("dugme4").innerHTML = "Siva";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==3){
        if(y==1){
            document.getElementById("dugme1").style.background="red";
            document.getElementById("dugme1").innerHTML = "Crvena";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="red";
            document.getElementById("dugme2").innerHTML = "Crvena";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="red";
            document.getElementById("dugme3").innerHTML = "Crvena";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="red";
            document.getElementById("dugme4").innerHTML = "Crvena";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==4){
        if(y==1){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="orange";
            document.getElementById("dugme3").innerHTML = "Narandzasta";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="orange";
            document.getElementById("dugme4").innerHTML = "Narandzasta";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==5){
        if(y==1){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==6){
        if(y==1){
            document.getElementById("dugme1").style.background="green";
            document.getElementById("dugme1").innerHTML = "Zelena";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="green";
            document.getElementById("dugme4").innerHTML = "Zelena";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==7){
        if(y==1){
            document.getElementById("dugme1").style.background="blue";
            document.getElementById("dugme1").innerHTML = "Plava";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="blue";
            document.getElementById("dugme2").innerHTML = "Plava";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==8){
        if(y==1){
            document.getElementById("dugme1").style.background="pink";
            document.getElementById("dugme1").innerHTML = "Roza";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="pink";
            document.getElementById("dugme4").innerHTML = "Roza";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==9){
        if(y==1){
            document.getElementById("dugme1").style.background="purple";
            document.getElementById("dugme1").innerHTML = "Ljubicasta";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="purple";
            document.getElementById("dugme2").innerHTML = "Ljubicasta";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="purple";
            document.getElementById("dugme3").innerHTML = "Ljubicasta";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="purple";
            document.getElementById("dugme4").innerHTML = "Ljubicasta";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==10){
        if(y==1){
            document.getElementById("dugme1").style.background="brown";
            document.getElementById("dugme1").innerHTML = "Braon";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="brown";
            document.getElementById("dugme2").innerHTML = "Braon";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="brown";
            document.getElementById("dugme3").innerHTML = "Braon";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="brown";
            document.getElementById("dugme4").innerHTML = "Braon";
            document.getElementById("dugme4").value = "1";
        }
    }
}

function odgovor1(){
    var odgovor = document.getElementById("dugme1").value; 
    var tacno = "1";
    if(odgovor == tacno){
        document.getElementById('yes').style.display = "block";  
        document.getElementById('ekran').style.display = "none";  
        document.getElementById("audio").play();
    }else{
        document.getElementById('panic').style.display = "block"; 
        document.getElementById('ekran').style.display = "none";   
        document.getElementById("audio2").play();
    }
    setTimeout(kraj,6000);
    document.getElementById("dugme1").value = "0"; 
    document.getElementById("dugme2").value = "0"; 
    document.getElementById("dugme3").value = "0"; 
    document.getElementById("dugme4").value = "0"; 
}
function odgovor2(){
    var odgovor = document.getElementById("dugme2").value; 
    var tacno = "1";
    if(odgovor == tacno){
        document.getElementById('yes').style.display = "block";  
        document.getElementById('ekran').style.display = "none";  
        document.getElementById("audio").play();
    }else{
        document.getElementById('panic').style.display = "block"; 
        document.getElementById('ekran').style.display = "none";   
        document.getElementById("audio2").play();
    }
    setTimeout(kraj,6000);
    document.getElementById("dugme1").value = "0"; 
    document.getElementById("dugme2").value = "0"; 
    document.getElementById("dugme3").value = "0"; 
    document.getElementById("dugme4").value = "0"; 
}
function odgovor3(){
    var odgovor = document.getElementById("dugme3").value; 
    var tacno = "1";
    if(odgovor == tacno){
        document.getElementById('yes').style.display = "block";  
        document.getElementById('ekran').style.display = "none";  
        document.getElementById("audio").play();
    }else{
        document.getElementById('panic').style.display = "block"; 
        document.getElementById('ekran').style.display = "none";   
        document.getElementById("audio2").play();
    }
    setTimeout(kraj,6000);
    document.getElementById("dugme1").value = "0"; 
    document.getElementById("dugme2").value = "0"; 
    document.getElementById("dugme3").value = "0"; 
    document.getElementById("dugme4").value = "0";  
}
function odgovor4(){
    var odgovor = document.getElementById("dugme4").value; 
    var tacno = "1";
    if(odgovor == tacno){
        document.getElementById('yes').style.display = "block";  
        document.getElementById('ekran').style.display = "none";  
        document.getElementById("audio").play();
    }else{
        document.getElementById('panic').style.display = "block"; 
        document.getElementById('ekran').style.display = "none";   
        document.getElementById("audio2").play();
    }
    setTimeout(kraj,6000);
    document.getElementById("dugme1").value = "0"; 
    document.getElementById("dugme2").value = "0"; 
    document.getElementById("dugme3").value = "0"; 
    document.getElementById("dugme4").value = "0";  
}
function kraj(){
    var x = Math.floor(Math.random() * 10);
    var y = Math.floor(Math.random() * 4);

    if(x==0){x+=1;}
    if(y==0){y+=1;}

    var boja = document.getElementById("krug");
    boja.src="slike/slika"+x+".png";

    document.getElementById('yes').style.display = "none";
    document.getElementById('panic').style.display = "none";
    document.getElementById('ekran').style.display = "block";

    if(x==1){
        if(y==1){
            document.getElementById("dugme1").style.background="black";
            document.getElementById("dugme1").innerHTML = "Crna";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").style.color="white";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme2").style.background="black";
            document.getElementById("dugme2").innerHTML = "Crna";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").style.color="white";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme3").style.background="black";
            document.getElementById("dugme3").innerHTML = "Crna";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").style.color="white";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").style.color="white";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme2").style.color="white";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme3").style.color="white";
            document.getElementById("dugme4").style.background="black";
            document.getElementById("dugme4").innerHTML = "Crna";
            document.getElementById("dugme4").style.color="white";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==2){
        if(y==1){
            document.getElementById("dugme1").style.background="gray";
            document.getElementById("dugme1").innerHTML = "Siva";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="gray";
            document.getElementById("dugme2").innerHTML = "Siva";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="gray";
            document.getElementById("dugme3").innerHTML = "Siva";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="gray";
            document.getElementById("dugme4").innerHTML = "Siva";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==3){
        if(y==1){
            document.getElementById("dugme1").style.background="red";
            document.getElementById("dugme1").innerHTML = "Crvena";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="red";
            document.getElementById("dugme2").innerHTML = "Crvena";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="red";
            document.getElementById("dugme3").innerHTML = "Crvena";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="red";
            document.getElementById("dugme4").innerHTML = "Crvena";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==4){
        if(y==1){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="orange";
            document.getElementById("dugme3").innerHTML = "Narandzasta";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="orange";
            document.getElementById("dugme4").innerHTML = "Narandzasta";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==5){
        if(y==1){
            document.getElementById("dugme1").style.background="yellow";
            document.getElementById("dugme1").innerHTML = "Zuta";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="yellow";
            document.getElementById("dugme2").innerHTML = "Zuta";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==6){
        if(y==1){
            document.getElementById("dugme1").style.background="green";
            document.getElementById("dugme1").innerHTML = "Zelena";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme4").style.background="green";
            document.getElementById("dugme4").innerHTML = "Zelena";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==7){
        if(y==1){
            document.getElementById("dugme1").style.background="blue";
            document.getElementById("dugme1").innerHTML = "Plava";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="blue";
            document.getElementById("dugme2").innerHTML = "Plava";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="blue";
            document.getElementById("dugme3").innerHTML = "Plava";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="blue";
            document.getElementById("dugme4").innerHTML = "Plava";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==8){
        if(y==1){
            document.getElementById("dugme1").style.background="pink";
            document.getElementById("dugme1").innerHTML = "Roza";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="pink";
            document.getElementById("dugme2").innerHTML = "Roza";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="pink";
            document.getElementById("dugme3").innerHTML = "Roza";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="pink";
            document.getElementById("dugme4").innerHTML = "Roza";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==9){
        if(y==1){
            document.getElementById("dugme1").style.background="purple";
            document.getElementById("dugme1").innerHTML = "Ljubicasta";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="purple";
            document.getElementById("dugme2").innerHTML = "Ljubicasta";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="purple";
            document.getElementById("dugme3").innerHTML = "Ljubicasta";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="purple";
            document.getElementById("dugme4").innerHTML = "Ljubicasta";
            document.getElementById("dugme4").value = "1";
        }
    }
    else if(x==10){
        if(y==1){
            document.getElementById("dugme1").style.background="brown";
            document.getElementById("dugme1").innerHTML = "Braon";
            document.getElementById("dugme1").value = "1";
            document.getElementById("dugme2").style.background="orange";
            document.getElementById("dugme2").innerHTML = "Narandzasta";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==2){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="brown";
            document.getElementById("dugme2").innerHTML = "Braon";
            document.getElementById("dugme2").value = "1";
            document.getElementById("dugme3").style.background="green";
            document.getElementById("dugme3").innerHTML = "Zelena";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==3){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="brown";
            document.getElementById("dugme3").innerHTML = "Braon";
            document.getElementById("dugme3").value = "1";
            document.getElementById("dugme4").style.background="yellow";
            document.getElementById("dugme4").innerHTML = "Zuta";
        }
        else if(y==4){
            document.getElementById("dugme1").style.background="orange";
            document.getElementById("dugme1").innerHTML = "Narandzasta";
            document.getElementById("dugme2").style.background="green";
            document.getElementById("dugme2").innerHTML = "Zelena";
            document.getElementById("dugme3").style.background="yellow";
            document.getElementById("dugme3").innerHTML = "Zuta";
            document.getElementById("dugme4").style.background="brown";
            document.getElementById("dugme4").innerHTML = "Braon";
            document.getElementById("dugme4").value = "1";
        }
    }
}