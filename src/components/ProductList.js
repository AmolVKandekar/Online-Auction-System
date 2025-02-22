import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia, Grid } from '@mui/material';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Smartphone', price: 15000, bidEnd: '2025-1-31', imageUrl: '/images/phone.jpg', category: 'Electronics' },
    { id: 2, name: 'Laptop', price: 50000, bidEnd: '2025-1-1', imageUrl: '/images/lap.jpg', category: 'Electronics' },
    { id: 3, name: 'T-Shirt', price: 500, bidEnd: '2025-3-5', imageUrl: '/images/t.jpg', category: 'Fashion' },
    { id: 4, name: 'Jeans', price: 1200, bidEnd: '2025-1-3', imageUrl: '/images/j.jpg', category: 'Fashion' },
    { id: 5, name: 'Blender', price: 2000, bidEnd: '2025-1-3', imageUrl: '/images/b.jpg', category: 'Home & Kitchen' },
    { id: 6, name: 'Cookware Set', price: 3000, bidEnd: '2025-2-3', imageUrl: '/images/c.jpg', category: 'Home & Kitchen' },
    { id: 7, name: 'Novel', price: 300, bidEnd: '2025-1-31', imageUrl: '/images/n.jpg', category: 'Books' },
    { id: 8, name: 'Textbook', price: 800, bidEnd: '2025-2-1', imageUrl: '/images/text.jpg', category: 'Books' },
  ];

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Price: ₹{product.price}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Bid Ends: {product.bidEnd}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Category: {product.category}
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary" fullWidth>
              Bid Now
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
