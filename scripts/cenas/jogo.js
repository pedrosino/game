class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
    this.pausado = false;
  }
  
  setup() {
    this.cenario2 = new Cenario(imagemCenario2, 5);
    this.cenario = new Cenario(imagemCenario, 3);
    spritePersonagem = new Sprite(imagemPersonagem, larguraPersonagem, alturaPersonagem, 4, 4, 0.7, 1);
    spritePersonagem2 = new Sprite(imagemPersonagemBrilhando, larguraPersonagem, alturaPersonagem, 4, 4, 0.7, 1);
    this.personagem = new Personagem("bruxa", 10, 30, largura, altura, spritePersonagem, spritePersonagem2);

    spriteGota = new Sprite(imagemGota, larguraGota, alturaGota, 7, 4, 1, 1);
    spriteGotaVoadora = new Sprite(imagemGotaVoadora, larguraGotaVoadora, alturaGotaVoadora, 4, 4, 0.9, 1);
    spriteTroll = new Sprite(imagemTroll, larguraTroll, alturaTroll, 7, 4, 0.825, 0.94);
    this.gota = new Inimigo("gota", width, 30, 52, 52, spriteGota, 8);
    this.gotaVoadora = new Inimigo("voadora", width, 200, 100, 60, spriteGotaVoadora, 8);
    this.troll = new Inimigo("troll", width, 30, 200, 150, spriteTroll, 8);

    this.inimigos = [];
    this.inimigos.push(this.gota);
    this.inimigos.push(this.gotaVoadora);
    this.inimigos.push(this.troll);

    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  }
  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      this.personagem.pula();
    }
    if (keyCode === 32) {
      if (this.pausado == false) {
        noLoop();
        trilha.pause();
      } else {
        loop();
        trilha.loop();
      }

      this.pausado = !this.pausado;
    }
  }
  
  draw() {
    this.cenario.exibe();
    this.cenario.move();
    this.cenario2.exibe();
    this.cenario2.move();
    this.personagem.anima();
    this.personagem.cai();
    vida.draw();

    if(this.pausado){
      noStroke();
      fill(50, 50, 50, 125);
      rect(0, 0, windowWidth, windowHeight);
      fill("#ffa");
      text("Jogo pausado. Aperte barra de espaço para continuar...", width - 300, windowHeight / 2);
    }

    pontuacao.exibe();
    pontuacao.somarPontos();

    const linhaMapa = this.mapa[this.indice];
    this.inimigo = this.inimigos[linhaMapa.inimigo];
    this.inimigo.velocidade = linhaMapa.velocidade;

    this.inimigo.anima();
    this.inimigo.move();

    if (this.inimigo.saiu()) {
      this.inimigo.reaparece();
      this.indice++;
      if (this.indice >= this.mapa.length) {
        this.indice = 0;
      }
    }

    // Detecta se a personagem colidiu com os inimigos
    if (this.personagem.colisao(this.inimigo)) {
      // Caso afirmativo, perde uma vida
      vida.perdeVida();
      this.personagem.ficaInvencivel();
      if (vida.vidas == 0) {
        this.draw();
        image(imagemGameOver, windowWidth / 2 - 206, windowHeight / 2 - 39);
        noLoop();
        trilha.stop();
      }
    }
  }
}