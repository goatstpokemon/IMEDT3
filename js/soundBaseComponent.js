AFRAME.registerComponent('soundcomponent', {
  schema: {
    name: { type: 'string' },
    src: { type: 'string' },
    radius: { type: 'string', default: '0.05' },
  },
});

AFRAME.registerPrimitive('a-soundFragment', {
  defaultComponents: {
    geometry: { primitive: 'cylinder' },
    soundcomponent: {},
  },

  mappings: {
    name: 'soundcomponent',
    src: '',
    radius: '',
  },
});
