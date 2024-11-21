import Loading from "../common/loading";
import CoursesCard from "./CoursesCard";

// eslint-disable-next-line react/prop-types
const CourseSection = ({data}) => {

    return (
        <div>
            {
                data.length > 0?
                 <div className="grid grid-cols-3 items-center gap-6">
                    {
                        data.map((item,idx)=><CoursesCard key={idx} item={item}/>)
                    }
                 </div>
                : <Loading/>
            }
        </div>
    );
};

export default CourseSection;