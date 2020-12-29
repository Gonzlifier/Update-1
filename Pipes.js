function GetRandomPipes() {
    setTimeout(() => {
        if (PipeDelay > 1000) {
            PipeDelay -= 50
        } else if (PipeDelay < 1000) {
            PipeDelay -= 20
        }
    }, 10000);
    setTimeout(() => {
        var PipeSet = Math.round(Math.random() * 8)
        if (PipeSet == 0) {
            var PairPipe2 = PipePair1.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe3 = PipePair1.create(800, 430, 'pipe').setTint(0x274E13);
            var PairPipe4 = PipePair1.create(800, 340, 'pipe').setTint(0x274E13);
            var PairPipe5 = PipePair1.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe2.setVelocityX(-200);
            PairPipe3.setVelocityX(-200);
            PairPipe4.setVelocityX(-200);
            PairPipe5.setVelocityX(-200);
            setInterval(function () {
                PairPipe2.setVelocityY(-7);
                PairPipe3.setVelocityY(-7);
                PairPipe4.setVelocityY(-7);
                PairPipe5.setVelocityY(-7);
            }, 10);
        } else if (PipeSet == 1) {
            var PairPipe1 = PipePair2.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe2 = PipePair2.create(800, 430, 'pipe').setTint(0x274E13);
            var PairPipe3 = PipePair2.create(800, 160, 'pipe').setTint(0x274E13);
            var PairPipe4 = PipePair2.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe1.setVelocityX(-200);
            PairPipe2.setVelocityX(-200);
            PairPipe3.setVelocityX(-200);
            PairPipe4.setVelocityX(-200);
            setInterval(function () {
                PairPipe1.setVelocityY(-7);
                PairPipe2.setVelocityY(-7);
                PairPipe3.setVelocityY(-7);
                PairPipe4.setVelocityY(-7);
            }, 10);
        } else if (PipeSet == 2) {
            var PairPipe1 = PipePair3.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe2 = PipePair3.create(800, 250, 'pipe').setTint(0x274E13);
            var PairPipe3 = PipePair3.create(800, 160, 'pipe').setTint(0x274E13);
            var PairPipe4 = PipePair3.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe1.setVelocityX(-200);
            PairPipe2.setVelocityX(-200);
            PairPipe3.setVelocityX(-200);
            PairPipe4.setVelocityX(-200);
            setInterval(function () {
                PairPipe1.setVelocityY(-7);
                PairPipe2.setVelocityY(-7);
                PairPipe3.setVelocityY(-7);
                PairPipe4.setVelocityY(-7);
            }, 10);
        } else if (PipeSet == 3) {
            var PairPipe1 = PipePair4.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe2 = PipePair4.create(800, 430, 'pipe').setTint(0x274E13);
            var PairPipe3 = PipePair4.create(800, 340, 'pipe').setTint(0x274E13);
            var PairPipe4 = PipePair4.create(800, 250, 'pipe').setTint(0x274E13);
            PairPipe1.setVelocityX(-200);
            PairPipe2.setVelocityX(-200);
            PairPipe3.setVelocityX(-200);
            PairPipe4.setVelocityX(-200);
            setInterval(function () {
                PairPipe1.setVelocityY(-7);
                PairPipe2.setVelocityY(-7);
                PairPipe3.setVelocityY(-7);
                PairPipe4.setVelocityY(-7);
            }, 10);
        } else if (PipeSet == 4) {
            var PairPipe3 = PipePair5.create(800, 340, 'pipe').setTint(0x274E13);
            var PairPipe4 = PipePair5.create(800, 250, 'pipe').setTint(0x274E13);
            var PairPipe5 = PipePair5.create(800, 160, 'pipe').setTint(0x274E13);
            var PairPipe6 = PipePair5.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe3.setVelocityX(-200);
            PairPipe4.setVelocityX(-200);
            PairPipe5.setVelocityX(-200);
            PairPipe6.setVelocityX(-200);
            setInterval(function () {
                PairPipe3.setVelocityY(-7);
                PairPipe4.setVelocityY(-7);
                PairPipe5.setVelocityY(-7);
                PairPipe6.setVelocityY(-7);
            }, 10);
        } else if (PipeSet == 5) {
            var PairPipe1 = PipePair6.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe2 = PipePair6.create(800, 430, 'pipe').setTint(0x274E13);
            var PairPipe3 = PipePair6.create(800, 340, 'pipe').setTint(0x274E13);
            var PairPipe5 = PipePair6.create(800, 160, 'pipe').setTint(0x274E13);
            var PairPipe6 = PipePair6.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe1.setVelocityX(-200);
            PairPipe2.setVelocityX(-200);
            PairPipe3.setVelocityX(-200);
            PairPipe5.setVelocityX(-200);
            PairPipe6.setVelocityX(-200);
            setInterval(() => {
                PairPipe1.setVelocityY(-6);
                PairPipe2.setVelocityY(-6);
                PairPipe3.setVelocityY(-6);
                PairPipe5.setVelocityY(-6);
                PairPipe6.setVelocityY(-6);
            }, 10);
        } else if (PipeSet == 6) {
            var PairPipe1 = PipePair7.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe2 = PipePair6.create(800, 430, 'pipe').setTint(0x274E13);
            var PairPipe4 = PipePair7.create(800, 250, 'pipe').setTint(0x274E13);
            var PairPipe6 = PipePair7.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe1.setVelocityX(-250);
            PairPipe2.setVelocityX(-250);
            PairPipe4.setVelocityX(-250);
            PairPipe6.setVelocityX(-250);
            setInterval(() => {
                PairPipe1.setVelocityY(-6);
                PairPipe2.setVelocityY(-6);
                PairPipe4.setVelocityY(-6);
                PairPipe6.setVelocityY(-6);
            }, 10);
        } else if (PipeSet == 7) {
            var PairPipe1 = PipePair8.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe2 = PipePair8.create(800, 430, 'pipe').setTint(0x274E13);
            var PairPipe3 = FakePipe.create(800, 340, 'pipe').setTint(0x00FF00);
            var PairPipe4 = FakePipe.create(800, 250, 'pipe').setTint(0x00FF00);
            var PairPipe5 = PipePair8.create(800, 160, 'pipe').setTint(0x274E13);
            var PairPipe6 = PipePair8.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe1.setVelocityX(-200);
            PairPipe2.setVelocityX(-200);
            PairPipe3.setVelocityX(-200);
            PairPipe4.setVelocityX(-200);
            PairPipe5.setVelocityX(-200);
            PairPipe6.setVelocityX(-200);
            setInterval(() => {
                PairPipe1.setVelocityY(-7);
                PairPipe2.setVelocityY(-7);
                PairPipe3.setVelocityY(-7);
                PairPipe4.setVelocityY(-7);
                PairPipe5.setVelocityY(-7);
                PairPipe6.setVelocityY(-7);
            }, 10);
        } else if (PipeSet == 8) {
            var PairPipe1 = PipePair9.create(800, 520, 'pipe').setTint(0x274E13);
            var PairPipe2 = PipePair9.create(800, 430, 'pipe').setTint(0x274E13);
            var PairPipe3 = PipePair9.create(800, 340, 'pipe').setTint(0x274E13);
            var PairPipe4 = FakePipe.create(800, 250, 'pipe').setTint(0x680000);
            var PairPipe5 = FakePipe.create(800, 160, 'pipe').setTint(0x680000);
            var PairPipe6 = PipePair9.create(800, 70, 'pipe').setTint(0x274E13);
            PairPipe1.setVelocityX(-200);
            PairPipe2.setVelocityX(-200);
            PairPipe3.setVelocityX(-200);
            PairPipe4.setVelocityX(-200);
            PairPipe5.setVelocityX(-200);
            PairPipe6.setVelocityX(-200);
            setInterval(() => {
                PairPipe1.setVelocityY(-7);
                PairPipe2.setVelocityY(-7);
                PairPipe3.setVelocityY(-7);
                PairPipe4.setVelocityY(-7);
                PairPipe5.setVelocityY(-7);
                PairPipe6.setVelocityY(-7);
            }, 10);
        }
        Score += 1;
        scoreText.setText('Score: ' + Score);
    }, PipeDelay);
}