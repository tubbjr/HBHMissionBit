var loadstate = { preload : funtion(){
            var loadingLable = game.add.text(80,150,"Loading...",){font: '30px Courier',fill:'#ffffff'});
               
 game.load.image('old', 'assets/sampepper.png');
 game. load.image('sam', 'assets/image01.png')

    },
        
        create: funtion(){
game.state.start('menu');
        }

    }