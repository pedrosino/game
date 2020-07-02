class Personagem extends Animacao {
  constructor(nome, x, yBase, largura, altura, sprite, sprite2) {
    super(nome, x, yBase, largura, altura, sprite);

    this.chao = height - this.altura - this.yBase;
    this.y = this.chao;
    this.velocidadeInicial = -35;
    this.velocidadeVertical = 0;
    this.gravidade = 3;
    this.contPulo = 0;
    this.invencivel = false;
    this.sprite2 = sprite2;
    this.spriteAtual = this.sprite;
  }

  exibe() {
    image(this.spriteAtual.imagem, this.x, this.y, this.largura, this.altura, this.frameAtual % this.sprite.colunas * this.sprite.largura, Math.floor(this.frameAtual / this.sprite.colunas) * this.sprite.altura, this.sprite.largura, this.sprite.altura);
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
    
    this.spriteAtual = this.sprite2;
    setTimeout(()=> {
      this.spriteAtual = this.sprite;
    }, 1000);
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