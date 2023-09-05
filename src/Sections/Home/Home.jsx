import { SelectedPage } from "@/shared/share"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import gymprox from "../../assets/gympro.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import BodyBuilder from "../../assets/fitness-img.jpg"
import SForbes from "../../assets/SForbes.png"
import SFortune from "../../assets/SFortune.png"
import SRedBull from "../../assets/SRedBull.png"
import { motion } from "framer-motion"



const Home = ({ setSelectedPage }) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")

    return (
        <section className=" gap-16 bg-gray-20 py-10 md:h-full md:pb-0" id="home">
            {/* image and main header */}
            <motion.div
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* main div */}
                <div className="z-10 mt-32 md:basis-1/2">
                    {/* header */}
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-gymprox bg-[100px]">
                                <img src={gymprox} alt="GymProXImg" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-justify">
                            Achieve your dream body at Unrivaled Gym. Our unparalleled training, world-class fitness classes, and state-of-the-art studios will help you reach your fitness goals faster than ever. Transform your body and embrace a new level of confidence. Join us now and make your dream a reality!
                        </p>
                    </motion.div>
                    {/* actions */}
                    <motion.div
                        className="mt-8  mb-5 flex items-center gap-8 md:justify-start"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-300 underline hover:text-secondary-400 duration-300"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            Learn More
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* image */}
                <div className="flex justify-center items-center basis-1/2 md:justify-items-end md:ml-40 md:mt-16 md:z-[10]">
                    <img src={BodyBuilder} alt="BodyBuilder" className='w-[250px]' />
                </div>
            </motion.div>
            {/* sponser */}
            {isAboveMediumScreen && (
                <div className="w-full h-auto bg-primary-100 py-5">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img alt="forbes-sponsor" src={SForbes} />
                            <img alt="fortune-sponsor" src={SFortune} />
                            <img alt="redbull-sponsor" src={SRedBull} />
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Home

