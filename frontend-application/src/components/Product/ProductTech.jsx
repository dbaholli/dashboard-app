import React from "react";

const ProductTech = ({ type, businessModels }) => {
  return (
    <div className=' rounded-md shadow-sm'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex space-x-2'>
          <span className='bg-blue-500 text-white px-2 py-1 rounded-md text-sm'>
            {type?.name}
          </span>

          {businessModels?.map((b) => {
            return (
              <span
                className='bg-green-500 text-white px-2 py-1 rounded-md text-sm'
                key={b?.id}
              >
                {b?.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductTech;
