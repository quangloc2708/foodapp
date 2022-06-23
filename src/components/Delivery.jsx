import React from 'react';
import { motion } from 'framer-motion';

import delivery from '../Images/delivery.png';
import BigDelivery from '../Images/big-delivery..svg';

const Delivery = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full my-12">
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: '0', opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 3, delay: 0.3 }}
                    className="flex items-center gap-2 justify-center bg-red-100 px-4 py-1 rounded-full"
                >
                    <p className="text-base text-red-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={delivery} className="w-full h-full object-contain" alt="delivery" />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ x: '5vh', opacity: 0 }}
                    animate={{ x: '0', opacity: 1 }}
                    exit={{ x: '0', opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-2xl l font-bold tracking-wide text-headingColor"
                >
                    A Moments Of Delivered
                    <span className="text-red-600 text-3xl"> On Right Time & Place</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-base text-textColor text-center md:text-left md:w-[80%]"
                >
                    FudyFood is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's
                    Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a
                    bustling London inteon.
                </motion.p>

                <motion.div
                    initial={{ y: '5vh', opacity: 0 }}
                    whileInView={{ y: '0', opacity: 1 }}
                    exit={{ x: '0', opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5 }}
                >
                    <button className="bg-red-600 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white">
                        Order Now
                    </button>
                </motion.div>
            </div>
            <div className="py-2 flex-1 flex items-center">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={BigDelivery} className=" ml-auto" alt="" />
                </motion.div>
            </div>
        </section>
    );
};

export default Delivery;
