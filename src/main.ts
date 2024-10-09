// Classe Lampada
class Lampada {
  private estado: "acesa" | "desligada" | "quebrada" = "desligada";
  private contadorLigarDesligar: number = 0;
  private limiteTrocas: number = 15;
  private lampadaImg: HTMLImageElement;

  constructor(lampadaImg: HTMLImageElement) {
    this.lampadaImg = lampadaImg;
    this.atualizarImagem();
  }

  // Ligar a lâmpada
  ligar(): void {
    if (this.estado === "quebrada") {
      alert("A lampada está quebrada!");
      return;
    }
    if (this.contadorLigarDesligar >= this.limiteTrocas) {
      alert("A lampada queimou!!!");
      this.estado = "desligada";
      return;
    }
    this.estado = "acesa";
    this.contadorLigarDesligar++;
    this.atualizarImagem();
  }

  // Desligar a lâmpada
  desligar(): void {
    if (this.estado === "quebrada") {
      alert("A lâmpada está quebrada.");
      return;
    }
    if (this.contadorLigarDesligar >= this.limiteTrocas) {
      alert("A lâmpada queimou!");
      return;
    }
    this.estado = "desligada";
    this.contadorLigarDesligar++;
    this.atualizarImagem();
  }

  // Quebrar a lâmpada
  quebrar(): void {
    this.estado = "quebrada";
    this.atualizarImagem();
  }

  // Trocar a lâmpada (resetar)
  trocar(): void {
    this.estado = "desligada";
    this.contadorLigarDesligar = 0;
    this.atualizarImagem();
  }

  // Atualiza a imagem da lâmpada de acordo com o estado
  private atualizarImagem(): void {
    switch (this.estado) {
      case "acesa":
        this.lampadaImg.src = "./src/img/acesa.jpg"; 
        this.lampadaImg.alt = "Lâmpada Acesa";
        break;
      case "desligada":
        this.lampadaImg.src = "./src/img/desligada.jpg"; 
        this.lampadaImg.alt = "Lâmpada Desligada";
        break;
      case "quebrada":
        this.lampadaImg.src = "./src/img/quebrada.jpg"; 
        this.lampadaImg.alt = "Lâmpada Quebrada";
        break;
    }
  }
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  const lampadaImg = document.getElementById("lampada") as HTMLImageElement;
  const lampada = new Lampada(lampadaImg);

  // Botões
  const botaoLigar = document.getElementById("ligar") as HTMLButtonElement;
  const botaoDesligar = document.getElementById("desligar") as HTMLButtonElement;
  const botaoQuebrar = document.getElementById("pedrada") as HTMLButtonElement;
  const botaoTrocar = document.getElementById("trocar") as HTMLButtonElement;

  // Eventos
  botaoLigar.addEventListener("click", () => lampada.ligar());
  botaoDesligar.addEventListener("click", () => lampada.desligar());
  botaoQuebrar.addEventListener("click", () => lampada.quebrar());
  botaoTrocar.addEventListener("click", () => lampada.trocar());
});
