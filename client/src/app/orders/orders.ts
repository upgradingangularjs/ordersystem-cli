import * as _ from 'lodash';

const template = require('./orders.html');

const ordersComponent = {
  template,
  bindings: {},
  controller: ordersComponentController
};

ordersComponentController.$inject = [
  'orderService',
  'customerService',
  '$q',
  '$location'
];
function ordersComponentController(
  orderService,
  customerService,
  $q,
  $location
) {
  const vm = this;
  vm.title = 'Orders';

  vm.$onInit = () => {
    const promises = [orderService.getOrders(), customerService.getCustomers()];
    return $q.all(promises).then(data => {
      vm.orders = data[0];
      vm.customers = data[1];
      vm.orders.forEach(order => {
        const customer = _.find(vm.customers, c => {
          return order.customerId === c.id;
        });
        order.customerName = customer.fullName;
      });
    });
  };

  vm.goToCreateOrder = () => {
    $location.path('/orders/create');
  };
}

export default ordersComponent;
