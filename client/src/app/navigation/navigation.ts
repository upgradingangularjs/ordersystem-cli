const template = require('./navigation.html');

const navigationComponent = {
  template,
  bindings: {},
  controller: navigationComponentController
};

function navigationComponentController() {
  const vm = this;
  vm.companyName = 'Awesome, Inc.';
}

export default navigationComponent;
