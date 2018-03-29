import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import EmberObject from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  let rental = EmberObject.create({
    image: 'fake.png',
    title: 'test-title',
    owner: 'test-owner',
    category: 'test-type',
    city: 'test-city',
    bedrooms: 3
  })
  test('should display rental details', async function(assert) {
    await this.set('rentalObj', rental);
    await this.render(hbs`{{rental-listing rental=rentalObj}}`);

    assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
    assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'Owner: test-owner');
  });
  
  test('should toggle wide class on click', async function(assert) {
    await this.set('rentalObj', rental);
    await this.render(hbs`{{rental-listing rental=rentalObj}}`);

    assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
    await click('.image');
    assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
    await click('.image');
    assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
  });
});
