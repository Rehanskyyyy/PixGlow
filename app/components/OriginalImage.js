import React from 'react';

const OriginalImage = (props) => {
    if (!props.src) return null;

    return (
        <div className="bg-white shadow-2xl h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[390px] md:w-[390px] rounded-sm overflow-hidden flex flex-col mb-5">
            <h1 className="text-white text-center font-medium py-1 bg-rose-900 rounded-t-md text-sm sm:text-base">
                Original Image
            </h1>
            <div className="flex justify-center items-center h-full w-full">
                <img
                    src={props.src}
                    alt="Original"
                    className="h-full w-full object-contain blur-[0.5px]"
                />
            </div>
        </div>
    );
};

export default OriginalImage;
