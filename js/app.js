  const game = new Game();
  document.getElementbyId('begin-game').addEventListener('clic', function(){
      game.startGame();
      this.style.display = 'none';
      document.getElementById('play-area').style.opacity = '1';

  });
