import { categoryData } from "../../data/data";
import Sectionheading from "../common/Sectionheading";

const Categories = () => {

    return (
        <div className="container ">
            {/* heading title part */}
            <div>
                <Sectionheading
                    headingTitle={categoryData[0].heading[0].title}
                    headingsubtitle={categoryData[0].heading[0].sibtitle}
                />
            </div>
            {/* category part */}
            <div className="grid grid-cols-1 pt-12 md:grid-cols-2 items-center gap-4 lg:grid-cols-3 ">
                {
                    categoryData[1].categories.map((item, idx) => <div key={idx}>
                        <div className="font-Poppins border-2 rounded-md hover:bg-green-400 hover:text-white border-x-yellow-950 border-y-red-200 px-4 py-2 flex items-center justify-center gap-x-6">
                            <img
                                src={item.img}
                                alt="category photo"
                                className="w-12"
                            />
                            <div className="space-y-3">
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                                <h4>{item.description}</h4>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;