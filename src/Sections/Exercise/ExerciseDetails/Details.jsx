import Target from '@/assets/target-icon.png'
import Equipment from '@/assets/equipment-icon.png'
import BodyPart from '@/assets/body-part-icon.png'
import Meditation from '@/assets/meditation-icon.png'

const Details = ({ exerciseStore }) => {
    const { bodyPart, gifUrl, equipment, target, name } = exerciseStore

    const ImagesForDetails = [
        {
            icon: Meditation,
            name: bodyPart,
        },
        {
            icon: Target,
            name: target,
        },
        {
            icon: Equipment,
            name: equipment,
        },
    ]

    return (
        <div className='flex flex-col xs:flex xs:flex-col sm:flex sm:flex-col md:flex-row justify-center items-center p-5 gap-10' >
            <div className='xs:mt-5 rounded-md border-2 border-gray-100'>
                <img srcSet={gifUrl} alt={name} loading='lazy' className="mix-blend-darken w-[400px]" />
            </div>
            <div className='xs:mt-5 xs:w-full sm:mt-5 sm:w-full md:ml-10 md:flex-1'>
                <div className='md:w-4/5'>
                    <h1 className='capitalize text-3xl font-bold font-montserrat '>{bodyPart}</h1>
                    <div className='flex flex-col gap-3 text-lg'>
                        <h3 className='capitalize'><span className="text-base font-semibold">Exercise Name:</span> {name}</h3>
                        <div>
                            <p className='text-justify text-base'>
                                Exercises keep you strong.{' '}
                                <span className='capitalize'>{name}</span> is one
                                of the best exercises to target your {target}. It will help you improve your{' '}mood and gain energy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-4 xs:mt-0 xs:flex xs:flex-col sm:flex sm:flex-col md:flex md:flex-col'>
                    {ImagesForDetails.map((icons, i) => (
                        <div key={i} className='mb-2 flex gap-3 items-center capitalize xs:mt-2 sm:mt-2'>
                            <div className='flex items-center justify-center w-[70px] h-[70px] bg-primary-100 rounded-full border border-gray-100'>
                                <img src={icons.icon} alt={bodyPart} className="w-9" />
                            </div>
                            <p className="text-lg">{icons.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Details;
