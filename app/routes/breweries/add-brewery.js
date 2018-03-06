import Route from '@ember/routing/route';

export default Route.extend({
  model () {
  return this.get('store').createRecord('brewery', {});
},
actions: {
save(newBrewery) {
  // console.log('Save ran!')
      // console.log('Brewery name is', newBrewery.get('name'))
      return newBrewery.save()
        .then(()=> this.transitionTo('breweries'))
}
}
});
