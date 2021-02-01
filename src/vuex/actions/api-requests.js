import axios from "axios";


export default {

    GET_PRODUCTS_FROM_API( {commit} ) {
        console.log('_ GET_PRODUCTS_FROM_API runs')
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
            .then( (products) => {
                console.log('response from server')
                commit('SET_PRODUCTS_TO_STATE', products.data); // Вызываем мутацию, 'products' - payload
                return products;
            })
            .catch( (error) => {
                console.log(error);
                return error;
            })
    },

}