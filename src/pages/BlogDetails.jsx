import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div style={{ minHeight: 'calc(100vh - 120px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spinner animation="border" role="status" style={{ fontSize: '2rem' }}>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: 'calc(100vh - 120px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Row noGutters>
          <Col md={4}>
            <Card.Img src={blog?.image} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{blog?.title}</Card.Title>
              <Card.Text>{blog?.description}</Card.Text>
              <Card.Text>$ {blog?.price}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Button>Add to Cart</Button>
      </Card>
    </Container>
  );
};

export default BlogDetails;
