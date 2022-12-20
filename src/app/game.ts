interface IGame {
  name: string;
  gameID: number;
  identify(): string;
}

export class Game implements IGame {
  name: string;
  gameID: number;

  constructor(name: string, gameID: number) {
    this.name = name;
    this.gameID = gameID;
  }

  identify() {
    return 'hallo, meinst du ${this.name}';
  }
}
