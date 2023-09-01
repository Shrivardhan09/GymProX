import { useEffect, useState } from "react";
import { fetchData, exerciseOption } from "./ExerciseAPI";
import { SelectedPage } from "@/shared/share"
import { motion } from "framer-motion";
import BodyPartExercise from "./BodyPartExercise";
import ShowExercises from "./ShowExercises";
import { debounce } from "lodash";
import LoaderComponent from "@/shared/Loader";

const ExercisesGYM = ({ setSelectedPage }) => {
    const [search, setSearch] = useState('')
    const [store, setStore] = useState([])
    const [bodyParts, setBodyParts] = useState([])
    const [particularExercise, setParticularExercise] = useState('')
    const [cachedExercises, setCachedExercises] = useState({}) // Cache the searched data
    const [loading, setLoading] = useState(true)
    // //console.log(particularExercise)
    //console.log(bodyParts)



    useEffect(() => {
        const fetchExercises = async () => {
            const exerciseCategory = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption)
            // //console.log({ exerciseCategory })
            setBodyParts([...exerciseCategory])
            setLoading(false)
        }
        fetchExercises()
    }, [])
    // //console.log(bodyParts)
    const handleSearch = debounce(async () => {
        if (search) {
            try {
                let exerciseData = [];
                if (cachedExercises[search]) {
                    exerciseData = cachedExercises[search];
                } else {
                    exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
                    setCachedExercises(prevCache => ({
                        ...prevCache,
                        [search]: exerciseData,
                    }));
                }

                const searchExercises = exerciseData.filter((item) => (
                    item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search)
                ));
                setSearch('');
                setStore(searchExercises);
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        }
    }, 500);

    // //console.log(store)

    return (
        <motion.div
            className="flex justify-center items-center flex-col md:my-3 min-h-full"
            onViewportEnter={() => setSelectedPage(SelectedPage.Exercises)}

        >
            <motion.div
                className="font-montserrat font-medium md:text-5xl text-3xl md:w-2/4 text-center"
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                Awesome Exercises You Should Know
            </motion.div>
            <div className="flex gap-3 items-center justify-center my-8 w-4/6"  >
                <input
                    className="w-4/6 md:px-10 md:py-2 px-5 py-2 outline-none rounded-md font-dmsans bg-gray-20 md:border-1 border-primary-100 border-2"
                    placeholder="Search Exercises"
                    type="text"
                    value={search}
                    autoFocus
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase())
                        handleSearch()
                    }}
                />
                <button
                    onClick={handleSearch}
                    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-300 hover:text-white transition duration-300"
                >
                    Search
                </button>
                <div />
            </div>
            <div className="my-7 w-full mx-auto md:flex sm-flex-col gap-3 items-center justify-center">
                <div className="md:text-2xl text-xl font-montserrat font-bold text-center">
                    Exercises You Can Search For....
                </div>
                <BodyPartExercise
                    list={bodyParts} setBodyParts={setBodyParts} bodyParts={bodyParts} setParticularExercise={setParticularExercise}
                />
            </div>
            <div className="my-7 w-full md:flex sm-flex-col gap-3">
                {loading ? < LoaderComponent /> : <ShowExercises allExercises={store} bodyParts={bodyParts} setAllExercises={setStore} particularExercise={particularExercise} loading={loading} />}
            </div>
        </motion.div >
    )
}

export default ExercisesGYM;

