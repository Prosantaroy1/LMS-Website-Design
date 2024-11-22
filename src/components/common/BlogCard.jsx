import { AiFillLike } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import { IoIosMan } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ blog }) => {
    // destructuring data
    const { name, img, description, date, view, create_name, like } = blog;

    return (
        <div>
            <div className="bg-slate-600 text-white rounded-t-2xl">
                {/* blog images */}
                <img
                    src={img}
                    alt="blog data"
                    className="w-full rounded-t-2xl"
                />
                {/* blog content */}
                <div className="space-y-4 h-60 font-Poppins p-5">
                    <div className="flex  items-center justify-between gap-x-12">
                        <h4 className="text-base flex items-center gap-x-2"><span><MdDateRange /></span>{date}</h4>
                        <h3 className="text-xl flex items-center gap-2 font-semibold">
                            <span><IoIosMan /></span>{create_name}
                        </h3>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">{name}</h3>
                        <div className="flex items-center justify-between gap-x-7">
                            <h4 className="text-base flex items-center gap-x-2">
                                <span className="text-orange-500 text-2xl"><CiViewBoard /></span>{view}
                            </h4>
                            <h3 className="text-xl flex items-center gap-2 font-semibold">
                                <span><AiFillLike className="text-red-400" /></span>{like}
                            </h3>
                        </div>
                        <p className="text-base font-normal tracking-normal">
                            {description}...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;