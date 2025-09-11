import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import MainNavbar from '../navbar/MainNavbar';
import getProduct from '../../config/api'
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router';

function Product() {
  const [products, SetProducts] = useState([]);
const navigate = useNavigate()

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getProduct();
    console.log(res.products);
    SetProducts(res.products);
  };

  return (
    <>
      <MainNavbar />
      <Breadcrumb />

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
          Our Featured Products
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}  onClick={() => navigate(`/product/${item.id}`)}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <div className="p-6 flex flex-col justify-between h-[200px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-600">
                    ${item.price}
                  </span>
                  <span className="text-sm text-yellow-500 font-medium">
                    ⭐ {item.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Product;
