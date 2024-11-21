import Sectionheading from "../common/Sectionheading";
import CoursesCard from "../coursesComponent/CoursesCard";

const BestCourse = ({data}) => {
    return (
        <div className="container pt-16">
            {/* heading */}
            <div>
                <Sectionheading
                 headingTitle='Discover'
                 headingsubtitle='Worlds Best Courses'
                  alignment="start"
                />
            </div>
            {/* content */}
            <div className="pt-12">
                <div className="grid grid-cols-3 gap-5 items-center">
                    {
                        data.map((item)=><CoursesCard item={item} key={item.id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestCourse;