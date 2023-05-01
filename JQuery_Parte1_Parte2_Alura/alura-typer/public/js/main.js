var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// inicializar a pagina colocando as funções criadas
$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
});


function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

//1evento click para atualizar os contadores (campo.on("click", function())
//parâmetros do que deve acontecer quando houver o click vão dentro da função anônima
//2troca de click para contar enquanto escreve (campo.on("input"))
function inicializaContadores(){
    campo.on("input", function() {
        //contando as palavras
        var conteudo = campo.val();

        //1contar palavras através de espaço (conteudo.split(" ").length;)
        //2contar através de expressão regular que busca qualquer caractere exceto espaço vazio (conteudo.split(/\S+/).length;)
        var qtdPalavras = conteudo.split(/\S+/).length -1;
        
        //alterar o que está denrtro do conteúdo span
        $("#contador-palavras").text(qtdPalavras);

        //contando caracteres
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

// quando o usuário entrar no campo iniciar o contador usando o evento focus para identificar que o campo está sendo usado
function inicializaCronometro(){
    
    //troca função on por one para que a cada clique não gere um evento no contador
    campo.one("focus", function(){
        var tempoRestante = $("#tempo-digitacao").text();
        $("botao-reiniciar").attr("disabled", true);
        var cronometroID = setInterval(function(){
            tempoRestante--;
            //atualizar o tempo restante na pagina
            $("#tempo-digitacao").text(tempoRestante)
            //mudar atributo de um campo
            if(tempoRestante < 1){

                //para o contador parar de funcionar 
                clearInterval(cronometroID);
                
                // Nova função para deixar o código mais organizado
                //campo.attr("disabled", true);
                //campo.toggleClass("campo-desativado");
                //inserePlacar();
            }
        },1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

// botão reiniciar
function reiniciaJogo(){
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        inicializaCronometro();
        campo.toggleClass("campo-desativado");
        campo.removeClass("borda-vermelha"); //novo
        campo.removeClass("borda-verde"); //novo
}

function inicializaMarcadores() {
    
    campo.on("input", function() {
        var frase = $(".frase").text();
        var digitado = campo.val();
        var comparavel = frase.substr(0 , digitado.length);

        if(digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}

//função de inserir placar na tabela
//A função .find() recebe como parâmetro seletores CSS e busca em seus filhos algum elemento que atenda aquela busca

// funções de placar no arquivo placar.js