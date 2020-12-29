var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};
var helpme = false;
var titleT;
var spaceBar
var gameOver = false;
var pipes;
var PipeDelay = 2500
var Score = 0
var Ammo = 2
var Cooldown1 = false
var Use1
var game = new Phaser.Game(config);
function preload() {
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png')
    this.load.image('tut', 'https://labs.phaser.io/assets/skies/space1.png')
    this.load.image('menutext', 'https://labs.phaser.io/assets/sprites/button-text.png');
    this.load.image('flappy', 'https://labs.phaser.io/assets/sprites/ufo.png')
    this.load.image('floor', 'https://labs.phaser.io/assets/sprites/platform.png')
    this.load.audio('playerded', 'https://labs.phaser.io/assets/audio/SoundEffects/player_death.wav')
    this.load.image('Boom', 'https://labs.phaser.io/assets/sprites/shmup-boom.png');
    this.load.image('pipe', 'https://labs.phaser.io/assets/sprites/gem.png')
    this.load.image('blue', 'https://labs.phaser.io/assets/sprites/orb-blue.png')
    this.load.image('green', 'https://labs.phaser.io/assets/sprites/orb-green.png')
    this.load.image('red', 'https://labs.phaser.io/assets/sprites/orb-red.png')
    this.load.image('mine', 'https://labs.phaser.io/assets/sprites/mine.png')
    this.load.image('PEW', 'https://labs.phaser.io/assets/sprites/bullets/bullet1.png')
    this.load.audio('pew', 'https://labs.phaser.io/assets/audio/SoundEffects/pistol.wav');
    this.load.audio('powerup', 'https://labs.phaser.io/assets/audio/SoundEffects/key.wav');
    this.load.audio('MissleBoom', 'https://labs.phaser.io/assets/audio/SoundEffects/sentry_explode.wav');
    this.load.audio('Cooldown', 'https://labs.phaser.io/assets/audio/SoundEffects/need_cells.wav');

};
function create() {
    background = this.add.image(400, 300, 'sky');
    Instructions = this.physics.add.group();
    Instructions.create(240, 250, 'PEW').setDepth(5)
    Instructions.create(230, 300, 'blue').setDepth(5)
    Instructions.create(230, 335, 'green').setDepth(5)
    Instructions.create(230, 370, 'red').setDepth(5)
    Instructions.create(230, 410, 'mine').setDepth(5)
    Instructions.create(400, 300, 'tut').setDepth(4).setAngle(180)
    Use1 = 0
    scoreText = this.add.text(40, 46, 'Score: 0', { fontSize: '32px', fill: '#0f0' }).setDepth(3);
    ammoText = this.add.text(40, 78, 'Ammo: 2', { fontSize: '32px', fill: '#0f0' }).setDepth(3);
    var content = [
        "Hold Space to hover upwards",
        "",
        "Press E To use a Missle to destroy barricades",
        "You Can only Carry 2 Missles at once",
        "",
        "The Pipes will slowly come more often, so get the blue orb!",
        "",
        "The Green orb will move you forward, but gives you a Missle!",
        "",
        "The Red orb isnt needed, but will give you a lot of points",
        "",
        "Beware of Bombs! They Will Kill You!",
        "",
        "Hmmm... some barricades look diferent...",
        "Maybe They Are Fake?",
        "",
    ]
    instructionText1 = this.add.text(250, 200, content, { fontFamily: 'Arial', color: '#00ff00'}).setOrigin(0).setDepth(5);
    titleT = this.add.image(400, 550, 'menutext').setInteractive();
    titleT.setDepth(4);
    spawn = titleT.on('pointerdown', function () {
        helpme = true;
        setTimeout(() => {
        });
    });
    //-----------------------------------------------------------
    this.physics.pause();
    spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    player = this.physics.add.sprite(100, 200, 'flappy').setDepth(1).setScale(2);
    player.setCollideWorldBounds(true)
    //-----------------------------------------------------------
    DeathFloor = this.physics.add.staticGroup();
    Explosion = this.physics.add.group();
    PipePair1 = this.physics.add.group();
    PipePair2 = this.physics.add.group();
    PipePair3 = this.physics.add.group();
    PipePair4 = this.physics.add.group();
    PipePair5 = this.physics.add.group();
    PipePair6 = this.physics.add.group();
    PipePair7 = this.physics.add.group();
    PipePair8 = this.physics.add.group();
    PipePair9 = this.physics.add.group();
    FakePipe = this.physics.add.group();
    TimeSlow = this.physics.add.group();
    GoUp = this.physics.add.group();
    Points = this.physics.add.group();
    Boom = this.physics.add.group();
    EmergencyPew = this.physics.add.group();
    //-----------------------------------------------------------
    DeathFloor.create(600, 600, 'floor').setDepth(3)
    DeathFloor.create(200, 600, 'floor').setDepth(3)
    this.physics.add.collider(DeathFloor, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair1, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair2, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair3, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair4, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair5, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair6, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair7, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair8, player, DeathofPlayer, null, this);
    this.physics.add.collider(PipePair9, player, DeathofPlayer, null, this);
    this.physics.add.collider(EmergencyPew, PipePair1, PipeNo1, null, this);
    this.physics.add.collider(EmergencyPew, PipePair2, PipeNo2, null, this);
    this.physics.add.collider(EmergencyPew, PipePair3, PipeNo3, null, this);
    this.physics.add.collider(EmergencyPew, PipePair4, PipeNo4, null, this);
    this.physics.add.collider(EmergencyPew, PipePair5, PipeNo5, null, this);
    this.physics.add.collider(EmergencyPew, PipePair6, PipeNo6, null, this);
    this.physics.add.collider(EmergencyPew, PipePair7, PipeNo7, null, this);
    this.physics.add.collider(EmergencyPew, PipePair8, PipeNo8, null, this);
    this.physics.add.collider(EmergencyPew, PipePair9, PipeNo9, null, this);
    this.physics.add.overlap(TimeSlow, player, MoreTime, null, this);
    this.physics.add.overlap(GoUp, player, GoForward, null, this);
    this.physics.add.overlap(Points, player, GetPoints, null, this);
    this.physics.add.overlap(Boom, player, Death, null, this);

}
function update() {
    if (gameOver) {
        return;
    }
    if (helpme == true) {
        titleT.setVisible(false);
        instructionText1.setText('')
        this.physics.resume();
        helpme = false;
        GameStart()
        player.setVelocityY(-200)
        setInterval(() => {
            SpawnAPowerUp()
        }, 20000);
        setInterval(() => {
            if (player.x > 110) {
                player.setVelocityX(-10)
            }
        }, 5000);
    }
    if (spaceBar.isDown) {
        player.setVelocityY(-150)
    }
    if (keyE.isDown) {
        if (Use1 == 0) {
            if (Cooldown1 == false) {
                Use1 += 1;
                Ammo -= 1;
                ammoText.setText('Ammo: ' + Ammo)
                const Shoot = this.sound.add('pew');
                Shoot.play();
                EmergencyMissle()
                Cooldown1 = true
                setTimeout(() => {
                    Cooldown1 = false
                }, 1000);
            }
        } else if (Use1 == 1) {
            if (Cooldown1 == false) {
                Use1 += 1;
                Ammo -= 1;
                ammoText.setText('Ammo: ' + Ammo)
                const Shoot = this.sound.add('pew');
                Shoot.play();
                EmergencyMissle()
                Cooldown1 = true
                setTimeout(() => {
                    Cooldown1 = false
                }, 10000);
            }
        }
    }
    if (Ammo == 3) {
        Use1 -= 1;
        Ammo -= 1;
        ammoText.setText('Ammo: ' + Ammo)
    }
}
function DeathofPlayer(player, DeathFloor) {
    Explosion.create(player.x, player.y, 'Boom').setDepth(2).setScale(2);
    const collide = this.sound.add('playerded');
    collide.play();
    this.physics.pause();
    player.setTint(0xff0000);
    let gameOverText = this.add.text(game.config.width / 2.5,
        game.config.height / 3,
        'GAME OVER',
        { fontSize: '32px', fill: '#fff' });
    gameOverText.setDepth(1);
    gameOver = true;
}
function GameStart() {
    setInterval(() => {
        GetRandomPipes()
    }, PipeDelay);
}
