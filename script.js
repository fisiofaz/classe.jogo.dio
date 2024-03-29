class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque desconhecido";
    }
    const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
    return mensagem;
  }
}

// Exemplo de uso da classe Hero
const heroi = new Hero("Gandalf", 120, "mago");
const mensagemAtaque = heroi.atacar();
console.log(mensagemAtaque);
