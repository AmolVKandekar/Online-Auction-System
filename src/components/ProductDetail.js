import React from 'react';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';

const ProductDetail = () => {
  const product = { id: 1, name: 'Product 1', price: 100, description: 'This is a sample product.', seller: 'Seller Name', bidEnd: '2023-12-31', imageUrl: 'https://via.placeholder.com/400' };

  const handleBuy = () => {
    console.log('Buying product:', product.name);
  };

  const handleSell = () => {
    console.log('Selling product:', product.name);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">Price: ₹{product.price}</Typography>
        <Typography variant="body2">Description: {product.description}</Typography>
        <Typography variant="body2">Seller: {product.seller}</Typography>
        <Typography variant="body2">Bid Ends: {product.bidEnd}</Typography>
        <Grid container spacing={2} style={{ marginTop: '10px' }}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleBuy}>
              Buy Now
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleSell}>
              Sell
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
