import React from 'react';
import { AiOutlinePhone, AiFillMail } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full py-10 bg-black">
            <div className="w-full mt-12 px-4 md:px-16 md:flex-row flex items-center justify-center flex-col gap-3">
                <div className="w-full flex items-center justify-center gap-3">
                    <div className="w-full ">
                        <div className="w-full flex items-center justify-between">
                            <p className="font-bold text-white">Moday</p>
                            <p className="font-semibold text-yellow-400">8:00 - 20:00</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="font-bold text-white">Tuesday</p>
                            <p className="font-semibold text-yellow-400">8:00 - 20:00</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="font-bold text-white">Wednesday</p>
                            <p className="font-semibold text-yellow-400">8:00 - 20:00</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="font-bold text-white">Thursday</p>
                            <p className="font-semibold text-yellow-400">8:00 - 20:00</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="font-bold text-white">Friday</p>
                            <p className="font-semibold text-yellow-400">8:00 - 20:00</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="font-bold text-white">Saturday</p>
                            <p className="font-semibold text-yellow-400">8:00 - 22:00</p>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="font-bold text-white">Sunday</p>
                            <p className="font-semibold text-yellow-400">8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className="flex items-center justify-center font-semibold text-2xl text-white mb-6">
                            Contact
                        </h3>
                        <div className="flex items-center justify-center">
                            <AiOutlinePhone className="text-yellow-400" />
                            <p className="text-white">0123456789</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <AiFillMail className="text-yellow-400" />
                            <p className="text-white">fudyfood@gmail.com</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            <p className="text-white">54 Nguyễn Lương Bằng</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto flex items-center justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8373422503028!2d108.14770341527!3d16.073928343580572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1655745901191!5m2!1svi!2s"
                        style={{ border: 0, width: '80%', height: '250px' }}
                        allowFullScreen={true}
                        loading="lazy"
                        scrolling="auto"
                        title="map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Footer;
