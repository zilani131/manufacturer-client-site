import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({refetch,cancel,setCancel}) => {
    const {productName,_id}=cancel
    const handleCancel=(event)=>{
         event.preventDefault();
         fetch(`https://cryptic-dawn-85784.herokuapp.com/user/${_id}`,{
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
            setCancel(null)
          refetch()
         })
        }
    return (
        <div>
            {/* <!-- The button to open modal --> */}


{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="cancelModal" className="modal-toggle " />
<div className="modal bg-transparent">
  <div className="modal-box bg-error">
    <h3 className="font-bold text-lg">Are you sure you want to cancel {productName}</h3>
   
    <div className="modal-action">
      <button className='btn btn-success' onClick={handleCancel}>
          Cancel Order
      </button>
      <label for="cancelModal" className="btn">Close</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default CancelModal;