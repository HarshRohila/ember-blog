import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | spinner-modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{spinner-modal}}`);

    assert.dom(this.element).containsText('');

    // Template block usage:
    await render(hbs`
      {{#spinner-modal}}
        template block text
      {{/spinner-modal}}
    `);

    assert.dom(this.element).containsText('');
  });
});
