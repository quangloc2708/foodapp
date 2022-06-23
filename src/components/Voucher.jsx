import React from 'react';
import Freeship from '../Images/voucher1.png';
import Payless from '../Images/voucher2.png';
import Menu from '../Images/voucher3.png';
import { motion, Variants } from 'framer-motion';

const stepAnimation = {
    offScreen: { opacity: 0, y: 50 },
    onScreen: { opacity: 1, y: 0 },
};

const Voucher = () => {
    return (
        <div className="w-full my-12">
            <motion.p
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-semibold text-headingColor mb-[6rem] w-full flex items-center justify-center"
            >
                Piping hot deals await you
            </motion.p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-11">
                <motion.div
                    initial={'offScreen'}
                    whileInView={'onScreen'}
                    transition={{ delay: 0, duration: 1 }}
                    variants={stepAnimation}
                    className="flex  items-center justify-center  "
                >
                    <div className="  gap-4 flex flex-col justify-center items-center">
                        <img className="w-[120px] [h-120px] " src={Freeship} alt="" />
                        <p className="text-xl font-semibold">Delivered Right Away</p>
                        <p className=" text-center  font-normal text-gray-600">
                            Feed your cravings with your favourite foods delivered to you, wherever you are and whenever
                            you want.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={'offScreen'}
                    whileInView={'onScreen'}
                    transition={{ delay: 0.5, duration: 1 }}
                    variants={stepAnimation}
                    className="flex  items-center justify-center  "
                >
                    <div className="  gap-4 flex flex-col justify-center items-center">
                        <img className="w-[120px] h-[120px] " src={Payless} alt="" />
                        <p className="text-xl font-semibold">Pay Less for More</p>
                        <p className=" text-center  font-normal text-gray-600">
                            Enjoy attractive promotions for various restaurants and order more at lower prices.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={'offScreen'}
                    whileInView={'onScreen'}
                    transition={{ delay: 1, duration: 1 }}
                    variants={stepAnimation}
                    className="flex  items-center justify-center  "
                >
                    <div className="  gap-4 flex flex-col justify-center items-center">
                        <img className="w-[120px] h-[120px] " src={Menu} alt="" />
                        <p className="text-xl font-semibold">Food for All Cravings</p>
                        <p className=" text-center  font-normal text-gray-600">
                            From local fare to restaurant favourites, our wide selection of foods will definitely
                            satisfy all your cravings.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Voucher;
