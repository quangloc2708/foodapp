import React from 'react';
import Delivery from '../Images/delivery.png';
import HeroBg from '../Images/heroBg.png';
import { heroData } from '../utils/data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full " id="home">
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <motion.div
                    initial={{ x: '-100vh', opacity: 0 }}
                    animate={{ x: '0', opacity: 1 }}
                    exit={{ x: '0', opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 3, delay: 0.3 }}
                    className="flex items-center gap-2 justify-center bg-red-100 px-4 py-1 rounded-full"
                >
                    <p className="text-base text-red-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ x: '5vh', opacity: 0 }}
                    animate={{ x: '0', opacity: 1 }}
                    exit={{ x: '0', opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor"
                >
                    The Fastest Delivery in
                    <span className="text-red-600 text-[3rem] lg:text-[5rem]">Your City</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="text-base text-textColor text-center md:text-left md:w-[80%]"
                >
                    Eating good food is my favorite thing in the whole world. Nothing is more blissful.
                </motion.p>

                <motion.div
                    initial={{ y: '5vh', opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    exit={{ x: '0', opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    <Link to="/menu">
                        <button className="bg-red-600 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white">
                            Order Now
                        </button>
                    </Link>
                </motion.div>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} className=" ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg" />

                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
                    {heroData &&
                        heroData.map((data) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                transition={{ duration: 0.3, delay: 2 }}
                                key={data.id}
                                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img src={data.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20 " alt="I1" />
                                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                    {data.name}
                                </p>

                                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                    {data.decp}
                                </p>

                                <p className="text-sm font-semibold text-headingColor">
                                    <span className="text-xs text-red-600">$</span> {data.price}
                                </p>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;
