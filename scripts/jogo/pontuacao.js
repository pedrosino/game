class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textSize(25);
    textFont('Verdana');
    textAlign(RIGHT);
    fill('#fff');
    text("Pontuação: " + parseInt(this.pontos), width - 30, 30);
  }
  
  somarPontos() {
    this.pontos += 0.2;
  }
}