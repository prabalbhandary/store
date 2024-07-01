import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {loading ? (
        <Spinner animation="border" role="status" style={{ fontSize: '2rem' }}>
          <span className="sr-only" style={{fontWeight: "bold"}}>Loading...</span>
        </Spinner>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {products.map((product, index) => (
            <Card key={index} style={{ width: '18rem', height: '100%', margin: '1rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Link to={`/blogs/${product.id}`}>
                  <Button variant="primary">Go to details</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
