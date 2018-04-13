import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  click,
  getRootElement, 
  findAll,
  fillIn,
  triggerKeyEvent,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  setupMirage(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/');
    await click("#About");

    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information.', async function (assert) {
    await visit('/');
    await click("#Contact");

    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals.', async function (assert) {
    await visit('/rentals');

    assert.equal(findAll('.listing').length, 3, 'should see 3 listing');
  });

  test('should filter the list of rentals by city.', async function (assert) {
    await visit('/');
    await fillIn('.list-filter input', 'seattle');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);

    assert.ok(this.element.querySelector('.results .listing'), 'should display 1 listing');
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
  });

  test('should show details for a selected rental', function (assert) {
  });
});
