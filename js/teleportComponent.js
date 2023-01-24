const camera = document.querySelector('#js--camera');

AFRAME.registerComponent('teleportcomponent', {
  schema: {
    color: { type: 'string', default: 'blue' },
    name: { type: 'string' },
    radius: { type: 'string', default: '0.5' },
  },
  init: function () {
    // Do something when component first attached.

    let nameEl = document.createElement('a-text');
    let tel = this.el;
    pos = tel.getAttribute('position');
    tel.setAttribute('rotation', { x: 0, y: -90, z: -00 });
    tel.setAttribute('material', 'color', this.data.color);
    tel.setAttribute('geometry', 'radius', this.data.radius);
    tel.setAttribute('geometry', 'height', '0.1');
    tel.classList.add('js--interact');
    tel.object3D.position.set(pos.x, pos.y, pos.z);

    nameEl.setAttribute('value', this.data.name);
    this.teleport = (e) => {
      const location = tel.getAttribute('position');
      let att = document.createAttribute('animation');
      //   prettierignore;
      att.value = `property: position; easing: linear; dur: 1000; to:
          ${location.x},
          ${location.y + 1.6},
          ${location.z}`;
      camera.setAttribute('animation', att.value);
    };
    tel.appendChild(nameEl);
    nameEl.setAttribute('position', { x: 0, y: 2, z: 0 });
    nameEl.setAttribute('color', this.data.color);
    tel.addEventListener('click', this.teleport);
  },

  update: function () {
    // Do something when component's data is updated.
  },
});

AFRAME.registerPrimitive('a-teleport', {
  defaultComponents: {
    geometry: { primitive: 'cylinder' },
    teleportcomponent: {},
  },
  mappings: {
    name: 'teleportcomponent.name',
    color: 'teleportcomponent.color',
    radius: 'teleportcomponent.radius',
  },
});
