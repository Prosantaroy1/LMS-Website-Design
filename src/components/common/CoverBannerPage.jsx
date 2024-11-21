import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CoverBannerPage = ({img, titleName}) => {
    return (
        <div>
            <div className="relative w-full h-64">
                {/* cover image */}
                <img
                    src={img}
                    alt=""
                    className="absolute top-0 left-0 w-full h-64 bg-no-repeat object-cover"
                />
                {/* overlav bg */}
                <div className="absolute top-0 left-0 inset-0 bg-black opacity-50"></div>
                {/* content */}
                <div className="absolute font-Poppins top-28 text-white space-y-3  left-16 ">
                    <h2 className="text-5xl font-bold">{titleName}</h2>
                    <p className="text-xl font-normal"><Link to='/'>Home</Link><span> &gt;</span> <span>{titleName}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CoverBannerPage;