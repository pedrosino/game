class Inimigo extends Animacao {
  constructor(nome, x, yBase, largura, altura, sprite, velocidade) {
    super(nome, x, yBase, largura, altura, sprite);

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