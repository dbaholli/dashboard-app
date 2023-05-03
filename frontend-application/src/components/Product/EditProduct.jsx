import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineArrowRight } from "react-icons/ai";
import { updateProduct } from "../../actions/productActions";

const EditProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state;

  const [title, setTitle] = useState(product.title);
  const [companyName, setCompanyName] = useState(product.company.name);
  const [investmentOffer, setInvestmentOffer] = useState(
    product.investmentEffort
  );
  const [imageUrl, setImageUrl] = useState(product.picture);
  const [successData, setSuccessData] = useState(false);
  const [errorData, setErrorData] = useState(false);

  // console.log("location state", product);

  const productUpdate = useSelector((state) => state.productUpdate);
  const { success, error } = productUpdate;

  useEffect(() => {
    if (success) {
      console.log("Product updated successfully!");
      setErrorData(false);
      setSuccessData(true);
    } else if (error) {
      console.log("Product update failed", error);
      setSuccessData(false);
      setErrorData(true);
    }
  }, [success, error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("update", title, companyName, investmentOffer, imageUrl);
    dispatch(
      updateProduct(product.id, title, companyName, investmentOffer, imageUrl)
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex-col py-[7%] max-w-md mx-10'>
        <nav className='flex items-center text-sm text-gray-500 mb-4'>
          <ol className='list-none p-0 inline-flex'>
            <li className='flex items-center'>
              <Link to='/' className='text-gray-600 hover:text-gray-800'>
                Home
              </Link>
              <AiOutlineArrowRight className='w-3 h-3 mx-2 text-gray-400' />
            </li>
            <li className='flex items-center'>
              <Link
                to={`/product`}
                className='text-gray-600 hover:text-gray-800'
              >
                {product.title}
              </Link>
              <AiOutlineArrowRight className='w-3 h-3 mx-2 text-gray-400' />
            </li>
            <li className='flex items-center text-gray-800'>
              <span>Edit {product.title}</span>
            </li>
          </ol>
        </nav>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='investmentOffer'
            className='block text-gray-700 font-bold mb-2'
          >
            Investment Offer
          </label>
          <input
            type='text'
            id='price'
            name='price'
            value={investmentOffer}
            onChange={(event) => setInvestmentOffer(event.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='investmentOffer'
            className='block text-gray-700 font-bold mb-2'
          >
            Company
          </label>
          <input
            type='text'
            id='company'
            name='company'
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='image' className='block text-gray-700 font-bold mb-2'>
            Image URL
          </label>
          <input
            type='text'
            id='image'
            name='image'
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Save
          </button>
          <h1
            className={`${
              successData
                ? "text-blue-500 font-bold text-lg"
                : errorData
                ? "text-red-500 font-bold text-lg"
                : null
            }`}
          >
            {successData
              ? "Successfully updated!"
              : errorData
              ? "Error while trying to update!"
              : null}
          </h1>
        </div>
      </form>
    </>
  );
};

export default EditProduct;
