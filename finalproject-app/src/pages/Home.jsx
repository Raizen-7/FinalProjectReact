import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { filterProducts, getProducts, filterCategory } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, FormControl, InputGroup, ListGroup, Row, Col} from "react-bootstrap";

const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.productSlice);

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(getProducts());

        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => setCategories(res.data.data.categories))

    }, [dispatch]);

    const selectCategory = id => {
        dispatch(filterCategory(id));
    };
    
    const filterProduct = () =>{
        dispatch(filterProducts(search));
    };

    return (
        <div>
            <h1>Home</h1>
            <Row>
                <Col lg={2}>
                    <h3>Categories</h3>
                    <ListGroup  >
                        {
                            categories.map(category =>(
                                <ListGroup.Item key={category.id} onClick={() => selectCategory(category.id)}>
                                    {category.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>    
                </Col>

                <Col>     
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
                    
                    <Row xs={1} md={3} className="g-4">
                        {
                            products.map(product => (
                                <Col key={product.id} >
                                    <Card border="light"  
                                        onClick={() => navigate(`/Product/${product.id}`)}
                                    >
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Img variant="top" src={product.productImgs[0]} />
                                            <Card.Text>{product.description}</Card.Text>
                                            <Card.Footer>{product.status}</Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    
    );
};

export default Home;
