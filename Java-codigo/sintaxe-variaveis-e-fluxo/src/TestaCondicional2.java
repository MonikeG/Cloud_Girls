
public class TestaCondicional2 {
	public static void main(String[] args) {
		System.out.println("testando condicionais");
		int idade = 14;
		int quantidadePessoas = 3;
		boolean acompanhado = quantidadePessoas >= 2; //só vai ser true se a condição de quantidade de pessoas for atendida
		
		if
		(idade >= 18 || acompanhado) {
			System.out.println("OK");
		}
		
		else {
			System.out.println("Não pode entrar");
		}
	}
	
}

