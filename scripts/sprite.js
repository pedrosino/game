class Sprite {
  constructor(imagem, largura, altura, linhas, colunas, precisaoHor, precisaoVer) {
    this.imagem = imagem
    this.largura = largura;
    this.altura = altura;
    this.linhas = linhas;
    this.colunas = colunas;
    this.precisaoHor = precisaoHor;
    this.precisaoVer = precisaoVer;
  }

  alteraImagem(nova) {
    this.imagem = nova;
  }

  print() {
    console.log(this.imagem + ", " + this.largura + "x" + this.altura);
    console.log(this.linhas + "x" + this.colunas);
    console.log(this.precisaoHor + ", " + this.precisaoVer);
  }
}