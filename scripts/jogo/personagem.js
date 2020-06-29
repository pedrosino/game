class Personagem extends Animacao {
  constructor(matriz, imagem, imagem2, x, yBase, largura, altura, larguraSprite, alturaSprite, precisaoHor, precisaoVer) {
    super(matriz, imagem, x, yBase, largura, altura, larguraSprite, alturaSprite, precisaoHor, precisaoVer);

    this.chao = height - this.altura - this.yBase;
    this.y = this.chao;
    this.velocidadeInicial = -35;
    this.velocidadeVertical = 0;
    this.gravidade = 3;
    this.contPulo = 0;
    this.invencivel = false;
    this.imagem2 = imagem2;
    this.qualImagem = this.imagem;
  }

  exibe() {
    image(this.qualImagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    this.anima();
  }

  pula() {
    if (this.contPulo < 2) {
      this.velocidadeVertical = this.velocidadeInicial;
      somPulo.play();
      this.contPulo++;
    }
  }

  cai() {
    this.y = this.y + this.velocidadeVertical;

    for (var i = 0; i < this.poly.length; i++) {
        this.poly[i].y += this.velocidadeVertical;
    }

    if (this.y > this.chao) {
      this.y = this.chao;
      this.contPulo = 0;

      // recalcula o poligono
      this.criaPoligono();
    }

    this.velocidadeVertical += this.gravidade;
  }

  pisca() {
    //noStroke();
    //fill(255, 240, 50, 128);
    //rect(this.x, this.y, this.largura, this.altura);
    
    this.qualImagem = this.imagem2;
    setTimeout(()=> {
      this.qualImagem = this.imagem;
    }, 1000);
    //image(this.imagem2, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
  }

  ficaInvencivel() {
    this.invencivel = true;
    this.pisca();
    /* por que function() não funciona aqui? */
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }

  colisao(inimigo) {
    if (this.invencivel)
      return false;

    const colidiu = collidePolyPoly(this.poly, inimigo.poly);
    
    return colidiu;
  }
}