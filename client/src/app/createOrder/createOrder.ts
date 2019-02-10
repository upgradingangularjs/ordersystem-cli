const template = require('./createOrder.html');

const createOrderComponent = {
  template,
  bindings: {},
  controller: createOrderComponentController
};

createOrderComponentController.$inject = [
  'orderService',
  'customerService',
  '$location',
  'productService',
  '$q'
];
function createOrderComponentController(
  orderService,
  customerService,
  $location,
  productService,
  $q
) {
  const vm = this;
  vm.title = 'Create Order';

  vm.newOrder = {
    customerId: null,
    items: [
      {
        productId: null,
        quantity: null
      },
      {
        productId: null,
        quantity: null
      }
    ]
  };

  vm.$onInit = () => {
    const promises = [
      productService.getProducts(),
      customerService.getCustomers()
    ];
    return $q.all(promises).then(data => {
      vm.products = data[0];
      vm.customers = data[1];
    });
  };

  vm.postOrder = () => {
    vm.newOrder.items = vm.newOrder.items.filter(x => x.productId !== null);

    return orderService.postOrder(vm.newOrder).then(() => {
      $location.path('/orders');
    });
  };
}

export default createOrderComponent;
