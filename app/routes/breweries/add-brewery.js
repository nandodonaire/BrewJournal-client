import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').createRecord('brewery', {});
  },
  actions: {
  save(newBrewery) {
    // console.log('Save ran!')
        // console.log('Brewery name is', newBrewery.get('name'))
        return newBrewery.save()
          .then(()=> this.transitionTo('breweries'))
          .then(() => this.get('flashMessages').success('New brewery has been saved!'))
          .catch(() => {
            this.get('flashMessages')
            .danger('There was a problem saving the new brewery. Please try again.');
          });
        }
      }
});
