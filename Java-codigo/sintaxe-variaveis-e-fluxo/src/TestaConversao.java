public class TestaConversao{

    public static void main(String[] args){

        float pontoFlutuante = 31.4f; //mais raro e tem que forçar colocando f no final

        double salario = 1270.50;
        int valor = (int) salario;
        System.out.println(valor);

        double valor1 = 0.2;
        double valor2 = 0.1;
        double total = valor1 + valor2; //0.30000004 - verificar explicação matematica

        System.out.println(total);
    }
}
