import { useLoaderData, useParams } from "react-router-dom";

const MyCart = () => {
  const data = useLoaderData();
  console.log(data);

  const car = useParams();
  console.log(car);

  const { name, brand, image, description, price, rating } = car || {};

  return (
    <div className="bg-gray-200">
      <div className="justify-center items-center ml-96 w-[800px] h-[540px] bg-orange-50">
        <div className="card shadow-xl">
          <figure>
            <img className="w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title text-red-500">Brand: {brand}</h2>
              <h2 className="card-title text-red-500">Name : {name}</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="card-title text-green-500">Price: ${price}</h2>
              <h2 className="card-title text-green-500">
                Rating(out of 5): {rating}
              </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
