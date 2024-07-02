// export function fetchAllProducts() {
//     return new Promise(async (resolve) => {
//         const response = await fetch('https://dummyjson.com/products')
//         const data = await response?.json()
//         resolve({ data })
//     },
//         // console.log("first response", response?.data)
//     );
// }

export function fetchAllProducts() {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/products');
        const data = await response?.json();
        // console.log("Fetched data:", data);
        resolve({ data });
    });
}

export function fetchProductsByFilters(filter) {
    let queryString = '';
    for (let key in filter) {
        queryString += `${key}=${filter[key]}&`;
    }
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/products?' + queryString);
        const data = await response?.json();
        // console.log("Fetched data:", data);
        resolve({ data });
    });
}