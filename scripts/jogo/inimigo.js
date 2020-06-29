class Inimigo extends Animacao {
  constructor(matriz, imagem, x, yBase, largura, altura, larguraSprite, alturaSprite, velocidade, precisaoHor, precisaoVer) {
    super(matriz, imagem, x, yBase, largura, altura, larguraSprite, alturaSprite, precisaoHor, precisaoVer);
    
    this.velocidade = velocidade;
  }
  
  move() {
    this.x = this.x - this.velocidade;
    for (var i = 0; i < this.poly.length; i++) {
      this.poly[i].x -= this.velocidade;
    }
  }
  
  reaparece() {
    this.x = width;
    this.criaPoligono();
  }
  
  saiu() {
    return this.x < -this.largura;
  }
}