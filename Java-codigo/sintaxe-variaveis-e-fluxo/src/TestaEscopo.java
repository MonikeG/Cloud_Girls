
public class TestaEscopo {
    public static void main(String[] args){
        System.out.println("testando condicionais");

        int idade = 20;
        int quantidadePessoas = 3;    
        //boolean acompanhado = true;

        if (quantidadePessoas >= 2) {
            boolean acompanhado = true;
        }else {
            boolean acompanhado = false;
        } // variável boolean dentro do escopo
        
       //não tem mais acompanhado

        boolean acompanhado = true;//criar a variável para o escopo abaixo
		if (idade >=18 || acompanhado){

            System.out.println("Seja bem vindo"); 
        } else {
            System.out.println("infelizmente voce nao pode entrar");
    }

}

}
