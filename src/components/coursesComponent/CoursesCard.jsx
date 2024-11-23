import { PiStarThin } from "react-icons/pi";
import Button from "../common/Button";

const CoursesCard = ({ item }) => {
    const { id,name, img, price, rating, category } = item;
    return (
        <div>
            <div className="bg-slate-200 rounded-2xl">
                {/* card Image */}
                <img src={img}
                    alt=""
                    className="rounded-t-2xl"
                />
                {/* Cardcontent*/}
                <div className="p-4 font-Poppins space-y-3">
                    <div className="flex items-center justify-between">
                        <p className="bg-green-300 text-black text-base px-3 py-2 rounded-full">{category}</p>
                        <p className="font-medium flex items-center gap-x-2 text-lg">
                            <span className="text-yellow-400 text-lg"><PiStarThin /></span>{rating}(29)
                        </p>
                    </div>
                    {/* name */}
                    <h3 className="text-xl font-medium">{name}</h3>
                    {/* price */}
                    <p className="text-indigo-700 text-lg font-semibold">
                        ${price} <span className="line-through pl-2 text-black">{price + 20}</span>
                    </p>
                    {/* btn */}
                    <div className="flex items-center justify-between">
                        <Button btntitle='Purches Course' link='https://invoice.sslcommerz.com/invoice-form?refer=672C9444ABDB0' />
                        <Button btntitle='View Details' link={`/details/${id}`} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoursesCard;