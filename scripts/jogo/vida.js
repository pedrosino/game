class Vida {
  constructor(maximo, inicial) {
    this.maximo = maximo;
    this.inicial = inicial;
    this.vidas = inicial;
    this.largura = 35;
    this.altura = 40;
  }
  
  draw() {
    // Desenha cada coracao conforme o numero de vidas
    for (var i = 0; i < this.vidas; i++) {
      //                x                         y
      image(imagemVida, 10 + i*(this.largura+10), 10, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas < this.maximo) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
    this.draw();
  }
}