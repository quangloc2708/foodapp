import React from 'react';
import { motion, Variants } from 'framer-motion';

import Step1 from '../Images/step1.jpg';
import Step2 from '../Images/step2.jpg';
import Step3 from '../Images/step3.jpg';
import Step4 from '../Images/step4.jpg';
import Arrow1 from '../Images/arrow1.png';
import Arrow2 from '../Images/arrow2.png';
import Arrow4 from '../Images/arrow4.png';

const stepAnimation = {
    offScreen: { opacity: 0, y: 50 },
    onScreen: { opacity: 1, y: 0 },
};

const StepWorks = () => {
    return (
        <div className="w-full my-12 ">
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-semibold text-headingColor mb-[6rem] w-full flex items-center justify-center"
            >
                Order on FudyFood
            </motion.p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-11">
                <motion.div
                    initial={'offScreen'}
                    whileInView={'onScreen'}
                    transition={{ delay: 0, duration: 1 }}
                    variants={stepAnimation}
                    className="flex justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center gap-5 relative hover:text-red-600"
                    >
                        <img className="rounded-full " src={Step1} alt="" />
                        <div className="absolute -top-3 right-2 w-[4rem] h-[4rem] rounded-full border border-white  bg-red-500 flex items-center justify-center">
                            <p className="text-white">STEP 1</p>
                        </div>
                        <p className="font-semibold">Choose Your Favorite</p>
                    </motion.div>
                    <img className="rotate-90 md:rotate-0 hidden md:block" src={Arrow1} alt="" />
                </motion.div>
                <motion.div
                    initial={'offScreen'}
                    whileInView={'onScreen'}
                    transition={{ delay: 0.5, duration: 1 }}
                    variants={stepAnimation}
                    className="flex justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center gap-5 relative hover:text-red-600"
                    >
                        <img className="rounded-full " src={Step2} alt="" />
                        <div className="absolute -top-3 right-2 w-[4rem] h-[4rem] rounded-full border border-white  bg-red-500 flex items-center justify-center">
                            <p className="text-white">STEP 2</p>
                        </div>
                        <p className="font-semibold">We Deliver Your Meals</p>
                    </motion.div>
                    <img className="rotate-90 md:rotate-0 hidden md:block" src={Arrow2} alt="" />
                </motion.div>
                <motion.div
                    initial={'offScreen'}
                    whileInView={'onScreen'}
                    transition={{ delay: 0.75, duration: 1 }}
                    variants={stepAnimation}
                    className="flex justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center gap-5 relative hover:text-red-600"
                    >
                        <img className="rounded-full " src={Step3} alt="" />
                        <div className="absolute -top-3 right-2 w-[4rem] h-[4rem] rounded-full border border-white  bg-red-500 flex items-center justify-center">
                            <p className="text-white">STEP 3</p>
                        </div>
                        <p className="font-semibold">Cash on Delivery</p>
                    </motion.div>
                    <img className=" -rotate-90 md:rotate-180 hidden md:block" src={Arrow4} alt="" />
                </motion.div>
                <motion.div
                    initial={'offScreen'}
                    whileInView={'onScreen'}
                    transition={{ delay: 1, duration: 1 }}
                    variants={stepAnimation}
                    className="flex justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center gap-5 relative hover:text-red-600"
                    >
                        <img className="rounded-full " src={Step4} alt="" />
                        <div className="absolute -top-3 right-2 w-[4rem] h-[4rem] rounded-full border border-white  bg-red-500 flex items-center justify-center">
                            <p className="text-white">STEP 4</p>
                        </div>
                        <p className="font-semibold">Eat And Enjoy</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default StepWorks;
