const template = require('./home.html');

const homeComponent = {
  template,
  bindings: {},
  controller: homeComponentController
};

function homeComponentController() {
  const vm = this;
  vm.title = 'Awesome, Inc. Internal Ordering System';
}

export default homeComponent;
