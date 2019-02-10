const template = require('./productDetail.html');

const productDetailComponent = {
  template,
  bindings: {
    product: '<'
  },
  controller: productDetailComponentController
};

function productDetailComponentController() {
  const vm = this;
  vm.title = 'Product Detail';
  vm.product = this.product;
}

export default productDetailComponent;
