import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // the model hook returns a hash with all of the 'breweries' in the 'store',
    // then filters out the 'breweries' that are not saved to the api. This prevents
    // users from seeing the unsaved breweries in the DOM.
    return Ember.RSVP.hash({
      breweries : this.get('store').findAll('brewery').then(function (result) {
        return result.filterBy('isNew', false);
      })
  })
}
});
