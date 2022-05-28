import React from 'react';
import { toast } from 'react-toastify';

const ProductDlt = ({dlt,setDlt,refetch}) => {
    
        const {name,_id}=dlt
    const handleDlt=(event)=>{
        event.preventDefault();
        fetch(`http://localhost:5000/product/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount) {
              toast.success(`${name} is deleted`);
            }
    setDlt(null)
            refetch();
         })
        }
    return (
        <div>
            {/* <!-- The button to open modal --> */}


{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="cancelModal" className="modal-toggle " />
<div className="modal bg-transparent">
  <div className="modal-box bg-error">
    <h3 className="font-bold text-lg">Are you sure you want to delete {name}</h3>
   
    <div className="modal-action">
      <button className='btn btn-success' onClick={handleDlt}>
          
          Delete
      </button>
      <label for="cancelModal" className="btn">Close</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDlt;