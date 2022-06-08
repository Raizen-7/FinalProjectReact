import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterProducts, getProducts } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";

const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.productSlice);

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    
    const filterProduct = () =>{
        dispatch(filterProducts(search));
    }

    return (
        <div>
            <h1>Home</h1>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <Button 
                    variant="outline-secondary" 
                    id="button-addon2"
                    onClick={filterProduct}
                >
                    Search
                </Button>
            </InputGroup>
            {
                products.map(product => (
                    <Card onClick={() => navigate(`/Product/${product.id}`)}>
                        {product.title}
                        <img src={product.productImgs[0]} alt="" />
                    </Card>
                ))
            }
        </div>
    );
};

export default Home;
