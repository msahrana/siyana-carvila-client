import { Link } from "react-router-dom";


const BrandCars = ({ car}) => {

  const {_id, brand, image} = car;

  return (
    <div className="card bg-lime-100 shadow-xl mt-8">
      <figure>
        <img className="w-full h-[200px] mb-4"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="flex justify-around ">
        <h2 className="card-title">{brand}</h2>
        <Link to={`/car/${brand}/${_id}`}>
            <button className="mb-4 btn btn-secondary">Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default BrandCars;
