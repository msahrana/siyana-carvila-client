import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "../components/Header/Banner";

const Cars = () => {
  const car = useLoaderData()
  console.log(car)

  const {_id} = useParams()
  console.log(_id)

  const {name,brand, image, description, price, rating} = car || {}

  const handleDetails = _id =>{
    console.log(_id)
  }
  const handleUpdate = _id =>{
    console.log(_id)
  }

  return (
    <div>
        <Banner></Banner>
        <div className="justify-center items-center ml-96 w-[800px]">
        <div className="card shadow-xl">
          <figure>
            <img className="w-full"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title text-red-500">Brand: {brand}</h2>
              <h2 className="card-title text-red-500">Name : {name}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="card-title text-green-500">Price: ${price}</h2>
              <h2 className="card-title text-green-500">Rating(out of 5): {rating}</h2>
            </div>
            <p>{description}</p>
            {/* rating  */}
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>

            <div className="flex justify-between">
              <Link to='/myCart'>
                <button onClick={()=>handleDetails(_id)} className="btn bg-lime-600">Details</button>
              </Link>
              <Link to={`/updateCar/${brand}/${_id}`}>
                <button onClick={()=>handleUpdate(_id)} className="btn bg-lime-600">Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
