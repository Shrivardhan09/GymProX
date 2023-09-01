import React, { useEffect, useState } from "react";
import HText from "../../shared/HText";
import ExerciseCards from "./ExerciseCards";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fetchData, exerciseOption } from "./ExerciseAPI";
import { debounce } from "lodash";
import LoaderComponent from "@/shared/Loader";

const ShowExercises = ({ allExercises, bodyParts, setAllExercises, particularExercise }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const maxVisiblePages = 10;
    const [cachedExercises, setCachedExercises] = useState({});
    const [loading, setLoading] = useState(false); // Add a loading state

    const totalPages = Math.ceil(allExercises.length / itemsPerPage);
    const startPage = Math.max(page - Math.floor(maxVisiblePages / 2), 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
        window.scrollTo(0, 1800);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
        window.scrollTo(0, 1800);
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`${i === page ? "active bg-primary-100 rounded-full px-4 py-2" : ""} `}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    const debouncedFetchExercises = debounce(async () => {
        try {
            setLoading(true); // Set true before fetching data

            let exercisesData = [];
            if (cachedExercises[particularExercise]) {
                exercisesData = cachedExercises[particularExercise];
            } else {
                if (particularExercise) {
                    exercisesData = await fetchData(
                        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${particularExercise}`,
                        exerciseOption
                    );
                } else {
                    exercisesData = await fetchData(
                        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/back`,
                        exerciseOption
                    );
                }
                setCachedExercises((prevCache) => ({
                    ...prevCache,
                    [particularExercise]: exercisesData,
                }));
            }
            setAllExercises(exercisesData);
        } catch (error) {
            console.error("Error fetching exercises:", error);
        } finally {
            setLoading(false); // Set to false after fetching data
        }
    }, 1000);

    useEffect(() => {
        debouncedFetchExercises();

        return () => {
            debouncedFetchExercises.cancel();
        };
    }, [bodyParts, particularExercise]);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex justify-start items-center w-full px-10">
                <HText>Show Results</HText>
            </div>
            <div className="mx-5">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <LoaderComponent />
                    </div>
                ) : (
                    <div className="mx-3 flex flex-wrap justify-evenly items-center gap-3">
                        {allExercises
                            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                            .map((exercises, index) => (
                                <ExerciseCards exercises={exercises} key={index} />
                            ))}
                    </div>
                )}
            </div>
            <div className="flex justify-center items-center w-full mt-7 relative">
                {allExercises.length > 0 && (
                    <>
                        <button onClick={handlePreviousPage} disabled={page === 1} className="absolute left-20 ">
                            <ArrowLeft size={34} />
                        </button>
                        <div className="md:flex md:justify-evenly md:gap-5 md:rounded-full sm:hidden xs:hidden">{renderPaginationButtons()}</div>
                        <button onClick={handleNextPage} disabled={page === totalPages} className="absolute right-20">
                            <ArrowRight size={34} />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShowExercises;
