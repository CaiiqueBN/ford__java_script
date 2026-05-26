class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato, mensagem, desejoContato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
        this.desejoContato = desejoContato;
    }
}

function Post(form) {
  let data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("tipoContato").value,
        form.elements.namedItem("mensagem").value, 
        form.elements.namedItem("desejoContato").value
    );

    console.table(data);
    Enviar();
    form.reset();
}

const inputCpf = document.getElementById('cpf');
const maskOptionsCpf = {
    mask: '000.000.000-00'
};
const maskCpf = IMask(inputCpf, maskOptionsCpf);

const inputTelefone = document.getElementById('telefone');
const maskOptions = {
  mask: '(00) 00000-0000'
};
const mask = IMask(inputTelefone, maskOptions);

function Enviar() {
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    if (nome.value != "") {
        alert(`Obrigado sr(a) ${nome.value} ${sobrenome.value}, seus dados foram encaminhados com sucesso!`);
    }
}