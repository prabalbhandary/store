import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productPrices, setProductPrices] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        const productIds = data.flatMap(cart => cart.products.map(product => product.productId));
        fetchProductPrices(productIds);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const fetchProductPrices = async (productIds) => {
    try {
      const prices = {};
      for (const productId of productIds) {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const productData = await response.json();
        prices[productId] = productData.price;
      }
      setProductPrices(prices);
    } catch (error) {
      console.error('Error fetching product prices:', error);
    }
  };

  const calculateItemPrice = (productId, quantity) => {
    const price = productPrices[productId] || 0;
    return (price * quantity).toFixed(2);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(cart => {
      cart.products.forEach(product => {
        const price = productPrices[product.productId] || 0;
        totalPrice += price * product.quantity;
      });
    });
    return totalPrice.toFixed(2);
  };

  return (
    <>
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
                  <p>Price: ${calculateItemPrice(product.productId, product.quantity)}</p>
                  <Button variant="danger" size="sm">Remove</Button>
                </Col>
              </Row>
            ))}
            <hr />
          </div>
        ))}
      </Container>

      <div style={{textAlign: 'center', fontWeight: 'bold'}}>
        <p>Total price: ${calculateTotalPrice()}</p>
      </div>
    </>
  );
};

export default Cart;
