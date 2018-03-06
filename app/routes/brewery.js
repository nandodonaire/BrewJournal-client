import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const id = +params.brewery_id
    return this.get('store').findRecord('brewery', id);
  }
});
