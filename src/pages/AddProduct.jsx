import Swal from "sweetalert2";


const AddProduct = () => {
  const handleAddCar = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const newCar = { name, brand, type, price, description, image,rating};
    console.log(newCar);

    fetch('http://localhost:5000/car',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCar)
    })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Car added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
  };

  return (
    <div className="px-32 py-8 bg-lime-50">
      <h1 className="text-3xl font-bold text-center">Add a New Car:</h1>
      <form onSubmit={handleAddCar}>
        <div className="lg:flex mt-6">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Product Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-semibold">Brand Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="lg:flex mt-6">
          <div className="form-control w-1/3">
            <label className="label">
              <span className="label-text font-semibold">Type Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/3 ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price: $</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/3 ml-4">
            <label className="label">
              <span className="label-text font-semibold">Rating:(Out of 5)</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mt-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Description:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mt-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Image:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
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
        
        <input
          className="btn btn-success mt-6 w-full"
          type="submit"
          value="Add Car"
        />
      </form>
    </div>
  );
};

export default AddProduct;
