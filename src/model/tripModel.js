import { generatePoint } from '../mocks/mock';

export default class TripModel {

  #points = Array.from({length: 5}, generatePoint);

  get points() {
    return this.#points;
  }

}
