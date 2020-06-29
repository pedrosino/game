class Abertura{
  constructor() {
    
  }
  
  draw() {
    image(imagemAbertura, 0, 0, width, height);
    textFont(fonteAbertura);
    textAlign(CENTER);
    textSize(50);
    text("Bem vindo!", width/2, 100);
    textSize(25);
    text("Aperte Enter para iniciar o jogo!", width/2, 150);
  }
  
  keyPressed(key) {
    if(key == "Enter") {
      cenaAtual = "jogo";
    }
  }
}