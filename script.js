function calculate(){
    var altura=document.getElementById("altura").value/100
    var peso=document.getElementById("peso").value
 
    var imc = peso / altura**2;
    var text=""
    if (imc < 18.5){
        text='Você esta bem magro'
    }else if(imc < 25){
        text='Você esta com peso normal, Parabéns '
    } else if (imc <29){
        text='Cuidado ... Você esta com sobre peso'
    }else if (imc < 39 ){
        text='Vishiii Maria ... Voce esta com Obsesidade'
    }else if (imc > 39 ){
        text='Sua situação esta terrivel, Tente comer ovo direto'
    }
        
    document.getElementById('resultado').innerText=text
}