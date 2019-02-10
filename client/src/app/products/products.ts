const template = require('./products.html');

const productsComponent = {
  template,
  bindings: {},
  controller: productsComponentController
};

productsComponentController.$inject = ['productService'];
function productsComponentController(productService) {
  const vm = this;
  vm.title = 'Products';

  vm.$onInit = () => {
    return productService.getProducts().then(data => (vm.products = data));
  };
}

export default productsComponent;
