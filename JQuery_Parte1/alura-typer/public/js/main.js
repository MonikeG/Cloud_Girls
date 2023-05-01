var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// inicializar a pagina colocando as funções criadas
$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
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
    var tempoRestante = $("#tempo-digitacao").text();
    //troca função on por one para que a cada clique não gere um evento no contador
    campo.one("focus", function(){
        $("botao-reiniciar").attr("disabled", true);
        var cronometroID = setInterval(function(){
            tempoRestante--;
            //atualizar o tempo restante na pagina
            $("#tempo-digitacao").text(tempoRestante)
            //mudar atributo de um campo
            if(tempoRestante < 1){
                campo.attr("disabled", true);
                //para o contador parar de funcionar 
                clearInterval(cronometroID);
                $("#botao-reiniciar").attr("disabled", false);
            }
        },1000);
    });
}

// botão reiniciar
function reiniciaJogo(){
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
        inicializaCronometro();
    }
