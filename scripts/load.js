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
  imagemPause = loadImage("imagens/pause.png");
  trilha = loadSound("sons/trilha_jogo.mp3");
  somPulo = loadSound("sons/somPulo.mp3");
  
  fita = loadJSON("fita/fita.json");
}