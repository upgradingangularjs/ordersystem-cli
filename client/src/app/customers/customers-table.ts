const template = require('./customers-table.html');

const customersTableComponent = {
  template,
  bindings: {
    customers: '<'
  },
  controller: customersTableComponentController
};

function customersTableComponentController() {
  const vm = this;
}

export default customersTableComponent;
