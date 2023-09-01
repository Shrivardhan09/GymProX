import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/share";
import { useForm } from "react-hook-form";
const ContactUs = ({ setSelectedPage }) => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section className="pt-24 pb-32 bg-contact-bg bg-no-repeat md:bg-cover sm:object-contain">
            <motion.div
                className="w-full"
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <div className="basis-3/5 font-montserrat text-3xl font-bold text-white px-9">
                        <span className=" text-yellow-500">JOIN GYMPROX</span> TO GET IN FIT AND HEALTY
                    </div>
                    <p className="m-5 w-3/5 text-lg">
                        GYMPROX Gym is the perfect place to get in shape and improve your health. We offer a variety of state-of-the-art equipment, personal trainers, and group fitness classes to help you reach your fitness goals.
                    </p>
                </motion.div>

                <div >
                    <motion.div>
                        <form
                            action="https://formsubmit.co/727fcb1b06dc58ae05355d0e1a68a6c4"
                            method="post"
                            onSubmit={onSubmit}
                            className="flex justify-start items-center gap-3 flex-col"
                        >
                            <input
                                className="mb-3 w-2/5 rounded-lg bg-black/25 px-5 py-3 placeholder-white border-2 border-primary-300 caret-yellow-500 outline-none text-white"
                                type="text"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                                placeholder="ENTER NAME"
                            />
                            {errors.name && (
                                <p className=" text-yellow-100 font-thin">
                                    {errors.name.type === "required" && "⚠️This field is required."}
                                    {errors.name.type === "maxLength" &&
                                        "Max length is 100 char."}
                                </p>
                            )}
                            <input
                                className="mb-3 w-2/5 rounded-lg bg-black/25 px-5 py-3 placeholder-white border-2 border-primary-300 caret-yellow-500 outline-none text-white"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                })}
                                placeholder="ENTER EMAIL"
                            />
                            {errors.email && (
                                <p className=" text-yellow-100 font-thin">
                                    {errors.email.type === "required" && "⚠️This field is required."}
                                    {errors.email.type === "pattern" &&
                                        "Invaild EmailId"}
                                </p>
                            )}
                            <textarea
                                className="mb-3 w-2/5 rounded-lg bg-black/25 px-5 py-3 placeholder-white border-2 border-primary-300 caret-yellow-500 outline-none text-white"
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className=" text-yellow-100 font-thin">
                                    {errors.message.type === "required" &&
                                        "⚠️This field is required."}
                                    {errors.message.type === "maxLength" &&
                                        "Max length is 2000 char."}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-3 rounded-lg bg-secondary-500 px-20 py-3 transition duration-300 hover:bg-primary-100 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>

    )
}

export default ContactUs;
