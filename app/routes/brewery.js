import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model(params) {
    const id = +params.brewery_id
    // this finds the 'brewery' in the store that has that specific id.
    return this.get('store').findRecord('brewery', id);
  },
  actions: {
    edit(model) {
      // this saves the changes made to that specific brewery.
      return model.save()
      // if successful, transitions from the nested 'brewery/edit-brewery' route
      // back to the 'brewery' route
        .then(()=> this.transitionTo('brewery'))
        // you get a flashMessage saying that is was successfully saved.
        .then(() => this.get('flashMessages').success('Updates have been saved!'))
        // if there was an issue, it triggers a flashMessage saying that there was a problem.
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem saving the updates. Please try again.');
        });
    },
    deleteBrewery(model) {
      // this deletes the specific brewery.
      return model.destroyRecord()
      // if successful, transitions back to 'breweries' route
        .then(()=> this.transitionTo('breweries'))
        // you get a flashMessage saying that is was successfully saved.
        .then(() => this.get('flashMessages').success('Brewery has been deleted!'))
        // if there was an issue, it triggers a flashMessage saying that there was a problem.
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem deleting the brewery. Please try again.');
        });
  }
}
});
