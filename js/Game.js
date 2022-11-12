class Game {
  constructor() {}

  getState() {}

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {}
}
