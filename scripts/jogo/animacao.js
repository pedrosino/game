class Animacao {
  constructor(matriz, imagem, x, yBase, largura, altura, larguraSprite, alturaSprite, precisaoHor, precisaoVer) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.yBase = yBase;
    this.y = height - altura - this.yBase;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.precisaoHor = precisaoHor;
    this.precisaoVer = precisaoVer;
    
    this.frameAtual = 0;

    this.criaPoligono();
  }
  
  criaPoligono() {
    // Usando um dodecaedro em vez de elipse, para poder usar o
    // collidePolyPoly de https://github.com/bmoren/p5.collide2D
    this.poly = new Array(12);
    var angle = TWO_PI / this.poly.length;
    for (var i = 0; i < this.poly.length; i++) {
      var a = angle * i;
      var x = this.x + this.largura/2 + cos(a) * this.largura*this.precisaoHor/2;
      var y = this.y + this.altura/2 + sin(a) * this.altura*this.precisaoVer/2;
      this.poly[i] = createVector(x,y);
    }
  }

  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    this.anima();
    /*this.desenha();*/
  }
  
  anima() {
    this.frameAtual++;
    
    if(this.frameAtual > this.matriz.length - 1) {
      this.frameAtual = 0;
    }
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