class Inimigo extends Animacao {
  constructor(nome, imagem, x, yBase, largura, altura, larguraSprite, alturaSprite, linhas, colunas, velocidade, precisaoHor, precisaoVer) {
    super(nome, imagem, x, yBase, largura, altura, larguraSprite, alturaSprite, linhas, colunas, precisaoHor, precisaoVer);
    
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