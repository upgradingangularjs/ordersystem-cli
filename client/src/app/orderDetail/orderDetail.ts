// Don't forget to import lodash
import * as _ from 'lodash';

const template = require('./orderDetail.html');

const orderDetailComponent = {
  template,
  bindings: {
    order: '<'
  },
  controller: orderDetailComponentController
};

orderDetailComponentController.$inject = [
  'productService',
  'customerService',
  '$q'
];
function orderDetailComponentController(productService, customerService, $q) {
  const vm = this;
  vm.title = 'Order Detail';
  vm.order = this.order;

  vm.$onInit = () => {
    const promises = [
      productService.getProducts(),
      customerService.getCustomer(vm.order.customerId)
    ];
    return $q.all(promises).then(data => {
      const products = data[0];
      vm.customer = data[1];
      vm.order.items.forEach(item => {
        const product = _.find(products, p => {
          return p.id === item.productId;
        });
        item.productName = product.name;
        item.itemPrice = item.quantity * product.price;
      });
    });
  };
}

export default orderDetailComponent;
