import React from 'react';

const EnhancedImage = (props) => {
    return (
        <div>
            <div className="container bg-white shadow-2xl h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[390px] md:w-[390px] rounded-md overflow-hidden flex flex-col mb-12">
                <div className='flex items-center'>
                    <h1 className={`text-white text-center font-medium py-1 bg-blue-950 w-full rounded-t-md text-sm sm:text-base ${props.src ? 'rounded-r-none' : ''}`}>
                        Enhanced Image
                    </h1>
                    {props.src && (
                        <a
                            href={props.src}
                            download="PixGlow-enhanced-image.png"
                            className='text-white font-medium px-2 bg-rose-900 py-1 rounded-tr-md cursor-pointer w-[50%] text-center text-sm sm:text-base'
                        >
                            Download
                        </a>
                    )}
                </div>
                <div className="flex justify-center items-center h-full w-full rounded-md">
                    {props.loading && (
                        <div className="border-4 rounded-full p-3 my-10 border-t-transparent border-b-transparent animate-spin"></div>
                    )}
                    {!props.loading && props.src && (
                        <div className="flex justify-center items-center h-full w-full rounded-md">
                            <img
                                src={props.src}
                                alt="Enhanced Image"
                                className='h-full w-full rounded-b-md object-contain'
                            />
                        </div>
                    )}
                    {!props.loading && !props.src && (
                        <span className='m-10 text-sm sm:text-base'>Enhanced Image</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnhancedImage;
