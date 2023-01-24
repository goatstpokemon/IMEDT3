AFRAME.registerComponent('soundcomponent', {
  schema: {
    name: { type: 'string' },
    audio: { type: 'string' },
    radius: { type: 'string', default: '0.3s' },
  },
  init: function () {
    let clicked = false;
    let el = this.el;
    let pos = el.getAttribute('position');
    let audio = new Audio(this.data.audio);
    el.setAttribute('rotation', { x: 0, y: -00, z: -90 });
    el.setAttribute('geometry', 'radius', this.data.radius);
    el.setAttribute('material', 'color', 'rgb(49, 65, 78)');
    el.setAttribute('geometry', 'height', '0.1');
    el.object3D.position.set(pos.x, pos.y, pos.z);
    el.classList.add('js--interact');

    this.PlayFragment = () => {
      clicked = true;
      if (!clicked) {
        var materials = [
          new THREE.MeshBasicMaterial({
            color: 'rgb(49, 65, 78)',
          }),
          new THREE.MeshBasicMaterial({
            src: '../assets/audio/play.svg',
          }),
        ];

        el.getObject3D('mesh').material = materials;
      } else {
        // el.setAttribute('material', {
        //   color: 'rgb(213, 106, 39)',
        //   src: '../assets/audio/pause.svg',
        // });
        var materials = [
          new THREE.MeshBasicMaterial({
            color: 'rgb(213, 106, 39)',
          }),
          new THREE.MeshBasicMaterial({
            src: '../assets/audio/pause.png',
          }),
        ];
        el.getObject3D('mesh').material = materials;
        audio.play();
        audio.addEventListener('ended', () => {
          var materials = [
            new THREE.MeshBasicMaterial({
              color: 'rgb(49, 65, 78)',
            }),
            new THREE.MeshBasicMaterial({
              src: '../assets/audio/play.png',
            }),
          ];

          el.getObject3D('mesh').material = materials;
        });
      }
    };
    el.addEventListener('click', this.PlayFragment);
  },
  update: function () {},
});

AFRAME.registerPrimitive('a-soundFragment', {
  defaultComponents: {
    geometry: { primitive: 'cylinder' },
    soundcomponent: {},
  },

  mappings: {
    name: 'soundcomponent.name',
    audio: 'soundcomponent.audio',
    radius: 'soundcomponent.radius',
  },
});
