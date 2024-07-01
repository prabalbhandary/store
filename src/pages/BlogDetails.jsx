import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Row noGutters>
          <Col md={4}>
            <Card.Img src={blog.image} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.description}</Card.Text>
              <Card.Text>$ {blog.price}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Button>Add to Cart</Button>
      </Card>
    </Container>
  );
};

export default BlogDetails;
