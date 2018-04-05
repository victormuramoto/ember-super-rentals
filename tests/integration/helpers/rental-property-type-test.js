import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | rental-property-type', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly for Standalone rentals', async function(assert) {
    this.set('inputValue', 'abc');

    await render(hbs`{{rental-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'StandAlone');
  });

  test('it renders correctly for a Community Rental', async function(assert){
    this.set('inputValue', 'Apartment');

    await render(hbs`{{rental-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Community');
  });
});
