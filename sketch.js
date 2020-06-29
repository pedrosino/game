function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  trilha.loop();
  
  jogo = new Jogo();
  jogo.setup();
  abertura = new Abertura();
  cenas = {
    jogo : jogo,
    abertura : abertura
  };
}

function keyPressed() {
  jogo.keyPressed(key);
  abertura.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}