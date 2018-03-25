import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model () {
    // this model hook gets the 'store' and creates an empty 'brewery' object
    return this.get('store').createRecord('brewery', {});
  },
  actions: {
    // this saves the 'newBrewery' to the store
  save(newBrewery) {
      return newBrewery.save()
      // once saved, it transitions to the 'breweries' route.
        .then(()=> this.transitionTo('breweries'))
        // you get a flashMessage saying that is was successfully saved.
        .then(() => this.get('flashMessages').success('New brewery has been saved!'))
        // if there was an issue, it triggers a flashMessage saying that there was a problem.
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem saving the new brewery. Please try again.');
          });
        }
      }
});
