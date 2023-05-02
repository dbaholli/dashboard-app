import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const EditProduct = () => {
  const location = useLocation();
  const product = location.state;

  const [title, setTitle] = useState(product.title);
  const [company, setCompany] = useState(product.company.name);
  const [investmentOffer, setInvestmentOffer] = useState(
    product.investmentEffort
  );
  const [image, setImage] = useState(product.picture);

  console.log("location state", product);

  const handleSubmit = (event) => {
    event.preventDefault();
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
            value={company}
            onChange={(event) => setCompany(event.target.value)}
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
            value={image}
            onChange={(event) => setImage(event.target.value)}
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
        </div>
      </form>
    </>
  );
};

export default EditProduct;
