import React, { useState } from 'react';
import Logo from '../Images/chef1.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAdd, MdLogout, MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

function Header() {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };
    const logout = () => {
        setIsMenu(false);
        localStorage.clear();

        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
            {/*Desktop & Taplet */}
            <div className="hidden md:flex w-full h-full justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-10 object-cover" src={Logo} alt="Logo" />
                    <p className="text-yellow-500 text-2xl font-xs">
                        Fudy<span className="text-red-700 font-semibold">FOOD</span>
                    </p>
                </Link>
                <div className=" flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        <Link to="/">
                            <li className="text-base text-textColor hover:text-red-700 duration-100 transition-all ease-in-out cursor-pointer">
                                Home
                            </li>
                        </Link>
                        <Link to="/menu">
                            <li className="text-base text-textColor hover:text-red-700 duration-100 transition-all ease-in-out cursor-pointer">
                                Menu
                            </li>
                        </Link>
                        <li className="text-base text-textColor hover:text-red-700 duration-100 transition-all ease-in-out cursor-pointer">
                            About Us
                        </li>
                        <li className="text-base text-textColor hover:text-red-700 duration-100 transition-all ease-in-out cursor-pointer">
                            Sevices
                        </li>
                    </ul>
                    <div className="relative flex items-center justify-center" onClick={showCart}>
                        <AiOutlineShoppingCart className="text-textColor text-2xl" />
                        {cartItems && cartItems.length > 0 && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                                <p className="text-xs text-white ">{cartItems.length}</p>
                            </div>
                        )}
                    </div>
                    <div onClick={login} className="relative">
                        {user ? (
                            <div className="flex justify-center items-center gap-2">
                                <img
                                    src={user.photoURL}
                                    className="h-10 w-10 min-h-[40px] min-w-[40px] rounded-full"
                                    alt="Avatar"
                                />
                                <p>{user.displayName}</p>
                            </div>
                        ) : (
                            <div className=" flex items-center justify-center  w-20 h-8 rounded-md border-solid border-2 border-red-700  hover:bg-red-700">
                                <p className="flex items-center gap-2 text-base text-red-700 hover:text-white  duration-100 transition-all ease-in-out cursor-pointer">
                                    Login
                                    <MdLogin />
                                </p>
                            </div>
                        )}
                        {isMenu && (
                            <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
                                {user && user.email === 'quangloc2708@gmail.com' && (
                                    <Link to="/create">
                                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                            New Item
                                            <MdAdd />
                                        </p>
                                    </Link>
                                )}

                                <p
                                    onClick={logout}
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                                >
                                    Log out
                                    <MdLogout />
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className=" flex items-center justify-between md:hidden w-full h-full">
                <div className="relative flex items-center justify-center">
                    <AiOutlineShoppingCart className="text-textColor text-2xl" onClick={showCart} />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                        <p className="text-xs text-white ">{cartItems !== null && cartItems.length}</p>
                    </div>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-10 object-cover" src={Logo} alt="Logo" />
                    <p className="text-red-600 text-2xl font-xs">
                        Fudy<span className="text-red-700 font-semibold">FOOD</span>
                    </p>
                </Link>
                <div onClick={login} className="relative">
                    {user ? (
                        <img
                            src={user.photoURL}
                            className="h-10 w-10 min-h-[40px] min-w-[40px] rounded-full"
                            alt="Avatar"
                        />
                    ) : (
                        <div className=" flex items-center justify-center  w-20 h-8 rounded-md border-solid border-2 border-#ccc-500 hover:bg-slate-50">
                            <p className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                                Login
                            </p>
                        </div>
                    )}
                    {isMenu && (
                        <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
                            {user && user.email === 'quangloc2708@gmail.com' && (
                                <Link to="/create">
                                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                                        New Item
                                        <MdAdd />
                                    </p>
                                </Link>
                            )}
                            <ul className="flex flex-col">
                                <Link to="/">
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                                        Home
                                    </li>
                                </Link>
                                <Link to="/menu">
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                                        Menu
                                    </li>
                                </Link>
                                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                                    About Us
                                </li>
                                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                                    Sevices
                                </li>
                            </ul>

                            <p
                                onClick={logout}
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                            >
                                Log out
                                <MdLogout />
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
