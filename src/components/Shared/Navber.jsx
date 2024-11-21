import { SlArrowDown } from "react-icons/sl";
import Button from "../common/Button";
import { Link, NavLink } from "react-router-dom";


const Navber = () => {

    return (
        <>
            <div className="bg-slate-800 sticky top-0 left-0 z-50 text-white">
                <div className="container py-4 font-Poppins">
                    <div className="flex items-center justify-between">
                        {/* logo part*/}
                        <div>
                            <h3 className="text-4xl font-extrabold">
                                <span className="text-red-500">RMC</span><span className="text-yellow-400">TC</span>
                            </h3>
                        </div>
                        {/* menu part*/}
                        <div className="hidden md:block">
                            <ul className="flex items-center text-lg justify-center gap-x-5">
                                {/* menu */}
                                <li className="hover:bg-lime-400 hover:text-black px-4 py-2 rounded-lg">
                                    <Link to='/'>Home</Link>
                                </li>
                                {/* dropdown menu */}
                                <li className="relative group">
                                    <span className="flex  items-center gap-x-1">Course<span><SlArrowDown className="text-xs" /></span></span>
                                    <div className="absolute top-14 -left-12 rounded-xl  z-50 bg-gray-100  px-4  text-gray-800 shadow-xl transition-all duration-500 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96 w-72">
                                        <ul className="space-y-3 p-6">
                                            <li className="hover:bg-slate-500 hover:text-white p-2">
                                                <NavLink to='/details/4'>Web Development</NavLink>
                                            </li>
                                            <li className="hover:bg-slate-500 hover:text-white p-2">
                                                <NavLink to='/details/1'>Grapice Design</NavLink>
                                            </li>
                                            <li className="hover:bg-slate-500 hover:text-white p-2">
                                               <NavLink to='/details/3'> Profession Office application</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                {/* menu */}
                                <li className="hover:bg-lime-400 hover:text-black px-4 py-2 rounded-lg">
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li className="hover:bg-lime-400 hover:text-black px-4 py-2 rounded-lg">
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        {/* login part */}
                        <div>
                            <Button btntitle='Login' link='/login' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navber;