import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  beersTasted: DS.attr('string'),
  notes: DS.attr('string')
});
