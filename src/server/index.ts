export {
  listProducts,
  getProduct,
  getProductById,
  getProductByHandle,
  listProductVariants,
} from '@/common/api/services/product';

export {
  listCollections,
  getCollection,
  getCollectionById,
  getCollectionByHandle,
  listCollectionProducts,
} from '@/common/api/services/collection';

export {
  createCart,
  addToCart,
  removeFromCart,
  updateCart,
  getCart,
} from '@/common/api/services/cart';

export {
  listCustomerAddresses,
  createCustomerAddress,
  deleteCustomerAddress,
  updateCustomerAddress,
  updateCustomerDefaultAddress,
} from '@/common/api/services/address';

export { listOrders } from '@/common/api/services/order';
