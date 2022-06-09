import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterCategory } from '../store/slices/productSlice';


const ProductDetail = () => {

    const [productDetail, setProductDetail] = useState({});
    const {id} = useParams();
    const dispatch = useDispatch();

    const productsList = useSelector(state => state.productSlice);

    useEffect(()=> {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res => {
                setProductDetail(res.data.data.product);
                dispatch(filterCategory(res.data.data.products?.category.id))          
            });
    }, [])

    console.log(productsList);

    return (
        <div>
           <h1>{productDetail.title}</h1> 
           <img src={productDetail.productImgs} alt="" className='img-fluid' />
           <h2>{productDetail.price}</h2>
           <h3>{productDetail.status}</h3>

            {
                productsList.map(productItem => (
                    <li>
                        {productItem.title}
                    </li>
                ))
            }

        </div>
    );
};

export default ProductDetail;