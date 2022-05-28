import React from 'react';

const AddProduct = () => {
    const handleAddProduct=(event)=>{
        event.preventDefault()
        const name=event.target.name.value;
        const img=event.target.img.value;
        const description=event.target.description.value;
        const quantity=event.target.quantity.value;
        const minimumOrder=event.target.minimumOrder.value;
        const price=event.target.price.value;
        const productDetail={name,img,description,quantity,minimumOrder,price}
        fetch('https://cryptic-dawn-85784.herokuapp.com/tools',{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(productDetail),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            event.target.reset();
          })
        
    }
    return (
        <div>
        <form className='grid grid-cols-1 gap-1 justify-start w-1/2 mx-auto bg-slate-800 p-8 rounded-3xl' onSubmit={handleAddProduct}>
            <input className='input input-bordered' name="name" placeholder='product name' type="text" />
            <br />
            <input className='input input-bordered' name="img" type="text" placeholder='image link' />
            <br />
            <textarea className='textarea textarea-bordered' name="description" placeholder='description' type="text" />
            <br />
            <input className='input input-bordered' type="number" placeholder='quantity' name="quantity" />
            <br />
            <input className='input input-bordered' placeholder='Minimum order' type="number" name="minimumOrder" />
            <br />
            <input className='input input-bordered' type="number" placeholder='price per unit' name="price" />
            <br />
            <input className='btn btn-primary w-1/2 mx-auto' value="Add" type="submit" />
            
        </form>
        </div>
    );
};

export default AddProduct;