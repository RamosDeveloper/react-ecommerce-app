import { useEffect } from "react";

import axios from 'axios';

const Shop = () => {
    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = async () => {
        const token = sessionStorage.getItem('react-ecommerce-token');
        const res = await axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(res.data);
                        
    }

    return (
        <div>
            <h1>Shop vato</h1>
        </div>
    )
}

export default Shop;