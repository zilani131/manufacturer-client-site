import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({refetch,cancel}) => {
    const {productName,_id}=cancel
    const handleCancel=(event)=>{
         event.preventDefault();
         fetch(`http://localhost:5000/user/${_id}`,{
             method:"DELETE",
             headers: {
                'Content-Type':'application/json',
              }
         })
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
             if(data?.deletedCount){
                 toast.success(`${productName} is deleted`)
             }
            
          refetch()
         })
        }
    return (
        <div>
            {/* <!-- The button to open modal --> */}


{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="cancelModal" class="modal-toggle " />
<div class="modal bg-transparent">
  <div class="modal-box bg-error">
    <h3 class="font-bold text-lg">Are you sure you want to cancel {productName}</h3>
   
    <div class="modal-action">
      <button className='btn btn-success' onClick={handleCancel}>
          Cancel Order
      </button>
      <label for="cancelModal" class="btn">Close</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default CancelModal;