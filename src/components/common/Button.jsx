import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ btntitle, link }) => {
    return (
        <div>
            <Link to={link}>
                <button className="bg-[#2944db] font-Poppins hover:bg-amber-400 text-lg px-7 font-semibold py-3 rounded-md text-white hover:text-black">
                    {btntitle}
                </button>
            </Link>
        </div>
    );
};

export default Button;