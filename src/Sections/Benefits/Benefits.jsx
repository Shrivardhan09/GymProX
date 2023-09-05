import { Home, GraduationCap, Users } from "lucide-react"
import { SelectedPage } from "@/shared/share"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import BenefitArray from "./BenefitArray"


const benefitsArr = [
    {
        id: 1,
        icon: <Home />,
        title: "Cutting Edge facilities",
        description: "Embrace the latest in innovation and technology, providing you with unmatched modern amenities and services."
    },
    {
        id: 2,
        icon: <GraduationCap />,
        title: "Rich diversity of classes",
        description: "Experience an abundant selection of classes, catering to various interests and fitness levels, ensuring there's something for everyone."
    },
    {
        id: 3,
        icon: <Users />,
        title: "Accomplished and Top-notch mentors",
        description: "Our trainers are highly skilled and accomplished professionals who provide exceptional guidance and support to help you reach your fitness goals."
    },
]

const Benefits = ({ setSelectedPage }) => {
    return (
        <section className="mx-auto min-h-full py-20 w-5/6" id="benefits">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText >
                        MORE THAN JUST GYM
                    </HText>
                    <p className="text-justify text-sm my-5 ">We offer fitness exercises and personalized diet plans on our website. With expert trainers and engaging classes, we are dedicated to helping you achieve your ultimate fitness goals. Each member receives individualized care and support, making your experience truly exceptional.</p>
                </motion.div>
                {/* cards benefits */}
                <motion.div
                    className="md:flex mt-5 items-center justify-center gap-8 "
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: "some" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.3 }
                        }
                    }}
                >
                    {benefitsArr.map((cards) => {
                        const { icon, title, description, id } = cards
                        return (
                            <BenefitArray
                                key={id}
                                icon={icon}
                                title={title}
                                desc={description}
                                setSelectedPage={setSelectedPage}
                            />
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Benefits
