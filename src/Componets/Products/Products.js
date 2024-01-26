import React from 'react'
import "./Products.css"

const Products = () => {

  const products = [
      { id: 1, name: 'Product 1', price: 19.99, image:'./nkring.jpg' },
      { id: 2, name: 'Product 2', price: 29.99, image:'./BLladyje.jpg' },
      { id: 3, name: 'Product 3', price: 39.99, image:'./BLladyje.jpg' },
    ];

return (
  // <div>products</div>

  <section className="products">
  <div className="products-content" id="products-section">
    <h2>Our Products</h2>
    <div className="product-list" >
      {products.map((product) => (
        <div key={product.id} className="product" style={{ backgroundImage: `url(${product.image})` }}>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
</section>

)
}

export default Products
