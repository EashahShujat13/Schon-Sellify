import React, { useState } from "react";
import { addProduct } from "../../config/api";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const userToken = useSelector(state => state.tokenreducer.tokens) // Redux token
  console.log("Token:", userToken);



  const handleSubmit = async (e) => {
    e.preventDefault(); // stop refresh
    try {
      const res = await addProduct(userToken,{ title, price, description,category });
      console.log("Product added:", res);
      console.log(userToken)
      navigate("/"); // redirect after success
    } catch (err) {
      console.log("Error posting product:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Add New Product
      </h2>
{/*  Product Name */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
{/*  Price */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
{/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter product description"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* Category */}
<div>
<label className="block text-gray-700 font-semibold mb-2">
Category
</label>
<input
type="text"
placeholder="Enter category"
className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
onChange={(e) => setCategory(e.target.value)}
/>
</div>

{/*  Upload Image */}
        
{/*   Add Product */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition transform hover:scale-[1.02]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


  // <div>
  //           <label className="block text-gray-700 font-semibold mb-2">
  //             Upload Image
  //           </label>
  //           <input
  //             type="file"
  //             className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 cursor-pointer focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
  //             onChange={(e)=>{setImage(e.target.files[0])}}
  //           />
  //         </div>