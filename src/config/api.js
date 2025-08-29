

export async function SetSignUp({ email, password, fullname}) {
  try{
    const res =await fetch('https://node-js-azure-nine.vercel.app/user/register',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            fullname
        })
    });

    if(!res.ok){
        throw new Error('Network response was not ok');
    }
    const result =await res.json();
    return result;
  }

  catch(error){
    console.error("Error during sign-up:", error);
        throw error;
  }
}


export async function setLogin({email,password}){
    const res=await fetch('https://dashboard-flax-two.vercel.app/api/auth/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        email,
        password
    })
})
const result = await res.json()
    return result;
    
}





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
