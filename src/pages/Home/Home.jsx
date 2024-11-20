import Banner from "../../components/home/Banner";
import Categories from "../../components/home/Categories";
import { bannerData } from "../../data/data";

const Home = () => {
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
            </div>
        </div>
    );
};

export default Home;