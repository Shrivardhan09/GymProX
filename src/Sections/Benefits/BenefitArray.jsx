import { SelectedPage } from "@/shared/share"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }

}

const BenefitArray = ({ icon, title, desc, setSelectedPage }) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 text-center px-5 py-16 md:w-[400px] md:h-[400px]">
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4 ">
                    {icon}
                </div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{desc}</p>
            <AnchorLink
                className="text-sm font-bold text-primary-300 underline hover:text-secondary-400 duration-300"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                Learn More
            </AnchorLink>
        </motion.div>
    )
}

export default BenefitArray
