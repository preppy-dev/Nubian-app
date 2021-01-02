import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
/* import data from '../data' */

function ProductScreen(props) {
  const [products, setProducts]= useState([]);
  const [loading, setLoading]= useState(false);
  const [error, setError]= useState(false);

  useEffect(()=>{
   const fetchData = async () =>{
     try{
       
       setLoading(true);
       const {data} = await axios.get('/api/products');
       setLoading(false)
       setProducts(data);
     }catch(err){
       setError(err.message);
       setLoading(false)
     }
   };
   fetchData();
  },[])



  const product = products.find(x =>x._id === props.match.params.id);
  if(!product){
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <Link to="/"> back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>
                {product.name}
              </h1>
            </li>
            <li>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            </li>
              <li>
              Price : ${product.price}
              </li>
              <li>
              <p>{product.description}</p>
              </li>
          </ul>
        </div>
        <div className="col-1">
         <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="price">{product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div>{product.countInStock>  0 ? <span className="success">In Stock</span> :
                <span className="error">Unavailable</span> }</div>
              </div>
            </li>
            <li>
            <button className="primary block">Add to cart</button>
            </li>
          </ul>
         </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
