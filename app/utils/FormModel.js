import { Changeset } from 'ember-changeset';

export default class FormModel {
  constructor(model) {
    return Changeset(model);
  }
}
