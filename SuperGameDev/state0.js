var demo = {};
var speed = 6;
var adam;
//var old;
//var carrot;
var text;
var cursors;



demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('dojo', 'assets/image00.png');
		game.load.spritesheet('ajay', 'assets/newcarrot.png', 115, 258);
//        game.load.spritesheet('old', 'assets/sampepper.png', 850, 1107);
        game.load.spritesheet('carrot', 'assets/carrot.png', 179, 414);

	},

	create: function(){
        game.world.setBounds(0,0, 1500, 550);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        var tree = game.add.sprite(0, 0, 'dojo');
<<<<<<< HEAD
        adam = game.add.sprite(0, 450, 'ajay');
        adam.scale.setTo(0.7, 0.7);
=======
        adam = game.add.sprite(0, 250, 'ajay');
>>>>>>> master
//        old = game.add.sprite(300, 350, 'old');
//        adam.frame = ;
        adam.animations.add('walk', [0, 1 , 2 , 3 , 4]);
        
        var carrot = game.add.sprite(0, 150, 'carrot');
        
       
        
        
        tree.height=game.height;
        tree.width=game.width;
//        adam.anchor.setTo(0.5, 0.5);
//        old.scale.setTo(0.18, 0.18);
        carrot.scale.setTo(0.6, 0.6)
//        
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
//        
        game.camera.follow(adam);
        
        cursors =game.input.keyboard.createCursorKeys();
        
    
//        
//        game.scale.scaleMODE = Phaser.ScaleManager.SHOW_ALL;
	},

	update: function(){
        adam.body.velocity.x = 0;
        if (cursors.right.isDown)){
//                              adam.x =  adam.x + speed;
                        adam.body.velocity.x = 150;

          
                            adam.animations.play('walk', 20, true);
                               adam.scale.setTo(-0.7, 0.7);
        }
//        else if (cursors.left.isDown)){
////            adam.x = adam.x - speed;
//                        adam.body.velocity.x = -speed;
//
//              adam.animations.play('walk', 20, true);
//            adam.scale.setTo(0.7, 0.7)
//        }
//         else{
//        adam.animations.stop('walk');
//        }
//       if (cursors.down.isDown)){
////            adam.y = adam.y + speed;
//                       adam.body.velocity.x = -speed;
//
//        }
//       
//        if (cursors.up.isDown)){
////            adam.y = adam.y - speed;
//                        adam.body.velocity.x = speed;
//
//                    if(adam.y < 400){
//                        adam.y = 400;
//                    }
//            
//            if(game.input.keyboard.isDown(Phaser.Keyboard.W) && adam.y=== 1000){
//                adam.body.velocity.y= -350
//            }
////            if (game.input.keyboard.isDown(Phaser.Keyboard.J))
//        }
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