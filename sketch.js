// bola
let xBola = 300;
let yBola = 200;
let dBola = 20;
let raioBola = dBola / 2;
// velocidade
let xVelocidade = 5;
let yVelocidade = 5;
let yVelocidadeOponente = yVelocidade
//raquete
let xRaquete = 10;
let yRaquete = 150;
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let wRaquete = 10;
let hRaquete = 80;
//pontos
let pontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background ("khaki");
  fill ("salmon")
  Bola();
  Raquete();
  RaqueteOponente();
  Ponto();
  
}

function Bola(){
  circle(xBola, yBola, dBola);
  xBola = xBola + xVelocidade;
  yBola = yBola + yVelocidade;
  
  if (xBola + raioBola > width || xBola - raioBola <  0) xVelocidade *= -1
  if (yBola + raioBola > height || yBola - raioBola < 0) yVelocidade *= -1
}

function Raquete(){
  rect(xRaquete, yRaquete, wRaquete, hRaquete)
  
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
  if (xBola - raioBola < xRaquete + wRaquete && yBola - raioBola < yRaquete + hRaquete && yBola + raioBola > yRaquete){
    xVelocidade *= -1;}
}

function RaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, wRaquete, hRaquete)
  
  yVelocidadeOponente = yBola - yRaqueteOponente - hRaquete / 2 - 30
  yRaqueteOponente += yVelocidadeOponente
  
   if (xBola + raioBola > xRaqueteOponente && yBola + raioBola > yRaqueteOponente && yBola - raioBola < yRaqueteOponente + hRaquete){
    xVelocidade *= -1;}
}

function Ponto(){
  textAlign(CENTER)
  textSize(15)
  text(pontos, 150, 26)
  text(pontosOponente, 450, 26)
  
  if (xBola > 590){
    pontos += 1;
  }
    
  if (xBola < 10){
    pontosOponente += 1;
  }

}
  
