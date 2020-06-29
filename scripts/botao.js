class Botao{
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.addClass('botao-abertura');
    this.botao.mousePressed(function(){
      cenaAtual = 'jogo';
      this.remove();
    });
  }
  
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
}