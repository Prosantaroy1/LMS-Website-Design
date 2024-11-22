import Marquee from "react-fast-marquee";
import { StuFeedback } from "../../data/data";
import Sectionheading from "../common/Sectionheading";

const StudentFeedback = () => {
    return (
        <div className="container py-12">
            <div className="py-12">
                <Sectionheading
                 headingTitle='What Students'
                 headingsubtitle='Think and Say About Eduman'
                />
            </div>
            {/* feedback card */}
            <Marquee>
                <div className="flex pl-5 font-Poppins items-center gap-4">
                    {
                        StuFeedback.map((item) => <div key={item.id}>

                            <div className="bg-slate-200 w-96 h-52 rounded-lg space-y-5 py-6 px-4">
                                <div className="flex items-center justify-start gap-x-4">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-12" />
                                    <div>
                                        <h3 className="text-xl ">{item.name}</h3>
                                        <p>Student</p>
                                    </div>
                                </div>
                                {/* description */}
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default StudentFeedback;