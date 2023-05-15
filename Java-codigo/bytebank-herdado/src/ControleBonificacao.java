
public class ControleBonificacao {
	public void registra(Funcionario f) {
	    double boni = f.getBonificacao();
	    this.soma = this.soma + boni;
	}

	public double getSoma() {
	    return this.soma;
	}

}
