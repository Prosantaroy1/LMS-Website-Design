import { useEffect, useState } from "react";
import Banner from "../../components/home/Banner";
import BestCourse from "../../components/home/BestCourse";
import Categories from "../../components/home/Categories";
import { bannerData } from "../../data/data";
import HowToStart from "../../components/home/HowToStart";
import StudentFeedback from "../../components/home/StudentFeedback";

const Home = () => {

    const [datas, setDatas]=useState([]);

    useEffect(()=>{
        fetch('/public/Courses.json')
        .then(res=> res.json())
        .then(data=>{
             setDatas(data)
        })
        .catch((error)=>console.log(error))
    },[])

    return (
        <div>
            {/* banner part add*/}
            <div className="h-screen">
                <Banner
                    title={bannerData.title}
                    subtitle={bannerData.subtitle}
                    buttonrbtn={bannerData.buttonName}
                    dec={bannerData.description}
                    coverImg={bannerData.coverImg}
                />
            </div>
            {/* category part add*/}
            <div>
                <Categories />
                <BestCourse data={datas.slice(0, 3)}/>
                <HowToStart/>
                {/* feedback */}
                <StudentFeedback/>
            </div>
        </div>
    );
};

export default Home;