import { Changeset } from 'ember-changeset';

export default class FormModel {
  constructor(model: object) {
    return Changeset(model);
  }
}
