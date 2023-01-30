//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponentes
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeXOponete;
let velocidadeYOponente;

//variáveis do placar
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha()
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete()
  //verificaColisaoRaquete()
  minhaColisaoRaqueteBiblioteca(xRaquete, yRaquete)
  minhaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente)
  movimentoRaqueteOponente()
  placar();
  marcaPontos();
  bolinhaNaoFicaPresa();

}


const mostraBolinha = () => {
  circle(xBolinha, yBolinha, diametro);
}

const movimentaBolinha = () => {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

const verificaColisaoBorda = () => {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}

const mostraRaquete = (x, y) => {
  rect(x, y, raqueteComprimento, raqueteAltura)
}


const movimentaMinhaRaquete = () => {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

const verificaColisaoRaquete = () => {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

const minhaColisaoRaqueteBiblioteca = (x, y) => {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}

const movimentoRaqueteOponente = () => {
  if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}

const placar = () => {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}


const marcaPontos = () => {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
  }
}

const bolinhaNaoFicaPresa = () => {
  if (xBolinha - raio < 0) {
    xBolinha = 23
  }
}