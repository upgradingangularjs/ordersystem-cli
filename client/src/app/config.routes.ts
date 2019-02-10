routeProviderConfig.$inject = ['$routeProvider'];
function routeProviderConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<home></home>'
    })
    .when('/customers', {
      template: '<customers></customers>'
    })
    .when('/orders', {
      template: '<orders></orders>'
    })
    .when('/orders/create', {
      template: '<create-order></create-order>'
    })
    .when('/products', {
      template: '<products></products>'
    })
    .when('/customers/:id', {
      template:
        '<customer-detail customer="$resolve.customer"></customer-detail>',
      resolve: {
        customer: [
          '$route',
          'customerService',
          ($route, customerService) => {
            const id = parseInt($route.current.params.id, 10);
            return customerService.getCustomer(id);
          }
        ]
      }
    })
    .when('/orders/:id', {
      template: '<order-detail order="$resolve.order"></order-detail>',
      resolve: {
        order: [
          '$route',
          'orderService',
          ($route, orderService) => {
            const id = parseInt($route.current.params.id, 10);
            return orderService.getOrder(id);
          }
        ]
      }
    })
    .when('/products/:id', {
      template: '<product-detail product="$resolve.product"></product-detail>',
      resolve: {
        product: [
          '$route',
          'productService',
          ($route, productService) => {
            const id = parseInt($route.current.params.id, 10);
            return productService.getProduct(id);
          }
        ]
      }
    });
}

export default routeProviderConfig;
