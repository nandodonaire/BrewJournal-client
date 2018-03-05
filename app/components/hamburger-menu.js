import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['navbar-toggle', 'collapsed'],
  attributeBindings: [
    'toggle:data-toggle',
    'target:data-target',
    'expanded:aria-expanded',
  ],
  toggle: 'collapse',
  target: '#navigation',
  expanded: false,
});
