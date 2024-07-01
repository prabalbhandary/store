import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of cart items
        setCartItems(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Your Cart</h2>
          <hr />
        </Col>
      </Row>
      {cartItems.map(cart => (
        <div key={cart.id} className="mb-5">
          <Row>
            <Col>
              <h5>Cart ID: {cart.id}</h5>
              <p>Date: {new Date(cart.date).toLocaleDateString()}</p>
            </Col>
          </Row>
          {cart.products.map(product => (
            <Row key={product.productId} className="mb-3">
              <Col md={8}>
                <h6>Product ID: {product.productId}</h6>
                <p>Quantity: {product.quantity}</p>
              </Col>
              <Col md={4}>
                {/* Calculate subtotal for each product */}
                <p>Price: ${(getProductPrice(product.productId) * product.quantity).toFixed(2)}</p>
                <Button variant="danger" size="sm">Remove</Button>
              </Col>
            </Row>
          ))}
          <hr />
        </div>
      ))}
    </Container>
  );

  // Function to get price for a given product ID (example)
  function getProductPrice(productId) {
    // Replace this with actual logic to fetch product price from another API or local data
    // For now, returning a placeholder price
    return 10; // Example price
  }
};

export default Cart;
