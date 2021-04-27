import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class SessionStub extends Service {
  get isAuthenticated() {
    return true;
  }
}

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Header />`);

    assert.equal(this.element.textContent.trim(), 'Public Diary');
  });

  test('it shows different template if authenticated', async function (assert) {
    this.owner.register('service:session', SessionStub);
    await render(hbs`<Header />`);

    assert.dom(this.element).hasText('Public Diary Logout Create Post');
  });
});
