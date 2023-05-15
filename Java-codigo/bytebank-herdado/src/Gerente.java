
public class Gerente extends Funcionario {
	// extends herda da classe funcionario
//		private String nome;
//		private String cpf;
//		private double salario;
		private  int senha;
		
		public void setSenha(int senha) {
			this.senha = senha;
		}
		
		public boolean autentica(int senha) {
			if(this.senha == senha) {
				return true;
			}else {
				return false;
			}
		}
		
		public double getBonificacao() {
			return super.getBonificacao() + super.getSalario();
		}
		
//		public double getBonificacao() {
//			return this.salario * 0.1;
//		}
//		
//		public String getNome() {
//			return nome;
//		}
//		public void setNome(String nome) {
//			this.nome = nome;
//		}
//		public String getCpf() {
//			return cpf;
//		}
//		public void setCpf(String cpf) {
//			this.cpf = cpf;
//		}
//		public double getSalario() {
//			return salario;
//		}
//		public void setSalario(double salario) {
//			this.salario = salario;
//		}
		
}
