import { Link } from "react-router-dom"

const ExerciseCards = ({ exercises }) => {
    return (
        <div className="flex flex-wrap justify-center items-center w-[320px] h-[400px]  px-4 md:gap-3 sm:gap-2 mt-5 rounded-md border-2 border-gray-100 text-center capitalize">
            {exercises && <Link to={`/exercises/${exercises.id}`}>
                <img srcSet={exercises.gifUrl} alt={exercises.name} className="mix-blend-darken" loading="lazy" />
                <div className="flex gap-1 justify-center items-center">
                    <button className="rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-300 hover:text-white transition duration-300 truncate">{exercises.bodyPart}</button>
                    <button className="rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-300 hover:text-white transition duration-300 truncate">{exercises.target}</button>
                </div>
                <div className="mt-2">
                    <p>{exercises.name}</p>
                </div>
            </Link>}
        </div>
    )
}

export default ExerciseCards
