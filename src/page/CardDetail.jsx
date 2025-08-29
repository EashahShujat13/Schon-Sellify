import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../config/api'; // adjust import if needed
import MainNavbar from '../components/navbar/MainNavbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtocart } from '../../Store/CartSlice';
function CardDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  

  useEffect(() => {
    async function fetchProduct() {
      const data = await getSingleProduct(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-20 text-gray-500">Loading...</div>;

  return (
    <>
    <MainNavbar/> 
       <div className="min-h-screen   bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center px-4 py-10">
     
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg overflow-hidden md:flex">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />
        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
            <span className="text-yellow-500 font-semibold">⭐ {product.rating}</span>
          </div>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-300"
         onClick={() => {
         dispatch(addtocart(product));
         navigate('/cart');
}}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>

  );
}

export default CardDetail;
