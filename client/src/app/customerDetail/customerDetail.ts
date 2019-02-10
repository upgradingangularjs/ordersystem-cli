import * as moment from 'moment';

const template = require('./customerDetail.html');

const customerDetailComponent = {
  template,
  bindings: {
    customer: '<'
  },
  controller: customerDetailComponentController
};

customerDetailComponentController.$inject = ['addressService', 'orderService'];
function customerDetailComponentController(addressService, orderService) {
  const vm = this;
  vm.title = 'Customer Detail';
  vm.customer = this.customer;

  vm.$onInit = () => {
    vm.address = addressService.getFullAddress(vm.customer);
    return orderService.getOrdersByCustomer(vm.customer.id).then(data => {
      vm.orders = data;
      vm.orders.forEach(order => {
        order.orderDate = moment(
          order.orderDate,
          'YYYY-MM-DDTHH:mm:ss.SSSSZ'
        ).format('MM/DD/YYYY');
      });
    });
  };

  vm.updateDiscount = discount => {
    vm.customer.discount = discount;
  };
}

export default customerDetailComponent;
