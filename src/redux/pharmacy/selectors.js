export const selectNearestStores = (state) => state.pharmacy.nearestStores;
export const selectReviews = (state) => state.pharmacy.reviews;
export const selectStores = (state) => state.pharmacy.stores;
export const selectProducts = (state) => state.pharmacy.products;
export const selectProduct = (state) => state.pharmacy.product;
export const selectCart = (state) => state.pharmacy.cart;
export const selectCurrentPage = (state) => state.pharmacy.currentPage;
export const selectTotalPages = (state) => state.pharmacy.totalPages;
export const selectTotalProducts = (state) => state.pharmacy.totalProducts;
export const selectIsLoading = (state) => state.pharmacy.isLoading;

export const selectOpenModal = (state) => state.pharmacy.openModal;
export const selectModalContent = (state) => state.pharmacy.modalContent;
