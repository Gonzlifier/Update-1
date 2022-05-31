function PipeNo1(EmergencyPew, PipePair1) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair1.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo2(EmergencyPew, PipePair2) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair2.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo3(EmergencyPew, PipePair3) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair3.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo4(EmergencyPew, PipePair4) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair4.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo5(EmergencyPew, PipePair5) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair5.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo6(EmergencyPew, PipePair6) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair6.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo7(EmergencyPew, PipePair7) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair7.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo8(EmergencyPew, PipePair8) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair8.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function PipeNo9(EmergencyPew, PipePair9) {
  Explosion.create(EmergencyPew.x, EmergencyPew.y, "Boom")
    .setDepth(2)
    .setScale(4);
  Explosion.setVelocityX(100);
  EmergencyPew.disableBody(true, true);
  PipePair9.disableBody(true, true);
  const explode = this.sound.add("MissleBoom");
  explode.play();
}

function EmergencyMissle() {
  var Missle = EmergencyPew.create(player.x, player.y, "PEW");
  Missle.setVelocityX(400);
  setInterval(() => {
    Missle.setVelocityY(-7);
  }, 10);
}
setInterval(() => {
  const reload = this.sound.add("Reload");
  reload.play();
  Ammo += 1;
  ammoText.setText("Ammo: " + Ammo);
  Use1 -= 1;
}, 1000);
