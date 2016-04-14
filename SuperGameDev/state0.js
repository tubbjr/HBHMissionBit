var demo = {};
var speed = 6;
var adam;
//var old;
//var carrot;
var text;
var cursors;
var attack;
var enemies;



demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('dojo', 'assets/image00.png');
		game.load.spritesheet('ajay', 'assets/newcarrot.png', 119, 266);
//        game.load.spritesheet('old', 'assets/sampepper.png', 850, 1107);
        game.load.spritesheet('enemy', 'assets/enemycopy.png', 89, 141);
        game.load.spritesheet('test', 'assets/test2.png', 83, 138);
        game.load.spritesheet('attack', 'assets/attack.png', 163, 177);
        game.load.spritesheet('carrot', 'assets/carrot.png', 179, 414);

	},

	create: function(){
        game.world.setBounds(0,0, 1500, 550);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
//        enemies = game.add.group();
//        enemies.enableBody = true;
        
//        var enemy = game.add.sprite(100, 100, 'enemy');
//        var enemy1 = enemies.create(100, 450, 'enemy');
        
        var tree = game.add.sprite(0, 0, 'dojo');
//<<<<<<< HEAD
//        adam = game.add.sprite(0, 450, 'ajay');
        adam = game.add.sprite(0,450,'test');
        adam.scale.setTo(1.5, 1.5);
        
        
//=======
//        adam = game.add.sprite(0, 250, 'ajay');
//>>>>>>> master
//        old = game.add.sprite(300, 350, 'old');
//        adam.frame = ;
        adam.animations.add('walk', [0,1,2,3,4,5]);
//        adam.animations.currentAnim.speed = 10;
        
        var carrot = game.add.sprite(0, 150, 'carrot');
        
       var enemy = game.add.sprite(50, 150, 'enemy');
        enemy.scale.setTo(1.6,1.6);
        
        enemy.animations.add('move')
        
        
        tree.height=game.height;
        tree.width=game.width;
//        adam.anchor.setTo(0.5, 0.5);
//        old.scale.setTo(0.18, 0.18);
        carrot.scale.setTo(0.6, 0.6)
//        
        game.physics.arcade.enable(adam);
        adam.body.bounce.y = 0.2;
        adam.body.gravity.y = 600;
        adam.body.collideWorldBounds = true;
        game.camera.follow(adam);
//        this.adam.body.gravity.y = 1000;
        cursors = game.input.keyboard.createCursorKeys();
        
        
        
    
//        
//        game.scale.scaleMODE = Phaser.ScaleManager.SHOW_ALL;
	},

	update: function(){
//        game.physics.arcade.collide(adam, platforms);
         adam.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        adam.body.velocity.x = -120;
        adam.scale.setTo(-1.5,1.5);
        adam.animations.play('walk', 10, true);
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
       adam.body.velocity.x = 150;
        adam.scale.setTo(1.5,1.5);
        adam.animations.play('walk', 10, true);
    }
    else
    {
        //  Stand still
        adam.animations.stop();

        adam.frame = 0;
    }

    if(cursors.down.isDown){
        adam.body.velocity.y = 350;
    }
    //  Allow the player to jump
    if (cursors.up.isDown)
    {
        adam.body.velocity.y = -350;
//        adam.body.velocity.y = 350;
    }
	},
    
//    updateLine: function() {
//
//        if (line.length < content[index].length)
//        {
//            line = content[index].substr(0, line.length + 1);
//            // text.text = line;
//            text.setText(line);
//        }
//        else
//        {
//            //  Wait 2 seconds then start a new line
//            game.time.events.add(Phaser.Timer.SECOND * 2, nextLine, this);
//        }
//
//    },
//
//    nextLine: function() {
//
//        index++;
//
//        if (index < content.length)
//        {
//            line = '';
//            game.time.events.repeat(80, content[index].length + 1, updateLine, this);
//        }
//
//    }
};