//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

 //placar
let meusPontos = 0
let pontosOponente = 0

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background("rgb(219,249,252)");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete , yRaquete);
  mostraRaquete(xRaqueteOponente , yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete( xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente()
  incluiPlacar ();
  marcaPontos();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  fill ("pink")
  rect(x, y, raqueteComprimento, raqueteAltura);
} 

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x , y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
}
}

function  movimentaRaqueteOponente(){
  if(keyIsDown(87)) {
    yRaquetepOponente -= 10;
  }
  if(keyIsDown(83)) {
    yRaqueteOPonente += 10;
  }
}
     function incluiPlacar (){
       fill("pink")
       rect(250, 10, 40, 20)
       fill(225);
      text(meusPontos, 278, 26);
      fill("pink")
       rect(315, 10, 40, 20)
       fill(225)
       text(pontosOponente, 321, 26);
  }
   function marcaPontos() {
     if (xBolinha > 590){
       meusPontos += 1;
   }
     if (xBolinha < 10) {
    pontosOponente += 1;
  }
}