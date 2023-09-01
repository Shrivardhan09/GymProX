import React from 'react'
import { Triangle } from 'react-loader-spinner'

const LoaderComponent = () => {
    return (
        <div className='flex justify-center items-center'>
            <Triangle
                height="80"
                width="80"
                color="#a695c7"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}

export default LoaderComponent;
