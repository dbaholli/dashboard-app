import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import { GrLocation } from "react-icons/gr";

const ProductView = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productsList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  console.log(products);

  return (
    <div className='flex'>
      {loading ? (
        <h1 className='text-[30px] flex justify-center'>Loading ...</h1>
      ) : (
        <>
          <div className='border'>
            <img
              className='w-auto h-[350px]'
              alt='Image'
              src={`${products?.picture}`}
            />
            <div className='flex-col p-5'>
              <h1 className='text-2xl font-bold'>{products?.name}</h1>
              <h2 className='text-xl'>
                Investment Effort: {products?.investmentEffort}
              </h2>
              <p className='text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis corrupti, sed ratione, cupiditate reprehenderit
                quaerat debitis aliquid adipisci iure eam ipsum, dolor sit amet
                consectetur adipisicing elit. Reiciendis corrupti, sm ipsum,
                dolor sit amet consectetur adipisicing elit. Reiciendis
                corrupti, sed ratione, cupiditate reprehenderit quaerat debitis
                aliquid adipisci iure eaed ratione, cupiditate reprehenderit
                quaerat debitis aliquid adipisci iure ea obcaecati assumenda
                laboriosam distinctio? Quaerat.
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full border gap-5 p-5'>
            <h1 className='text-xl font-bold'>Offered by</h1>
            <div className='flex'></div>
            <img
              className='w-full h-[50px]'
              alt='Image'
              src={`${products?.company?.logo}`}
            />
            <div className='flex items-center gap-2'>
              <img
                className='w-[100px]'
                alt='Image'
                src={`${products?.user?.profilePicture}`}
              />
              <div className='flex-col'>
                <div className='flex'>
                  <h3 className="font-sm font-bold">{products?.user?.firstName}</h3>&nbsp;
                  <h3 className="font-sm font-bold"> {products?.user?.lastName}</h3>
                </div>
                <h3>{products?.user?.email}</h3>
              </div>
            </div>
            <div className='flex items-center'>
              <GrLocation size={25} /> {products?.company?.address?.street}
            </div>
            <iframe
              width='600'
              height='200'
              loading='lazy'
              style={{ border: "none" }}
              allowFullScreen
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.4977406545945!2d6.1070682767680164!3d50.78488356322742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0994656d11507%3A0x5b2c8d5cd107d71b!2sJ%C3%BClicher%20Str.%2C%20Aachen%2C%20Germany!5e0!3m2!1sen!2s!4v1682975567138!5m2!1sen!2s&key=AIzaSyBjBVR3lLPn8iDQ7SpC92FO4HftXQyOMeg'
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductView;
