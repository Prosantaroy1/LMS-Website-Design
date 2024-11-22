import Button from "../common/Button";
import Sectionheading from "../common/Sectionheading";
import CoursesCard from "../coursesComponent/CoursesCard";

const BestCourse = ({ data }) => {
    return (
        <div className="container pt-16">
            {/* heading */}
            <div className="flex justify-between">
                <div>
                    <Sectionheading
                        headingTitle='Discover'
                        headingsubtitle='Worlds Best Courses'
                        alignment="start"
                    />
                </div>
                {/* see all */}
                <div>
                    <Button btntitle='See all' link='/courses' />
                </div>
            </div>
            {/* content */}
            <div className="pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                    {
                        data.map((item) => <CoursesCard item={item} key={item.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestCourse;