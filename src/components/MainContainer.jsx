import React, { useEffect, useState } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import CartContainer from './CartContainer';
import Voucher from './Voucher';
import StepWorks from './StepWorks';
import Delivery from './Delivery';
import SlideMenu from './SlideMenu';

function MainContainer() {
    const [{ foodItems, cartShow }, dispatch] = useStateValue();

    return (
        <div className="w-full  h-auto flex flex-col items-center justify-center ">
            <HomeContainer />

            <section className="w-full my-6">
                <div className="w-full flex items-center justify-between">
                    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-40 before:h-1 before:-bottom-1 before:left-0 before:bg-red-500 transition-all ease-in-out du">
                        Popular Picks
                    </p>
                </div>
                <SlideMenu data={foodItems?.filter((n) => n.category === 'chicken')} />
                {/* <RowContainer data={foodItems?.filter((n) => n.category === 'fruits')} /> */}
            </section>

            {cartShow && <CartContainer />}

            <StepWorks />
            <Delivery />
            <Voucher />
        </div>
    );
}

export default MainContainer;
