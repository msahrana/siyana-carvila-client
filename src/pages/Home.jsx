import { useLoaderData } from "react-router-dom";
import Banner from "../components/Header/Banner";
import BrandCars from "./BrandCars";
import { useState } from "react";



const Home = () => {

    const uploadCars = useLoaderData()
    const [cars, setCars] = useState(uploadCars)

    return (
        <div>
            <Banner></Banner>
            <div className="m-20">
                <h1 className="text-5xl font-bold text-center py-6">Our Collections: {uploadCars.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cars.map(car=> <BrandCars key={car._id} car={car} cars={cars} setCars={setCars}></BrandCars>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;