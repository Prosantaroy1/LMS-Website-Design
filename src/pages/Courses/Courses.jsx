import { useEffect, useState } from "react";
import CoverBannerPage from "../../components/common/CoverBannerPage";
import CourseSection from "../../components/coursesComponent/CourseSection";

const Courses = () => {

    //state set courses data
    const [datas, setDatas]=useState([]);

    useEffect(()=>{
        fetch('/public/Courses.json')
        .then(res=> res.json())
        .then(data=>{
             setDatas(data)
        })
        .catch((error)=>console.log(error))
    },[])
    //console.log(datas)

    return (
        <div>
            {/* cover banner part */}
            <div className="mb-8">
                <CoverBannerPage
                 img='https://utfs.io/f/oI7Ou0bdQ6rjYDCfTpVgoqDshSiVxC6IWeyk5aTJ1jQGwuRL'
                 titleName='Courses'
                 />
            </div>
            {/* courses content part */}
            <div className="container py-20">
                {/* courses heading title */}
                <div className="pb-6">
                    <h3 className="text-center text-4xl font-Poppins">Our Best Course</h3>
                    <p className="text-center text-lg font-medium font-Poppins py-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Porro vero eos praesentium?
                    </p>
                </div>
                {/* course card */}
                <CourseSection data={datas}/>
            </div>
        </div>
    );
};

export default Courses;