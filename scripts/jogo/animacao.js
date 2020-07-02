class Animacao {
  //constructor(nome, imagem, x, yBase, largura, altura, larguraSprite, alturaSprite, linhas, colunas, precisaoHor, precisaoVer) {
  constructor(nome, x, yBase, largura, altura, sprite) {
    this.nome = nome;
    this.x = x;
    this.yBase = yBase;
    this.y = height - altura - this.yBase;
    this.largura = largura;
    this.altura = altura;
    this.sprite = sprite;
    
    this.frameAtual = 0;

    this.criaPoligono();
  }
  
  criaPoligono() {
    // Usando um dodecágono em vez de elipse, para poder usar o
    // collidePolyPoly de https://github.com/bmoren/p5.collide2D
    this.poly = new Array(12);
    var angle = TWO_PI / this.poly.length;
    for (var i = 0; i < this.poly.length; i++) {
      var a = angle * i;
      var x = this.x + this.largura/2 + cos(a) * this.largura*this.sprite.precisaoHor/2;
      var y = this.y + this.altura/2 + sin(a) * this.altura*this.sprite.precisaoVer/2;
      this.poly[i] = createVector(x,y);
    }
  }

  exibe() {
    image(this.sprite.imagem, this.x, this.y, this.largura, this.altura, this.frameAtual % this.sprite.colunas * this.sprite.largura, Math.floor(this.frameAtual / this.sprite.colunas) * this.sprite.altura, this.sprite.largura, this.sprite.altura);
  }
  
  anima() {
    this.frameAtual++;
    
    if (this.frameAtual > this.sprite.linhas*this.sprite.colunas - 1) {
      this.frameAtual = 0;
    }

    this.exibe();
  }
  
  desenha() {
    noFill();
    stroke('black');
    beginShape();
    //draw the polygon from the created Vectors above.
    for(var i = 0; i < this.poly.length; i++){
      vertex(this.poly[i].x, this.poly[i].y);
    }
    endShape(CLOSE);
  }
}