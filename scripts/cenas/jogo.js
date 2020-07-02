class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup() {
    cenario2 = new Cenario(imagemCenario2, 5);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem("bruxa", imagemPersonagem, imagemPersonagemBrilhando, 0, 30, largura, altura, larguraPersonagem, alturaPersonagem, 4, 4, 0.7, 1);

    gota = new Inimigo("gota", imagemGota, width, 30, 52, 52, larguraGota, alturaGota, 7,4, 8, 1, 1);
    troll = new Inimigo("troll", imagemTroll, width, 30, 200, 150, larguraTroll, alturaTroll, 7,4, 8, 0.825, 0.94);
    gotaVoadora = new Inimigo("voadora", imagemGotaVoadora, width, 200, 100, 60, larguraGotaVoadora, alturaGotaVoadora, 4,4, 8, 0.9, 1);

    inimigos = [];
    inimigos.push(gota);
    inimigos.push(gotaVoadora);
    inimigos.push(troll);

    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  }
  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
    }
  }
  
  draw() {
    cenario.exibe();
    cenario.move();
    cenario2.exibe();
    cenario2.move();
    personagem.anima();
    personagem.cai();
    vida.draw();

    pontuacao.exibe();
    pontuacao.somarPontos();

    const linhaMapa = this.mapa[this.indice];
    inimigo = inimigos[linhaMapa.inimigo];
    inimigo.velocidade = linhaMapa.velocidade;

    inimigo.anima();
    inimigo.move();

    if (inimigo.saiu()) {
      inimigo.reaparece();
      this.indice++;
      if (this.indice >= this.mapa.length) {
        this.indice = 0;
      }
    }

    // Detecta se a personagem colidiu com os inimigos
    if (personagem.colisao(inimigo)) {
      // Caso afirmativo, perde uma vida
      vida.perdeVida();
      personagem.ficaInvencivel();
      if (vida.vidas == 0) {
        this.draw();
        image(imagemGameOver, windowWidth / 2 - 206, windowHeight / 2 - 39);
        noLoop();
        trilha.stop();
      }
    }
  //});
  }
}