var pegarID;
var jogada = 0;
var jogador = document.querySelector('h1#vezDe');

var aux = [];

var quadradinhos = [
    document.getElementById('a1'),  //0
    document.getElementById('a2'),  //1  
    document.getElementById('a3'),  //2 
    document.getElementById('b1'),  //3
    document.getElementById('b2'),  //4 
    document.getElementById('b3'),  //5
    document.getElementById('c1'),  //6 
    document.getElementById('c2'),  //7
    document.getElementById('c3')   //8
]




function finalStage() {

    jogador.innerHTML = '////';

    //console.log(aux[i].innerHTML);





    for (let i = 0; i <= 8; i++) {
        if (quadradinhos[0].innerHTML == 'X' && quadradinhos[3].innerHTML == 'X' && quadradinhos[6].innerHTML == 'X') {
            window.alert('VENCEU LADO ESQUERDO');
            break;
        }
        else if(quadradinhos[1].innerHTML == 'X' && quadradinhos[4].innerHTML == 'X' && quadradinhos[7].innerHTML == 'X'){
            window.alert('VENCEU MEIO');
            break;
        }
        else if(quadradinhos[2].innerHTML == 'X' && quadradinhos[5].innerHTML == 'X' && quadradinhos[8].innerHTML == 'X'){
            window.alert('VENCEU LADO DIREITO');
            break;
        }
        else if(quadradinhos[0].innerHTML == 'X' && quadradinhos[1].innerHTML == 'X' && quadradinhos[2].innerHTML == 'X'){
            window.alert('VENCEU CIMA');
            break;
        }
        else if(quadradinhos[3].innerHTML == 'X' && quadradinhos[4].innerHTML == 'X' && quadradinhos[5].innerHTML == 'X'){
            window.alert('VENCEU MID');
            break;
        }
        else if(quadradinhos[6].innerHTML == 'X' && quadradinhos[7].innerHTML == 'X' && quadradinhos[8].innerHTML == 'X'){
            window.alert('VENCEU BOTTOM');
            break;
        }
        else if(quadradinhos[0].innerHTML == 'X' && quadradinhos[4].innerHTML == 'X' && quadradinhos[8].innerHTML == 'X'){
            window.alert('VENCEU CRUZADO 1');
            break;
        }
        else if(quadradinhos[2].innerHTML == 'X' && quadradinhos[4].innerHTML == 'X' && quadradinhos[6].innerHTML == 'X'){
            window.alert('VENCEU CRUZADO 2');
            break;
        }
    }



}

function print(e) {
    
    e = e || window.event;
    e = e.target || e.srcElement;
    pegarID = document.getElementById(e.id);
    console.log('Function Print: ' + e.id); //remove
    //aux.push(document.getElementById(e.id));////////////



    gameStart();

    if (jogada == 9) {
        
        finalStage();
    }
}


function gameStart() {
    

    if (pegarID.innerHTML == '*') {

        if (jogador.innerHTML == 'Xís') {

            for (let i = 0; i <= 8; i++) {

                if (pegarID.id == 'a' + i || pegarID.id == 'b' + i || pegarID.id == 'c' + i) {

                    pegarID.innerHTML = 'X';
                    jogada += 1;
                    jogador.innerHTML = 'Bolinha';
                }
            }


        } else {
            pegarID.innerHTML = 'O';
            jogador.innerHTML = 'Xís';
            jogada += 1;

        }
    } else {
        window.alert('Quadrado já selecionado.'); //remove
    }
}


  // ((jogador.innerHTML=='Xís') ? jogador.innerHTML = 'Bolinha' : jogador.innerHTML = 'Xís'); 
