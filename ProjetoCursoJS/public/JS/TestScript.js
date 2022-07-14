let teste = 0;
function clicou(teste){
        if(teste%2==0){
        document.getElementById('menu-area').style.display='block';
        
    }
    else{
        document.getElementById('menu-area').style.display='none';
        teste=teste+1;
    } 
}
/*//declarando as variáveis
var x = 0 //variável que recebe qual Dash vou abrir

function MostraDash(x) { //Seleciona o Dash que será aberto
    switch(x){
        case 1: ControleMateriais.innerHTML = '<a href="\Controle de materiais.html">Tenda da A-10</a>';
        break;
        case 2: Indicadores.innerHTML = '<a href="\Avaliações.html">Aderência da Programação</a>';
        break;
        case 3: Relatórios.innerHTML = '<a href="\Aderência.html">Avaliações</a>';
        break;
        default: alert("Deu bosta");
        break; 
    };
    };
*/
    