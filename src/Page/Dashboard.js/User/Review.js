import React from "react";

const Review = () => {
    const handleAdd=event=>{
        event.preventDefault();
        const rating=parseInt(event.target.star.value);
        const review=event.target.description.value;
        const reviews={review,rating}
        fetch('')
    }
  return (
    <div>
      <form onSubmit={handleAdd} className="grid grid-cols-1 w-2/4 bg-slate-500 p-5 rounded-md">
        <input
          name="description"
          class="input input-bordered"
          type="text"
          id=""
        />
        <br />
        <select name="star" class="select select-bordered w-full ">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
        <input   type="submit" value="Add to cart" class="btn btn-primary" />
      </form>
     
    </div>
  );
};

export default Review;
