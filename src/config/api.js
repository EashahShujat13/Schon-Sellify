

// export async function SetSignUp({ email, password, fullname}) {
//   try{
//     const res =await fetch('https://node-js-azure-nine.vercel.app/user/register',{
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify({
//             email,
//             password,
//             fullname
//         })
//     });

//     if(!res.ok){
//         throw new Error('Network response was not ok');
//     }
//     const result =await res.json();
//     return result;
//   }

//   catch(error){
//     console.error("Error during sign-up:", error);
//         throw error;
//   }
// }


// export async function setLogin({email,password}){
//     const res=await fetch('https://dashboard-flax-two.vercel.app/api/auth/login',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         email,
//         password
//     })
// })
// const result = await res.json()
//     return result;
    
// }





export default async function getProduct() {
  const res = await fetch('https://dummyjson.com/products');
  const result = await res.json();
  return result; // only return products array
}

export async function getSingleProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await res.json();
  return result;
}





// Sign Up
// export async function SetSignUp({ email, password, fullname }) {
//   try {
//     const res = await fetch(`${BASE_URL}/user/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password, fullname }),
//     });

//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const result = await res.json();
//     return result;
//   } catch (error) {
//     console.error("Error during sign-up:", error);
//     throw error;
//   }
// }

// Login
// export async function setLogin({ email, password }) {
//   const res = await fetch(`${BASE_URL}/api/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   const result = await res.json();
//   return result;
// }

// Get Products
// export default async function getProduct() {
//   const res = await fetch(`${BASE_URL}/products`);
//   const result = await res.json();
//   return result;
// }

// export async function getSingleProduct(id) {
//   const res = await fetch(`${BASE_URL}/products/${id}`);
//   const result = await res.json();
//   return result;
// }


// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export async function addProduct(userToken, { title, price, description, image, category }) {
//   const formData = new FormData();
//   formData.append("title", title);
//   formData.append("price", price);
//   formData.append("description", description);
//   if (image) formData.append("image", image);
//   formData.append("category", category);

//   const res = await fetch("http://localhost:5000/product/post", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${userToken}`
//       // ❌ don’t set Content-Type manually! fetch handles it with FormData
//     },
//     body: formData
//   });

//   if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//   return await res.json();
// }


export async function addProduct(userToken, postData) {
  try {
  // const formData = new FormData();
  // formData.append("title", title);
  // formData.append("price", price);
  // formData.append("description", description);
  // formData.append("category", category);

  const res = await fetch("https://node-apicom.vercel.app/product/post", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",   // ✅ Add this
      // ❌ don’t set Content-Type manually! fetch handles it with FormData
    },
      body: JSON.stringify({
                title: postData.title,
                price: postData.price,
                description: postData.description,
                category: postData.category,
                
            })
  });

      const result = await res.json();
        return result
  }
         catch (error) {
           console.error("Something went wrong:", error);
            throw error; // Rethrow the error for the caller to handle
    }
}



export async function setLogin({email,password}){
  try{
    const res=await fetch('https://node-apicom.vercel.app/user/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        email,
        password
    })
})
  if (!res.ok) {
            throw new Error(`Failed to login up: ${res.statusText}`);
        }

        const result = await res.json();
        return result;
    } catch (error) {
        // Handle any errors, you can log them or throw them further
        console.error("Error during login-up:", error);
        throw error; // Rethrow the error for the caller to handle
    }
  }

  export async function setSignUp({ email, password, fullname }) {
    try {
        const res = await fetch('https://node-apicom.vercel.app/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                fullname
            })
        });

        if (!res.ok) {
            throw new Error(`Failed to sign up: ${res.statusText}`);
        }

        const result = await res.json();
        return result;
    } catch (error) {
        // Handle any errors, you can log them or throw them further
        console.error("Error during sign-up:", error);
        throw error; // Rethrow the error for the caller to handle
    }}