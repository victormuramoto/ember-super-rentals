import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

const DUMMY_ELEMENT = {};

let MapUtilStub = EmberObject.extend({
  createMap(element, location) {
    this.assert.ok(element, 'createMap called with element');
    this.assert.ok(location, 'createMap called with location');
    return DUMMY_ELEMENT;
  }
})

module('Unit | Service | maps', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:maps');
    assert.ok(service);
  });

  test('should create a new map if one isnt cached for location', function (assert) {
    assert.expect(4);
    let stubMapUtil = MapUtilStub.create({ assert });
    let mapService = { mapUtil: stubMapUtil };
    let element = mapService.getMapElement('San Francisco');
    assert.ok(element, 'element exists');
    assert.equal(element.className, 'map', 'element has class name of map');
  });
});

