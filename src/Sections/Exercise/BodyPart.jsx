import { Dumbbell } from "lucide-react";

const BodyPart = ({ exercises, setParticularExercise }) => {
    // console.log({ exercises })

    const handleClick = () => {
        setParticularExercise(exercises);
    }

    return (
        <div
            className="flex justify-center items-center gap-5 flex-col py-5"
            onClick={handleClick}
        >
            <Dumbbell size={40} className="rounded-md border-2 border-gray-100 bg-primary-100 m-4 w-12 h-12" />
            <div
                className="text-2xl font-bold font-montserrat capitalize"
            >
                <abbr title={`Click here for ${exercises}`} className="no-underline capitalize">{exercises}</abbr>
            </div>
        </ div>
    )
}

export default BodyPart;
