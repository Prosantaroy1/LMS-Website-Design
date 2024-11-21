import { useLoaderData, useParams } from "react-router-dom";
import CoverBannerPage from "../../components/common/CoverBannerPage";
import DetailsSec from "../../components/coursesComponent/DetailsSec";

const CourseDetilas = () => {
    //single data id
    const { id } = useParams();
    // all data
    const detailsData = useLoaderData();
    //single data details
    const items = detailsData.filter((item) => item.id == id);


    return (
        <div className="bg-slate-50">
            {/* details cover section */}
            <CoverBannerPage
                img='https://utfs.io/f/oI7Ou0bdQ6rjYDCfTpVgoqDshSiVxC6IWeyk5aTJ1jQGwuRL'
                titleName='Courses Details'
            />
            {/* details content */}
            <div className="container py-16">
                <div className="grid grid-cols-4 gap-x-10 items-start">
                    {/* details left part */}
                    <div className="col-span-3">
                        {
                            items.map((data) => <DetailsSec key={data.id} data={data} />)
                        }
                    </div>
                    {/* details right part */}
                    <div>
                        <h3>Details Card</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetilas;