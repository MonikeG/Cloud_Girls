
public class TestaCaracteres {

	public static void main(String [] args) {// Referência diferente de string com letra minuscula
		
		char letra = 'a'; //guarda apenas um caractere
		System.out.println(letra);
		
		char valor = 66; // retorna B porque 66 é o código de B na tabela Unicode
		System.out.println(valor);
	
		valor = (char)(valor + 1); //como está em char que retorna um caractere ele entende que é o valor do caractere na tablea Unicode ou seja 67 = C
		System.out.println(valor);
		
        String palavra = "alura cursos online de tecnologia";
        System.out.println(palavra);

        palavra = palavra + 2020;
        System.out.println(palavra);
        
        String parcela1 = "10";
        String parcela2 = "20";

        System.out.println(parcela1 + parcela2);
	}

}
