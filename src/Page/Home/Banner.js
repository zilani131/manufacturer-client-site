import React from 'react';

const Banner = () => {
//   https://i.ibb.co/wRkNPLW/istockphoto-896359458-612x612.jpg
// https://i.ibb.co/jf6r6pg/istockphoto-1302286440-170667a.jpg
  const banner1= "https://i.ibb.co/jJ7RyKG/ezgif-com-gif-maker.webp";
  const banner2= "https://i.ibb.co/2WFZMFG/istockphoto-1302286440-170667a-1200x.webp";
    return (
        <div className="carousel w-full ">
  <div id="slide1" style={{background:`url(${banner1})`}} className="carousel-item relative w-full">
    {/* <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" className="w-full"/> */}
   <div className='text-white font-bold text-3xl text-center  mx-auto my-40 px-6'>Production is not the application of tools to materials but logic to work </div>
    <div   className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" style={{background:`url(${banner2})`}} className="carousel-item relative w-full">
  <div className='text-white font-bold text-3xl  text-center mx-auto my-40 px-6'>We shape our tools ,afterwards our tools shape us</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
 
</div>
    );
};

export default Banner;