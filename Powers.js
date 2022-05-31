function SpawnAPowerUp() {
  var Random1 = Math.round(Math.random() * 4);
  if (Random1 == 0) {
    console.log("Rip, no power ups!");
  } else if (Random1 == 1) {
    TimePowerUp();
  } else if (Random1 == 2) {
    MoveForwardPowerUp();
  } else if (Random1 == 3) {
    PointsPowerUp();
  } else if (Random1 == 4) {
    Bomb();
  }
}
function TimePowerUp() {
  var sY = Math.random() * 600;
  var TimeSlower = TimeSlow.create(700, sY, "blue");
  TimeSlower.setVelocityX(-100);
  setInterval(() => {
    TimeSlower.setVelocityY(-7);
  }, 10);
}
function MoveForwardPowerUp() {
  var sY = Math.random() * 600;
  var MovingUp = GoUp.create(700, sY, "green");
  MovingUp.setVelocityX(-100);
  setInterval(() => {
    MovingUp.setVelocityY(-7);
  }, 10);
}
function PointsPowerUp() {
  var sX = Math.random() * 800;
  var Pointz = Points.create(700, sY, "red");
  Pointz.setVelocityX(-100);
  setInterval(() => {
    PointZ.setVelocityY(-7);
  }, 10);
}
function Bomb() {
  var sY = Math.random() * 800;
  var Boomz = Boom.create(700, sY, "mine");
  Boomz.setVelocityX(-90);
  setInterval(() => {
    Boomz.setVelocityY(-7);
  }, 10);
}
function MoreTime(player, TimeSlow) {
  const explode = this.sound.add("powerup");
  explode.play();
  TimeSlow.disableBody(true, true);
  PipeDelay += 500;
}
function GoForward(player, GoUp) {
  player.setVelocityX(100);
  GoUp.disableBody(true, true);
  setTimeout(() => {
    player.setVelocityX(0);
  }, 500);
  const reload = this.sound.add("Reload");
  reload.play();
  Ammo += 1;
  ammoText.setText("Ammo: " + Ammo);
  Use1 -= 1;
  Score += 20;
  scoreText.setText("Score: " + Score);
}
function GetPoints(player, Points) {
  Points.disableBody(true, true);
  Score += 10;
  scoreText.setText("Score: " + Score);
}
function Death(player, Boom) {
  Explosion.create(Boom.x, Boom.y, "Boom").setDepth(2).setScale(4);
  const collide = this.sound.add("playerded");
  collide.play();
  this.physics.pause();
  player.setTint(0xff0000);
  let gameOverText = this.add.text(
    game.config.width / 2.5,
    game.config.height / 3,
    "GAME OVER",
    { fontSize: "32px", fill: "#fff" }
  );
  gameOverText.setDepth(1);
  gameOver = true;
}
