import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// @ts-ignore
import { fillInFroalaEditor } from 'ember-froala-editor/test-support';
import { isHTMLSafe } from '@ember/template';

module('Integration | Component | editor', function(hooks) {
  setupRenderingTest(hooks);

  test('it triggers onChange on content change', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let editorOnChangeParam = '';

    const renderEditor = async () => {
      const onChange = (content: string) => {
        editorOnChangeParam = content;
      };
      this.set('onChange', onChange);
      await render(hbs`<Editor @onChange={{action onChange}} />`);

      return {
        onChangeParam: editorOnChangeParam
      }
    }

    async function fillContent(content) {
      const contentEditableSelector = '.fr-box';
      await settled();
      await fillInFroalaEditor(contentEditableSelector, content);
      await settled();
    }


    // test begins
    await renderEditor();

    const editorContent = '<p>HTML</p>';
    await fillContent(editorContent);

    assert.equal(editorOnChangeParam, editorContent, 'onChange fired with param - editorContent');
    assert.false(isHTMLSafe(editorOnChangeParam), 'onChange param is unsafe string');
  });
});
