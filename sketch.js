var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var path_running,boy_running;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  
  //loadAnimation (carregarAnimação) de corrida para o menino
  pathImg = LoadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite( 180,100,20,50);
 path.addAnimation("running", path_running);
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.y = path.width/2;
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(50,180,20,50);
boy.addAnimation("running", boy_running);
//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
invisibleLeft.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
invisibleRight.visible = false

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.vilible = true;
  path.visible =  true;
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
