function preload() {
  imagemAbertura = loadImage("imagens/assets/telaInicial.png");
  fonteAbertura = loadFont("imagens/assets/fonteTelaInicial.otf");
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemCenario2 = loadImage("imagens/cenario/Foreground.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemPersonagemBrilhando = loadImage("imagens/personagem/brilhando.png");
  imagemGota = loadImage("imagens/inimigos/gotinha.png");
  imagemTroll = loadImage("imagens/inimigos/troll.png");
  imagemGotaVoadora = loadImage("imagens/inimigos/gotinha-voadora.png");
  imagemGameOver = loadImage("imagens/assets/game-over.png");
  imagemVida = loadImage("imagens/assets/coracao2.png");
  trilha = loadSound("sons/trilha_jogo.mp3");
  somPulo = loadSound("sons/somPulo.mp3");
  
  fita = loadJSON("fita/fita.json");
  
  matrizPersonagem = new Array(16);
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      matrizPersonagem[i * 4 + j] = [j * larguraPersonagem, i * alturaPersonagem];
    }
  }

  matrizGota = new Array(28);
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 4; j++) {
      matrizGota[i * 4 + j] = [j * larguraGota, i * alturaGota];
    }
  }
  
  matrizTroll = new Array(28);
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 4; j++) {
      matrizTroll[i * 4 + j] = [j * larguraTroll, i * alturaTroll];
    }
  }
  
  matrizGotaVoadora = new Array();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      matrizGotaVoadora[i * 4 + j] = [j * larguraGotaVoadora, i * alturaGotaVoadora];
    }
  }
}