

const Banner = () => {
    return (
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="./banner-1.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-lime-50">❮</a> 
              <a href="#slide2" className="btn btn-circle bg-lime-50">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src="./banner-2.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-lime-50">❮</a> 
              <a href="#slide3" className="btn btn-circle bg-lime-50">❯</a>
            </div>
          </div>  
          <div id="slide3" className="carousel-item relative w-full">
            <img src="./banner-3.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-lime-50">❮</a> 
              <a href="#slide1" className="btn btn-circle bg-lime-50">❯</a>
            </div>
          </div>
    </div>
    );
};

export default Banner;