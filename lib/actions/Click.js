import Action from '../Action';

export default class Click extends Action {
  constructor(list) {
    super({
      pa: 'click',
      pal: list
    });
  }
}
