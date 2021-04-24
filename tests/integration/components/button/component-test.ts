import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders button text', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const btnText = 'button-text';
    this.set('text', btnText);
    await render(hbs`{{button text=text}}`);

    assert.dom(this.element).hasText(btnText);
  });

  test('it renders button icon', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const iconName = 'coffee';
    this.set('icon', iconName);
    await render(hbs`{{button icon=icon}}`);

    assert.dom(this.element.querySelector('svg.fa-coffee')).exists();
  });
});
