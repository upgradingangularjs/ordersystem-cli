const template = require('./customers.html');

const customersComponent = {
  template,
  bindings: {},
  controller: customersComponentController
};

customersComponentController.$inject = ['customerService'];
function customersComponentController(customerService) {
  const vm = this;
  vm.title = 'Customers';

  vm.$onInit = () => {
    customerService.getCustomers().then(data => {
      vm.customers = data;
    });
  };
}

export default customersComponent;
