import { useEffect, useState } from "react"
import Details from "./Details"
import ExerciseVideos from "./ExerciseVideos"
import { useParams } from "react-router-dom"
import { exerciseOption, fetchData, youTubeOptions } from "../ExerciseAPI"
import HText from "../../../shared/HText"

const ExerciseDetails = () => {
    const [exerciseStore, setExerciseStore] = useState({})
    const [yTVideos, setYTVideos] = useState([])

    // console.log(yTVideos, 'videos')
    const { id } = useParams()

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseUrl = 'https://exercisedb.p.rapidapi.com'
            const youTubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'
            const exerciseFetch = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOption)
            setExerciseStore(exerciseFetch)

            const youTubeFetch = await fetchData(`${youTubeUrl}/search?query=${exerciseFetch.name} exercise`, youTubeOptions)
            setYTVideos(youTubeFetch.contents)
        }
        fetchExerciseData()
    }, [id])

    return (
        <div className="app bg-gray-20 ">
            <div className="p-7">
                <div className="bg-primary-100 p-4">
                    <HText>Exercise Details: <span className="capitalize text-gray-500">{exerciseStore.name}</span> </HText>
                </div>
                <Details exerciseStore={exerciseStore} />
                <ExerciseVideos yTVideos={yTVideos} name={exerciseStore.name} />
            </div>

        </div>
    )
}

export default ExerciseDetails
