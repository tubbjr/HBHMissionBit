var demo = {};
var speed = 6;
var adam;
var old;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('dojo', 'assets/image00.png');
		game.load.spritesheet('ajay', 'assets/ajay.png', 133, 211);
        game.load.spritesheet('old', 'assets/sampepper.png', 133, 211);

	},

	create: function(){
        game.world.setBounds(0,0, 1500, 550);
//        game.physics.startSystem(Phaser.Physics.ARCADE);
        var tree = game.add.sprite(0, 0, 'dojo');
        adam = game.add.sprite(0, 450, 'ajay');
//        adam.frame = ;
        adam.animations.add('walk', [0, 1 , 2 , 3 , 4]);
        old = game.add.sprite(0, 450, 'old');
        
        tree.height=game.height;
        tree.width=game.width;
//        adam.anchor.setTo(0.5, 0.5);
//        adam.scale.setTo(0.7, 0.7);
//        
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
//        
        game.camera.follow(adam);
//        
//        game.scale.scaleMODE = Phaser.ScaleManager.SHOW_ALL;
	},

	update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                              adam.x =  adam.x + speed; 
                            adam.animations.play('walk', 20, true);
                               adam.scale.setTo(-0.7, 0.7)
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x = adam.x - speed;
              adam.animations.play('walk', 20, true);
            adam.scale.setTo(0.7, 0.7)
        }
         else{
        adam.animations.stop('walk');
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y = adam.y + speed;
        }
       
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y = adam.y - speed;
                    if(adam.y < 400){
                        adam.y = 400;
                    }
        }
	}

};