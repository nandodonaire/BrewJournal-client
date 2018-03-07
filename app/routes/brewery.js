import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model(params) {
    const id = +params.brewery_id
    return this.get('store').findRecord('brewery', id);
  },
  actions: {
    edit(model) {
      return model.save()
        .then(()=> this.transitionTo('brewery'))
        .then(() => this.get('flashMessages').success('Updates have been saved!'))
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem saving the updates. Please try again.');
        });
    },
    deleteBrewery(model) {
      // console.log('Delete is triggering!')
      return model.destroyRecord()
        .then(()=> this.transitionTo('breweries'))
        .then(() => this.get('flashMessages').success('Brewery has been deleted!'))
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem deleting the brewery. Please try again.');
        });
  }
}
});
