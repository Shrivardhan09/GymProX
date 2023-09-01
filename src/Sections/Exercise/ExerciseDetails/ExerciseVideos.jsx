import React from 'react'

const ExerciseVideos = ({ yTVideos, name }) => {
    // console.log(yTVideos, 'vid')
    return (
        <div className='mx-auto sm:mt-4 md:mt-8 xs:mt-3 '>
            <div className='sm:text-2xl xs:text-lg font-bold md:text-3xl'>
                Watch <span className='capitalize text-gray-500 hover:text-primary-300 duration-300'>{name}</span> exercise videos
            </div>
            <div className='mt-5 md:flex justify-center items-center gap-4 sm:mt-5'>
                {yTVideos?.slice(0, 3).map((items, index) => (
                    <div className='hover:scale-105 hover:delay-200 hover:duration-200 w-[400px]'>
                        <a
                            href={`https://www.youtube.com/watch?v=${items.video.videoId}`}
                            key={index}
                            target="_blank"
                        >
                            <img className="rounded-md " src={items.video.thumbnails[0].url} alt={items.video.title} />
                        </a>
                        <div className='m-1 mb-2 text-gray-500 hover:text-primary-500 duration-300'>
                            <div className='truncate text-lg font-medium max-w-[350px]' >{items.video.title}</div>
                            <p className='text-black'>{items.video.channelName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExerciseVideos
