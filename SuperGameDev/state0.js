var demo = {};
var speed = 6;
var adam;
var old;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('dojo', 'assets/image00.png');
		game.load.spritesheet('ajay', 'assets/ajay.png', 133, 211);
        game.load.spritesheet('old', 'assets/sampepper.png', 850, 1107);

	},

	create: function(){
        game.world.setBounds(0,0, 1500, 550);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        var tree = game.add.sprite(0, 0, 'dojo');
        adam = game.add.sprite(0, 450, 'ajay');
        old = game.add.sprite(300, 350, 'old');
//        adam.frame = ;
        adam.animations.add('walk', [0, 1 , 2 , 3 , 4]);
       
        
        
        tree.height=game.height;
        tree.width=game.width;
//        adam.anchor.setTo(0.5, 0.5);
        old.scale.setTo(0.18, 0.18);
//        
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
//        
        game.camera.follow(adam);
//        
//        game.scale.scaleMODE = Phaser.ScaleManager.SHOW_ALL;
	},

	update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
                              adam.x =  adam.x + speed; 
                            adam.animations.play('walk', 20, true);
                               adam.scale.setTo(-0.7, 0.7)
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.A)){
            adam.x = adam.x - speed;
              adam.animations.play('walk', 20, true);
            adam.scale.setTo(0.7, 0.7)
        }
         else{
        adam.animations.stop('walk');
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.S)){
            adam.y = adam.y + speed;
        }
       
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y = adam.y - speed;
                    if(adam.y < 400){
                        adam.y = 400;
                    }
//            if (game.input.keyboard.isDown(Phaser.Keyboard.))
        }
	}

};
var content = [
    "cool succ",
    "photon storm presents",
    "a phaser production",
    " ",
    "Kern of Duty",
    " ",
    "directed by rich davey",
    "rendering by mat groves",
    "    ",
    "03:45, November 4th, 2014",
    "somewhere in the north pacific",
    "mission control bravo ...",
];

var text;
var index = 0;
var line = '';

function create() {

1
    text = game.add.text(32, 380, '', { font: "30pt Courier", fill: "#19cb65", stroke: "#119f4e", strokeThickness: 2 });

    nextLine();

}

function updateLine() {

    if (line.length < content[index].length)
    {
        line = content[index].substr(0, line.length + 1);
        // text.text = line;
        text.setText(line);
    }
    else
    {
        //  Wait 2 seconds then start a new line
        game.time.events.add(Phaser.Timer.SECOND * 2, nextLine, this);
    }

}

function nextLine() {

    index++;

    if (index < content.length)
    {
        line = '';
        game.time.events.repeat(80, content[index].length + 1, updateLine, this);
    }

}