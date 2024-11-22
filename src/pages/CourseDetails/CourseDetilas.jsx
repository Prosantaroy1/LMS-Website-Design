import { useLoaderData, useParams } from "react-router-dom";
import CoverBannerPage from "../../components/common/CoverBannerPage";
import DetailsSec from "../../components/coursesComponent/DetailsSec";
import Button from "../../components/common/Button";

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
                <div className="grid grid-cols-4 gap-x-10 pr-10 items-start">
                    {/* details left part */}
                    <div className="col-span-3">
                        {
                            items.map((data) => <DetailsSec key={data.id} data={data} />)
                        }
                    </div>
                    {/* details right part */}
                    <div>
                        {
                            items.map((item) => <div key={item.id}>
                                <div className="bg-slate-30">
                                    <img src={item.img} alt="" className="rounded-t-2xl" />
                                    <div className="pt-4 rounded-b-md bg-zinc-200 p-3 space-y-3">
                                        <h4 className="text-lg font-semibold">{item.name}</h4>
                                        <p className="text-xl  font-semibold">${item.price}</p>
                                        <div>
                                            <Button btntitle='Pay Now' link='https://bkash.dhakarkmm.org/' />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetilas;