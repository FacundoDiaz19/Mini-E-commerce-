export const saveLastInterestProduct = (productName) => {
    sessionStorage.setItem("LastProduct", productName);

}