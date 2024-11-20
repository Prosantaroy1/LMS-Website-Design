import { SlArrowDown } from "react-icons/sl";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Navber = () => {

    return (
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
                            <li className="hover:bg-lime-400 hover:text-black px-4 py-2 rounded-lg">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="relative group">
                                <span className="flex group items-center gap-x-1">Course<span><SlArrowDown className="text-xs" /></span></span>
                                    <ul className="space-y-3 z-50 border-t-4 shadow-xl border-red-500 transition-all delay-200  absolute group-hover:block hidden  rounded-md w-64 top-12 -left-10 px-5 py-4 bg-black text-white">
                                        <li>Web Development</li>
                                        <li>Grapice Design</li>
                                        <li>Profession Office application</li>
                                    </ul>
                            </li>
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
    );
};

export default Navber;