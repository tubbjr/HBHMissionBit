var game = new Phaser.game(640,480, Phaser.AUTO, "gameDiv");

    game.state.add('boot', bootState);
        
game.state.add('load', loadState);
    
game.state.add('menu', menuState);

game.state.add('play', playState);

game.state.add('win', winState);

game.state.add('main', mainState);

game.state.start('boot');