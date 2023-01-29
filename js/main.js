AFRAME.registerComponent('links', {
  init: function () {
    const dutch = document.querySelector('#dutch');
    const english = document.querySelector('#english');

    dutch.addEventListener('click', function () {
      window.location.href = 'dutch.html';
    });
    english.addEventListener('click', function () {
      window.location.href = 'english.html';
    });
  },
});
