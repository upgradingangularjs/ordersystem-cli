class AddressService {
  constructor() {}

  getFullAddress(customer) {
    return (
      customer.address1 +
      ', ' +
      customer.city +
      ', ' +
      customer.state +
      ' ' +
      customer.zip
    );
  }
}

export default AddressService;
