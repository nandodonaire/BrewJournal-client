import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // return this.get('store').findAll('brewery');
    return Ember.RSVP.hash({
      breweries : this.get('store').findAll('brewery').then(function (result) {
        return result.filterBy('isNew', false);
      })
  })
}
});
