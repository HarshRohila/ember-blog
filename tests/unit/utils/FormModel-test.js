// import changeset from 'ember-blog/utils/changeset';
import FormModel from 'ember-blog/utils/FormModel';
import { module, test } from 'qunit';
import { Changeset } from 'validated-changeset';
import { BufferedChangeset } from 'validated-changeset';

module('Unit | Utility | FormModel', function () {

  test('it returns changeset instance', function (assert) {
    let result = new FormModel({ test: 'test' });
    assert.ok(result instanceof BufferedChangeset);
  });
});
