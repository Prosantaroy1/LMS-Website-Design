import { NavLink, useLoaderData, useParams } from "react-router-dom";
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
            <div className="container font-Poppins py-16">  
                <div className="flex relative items-start gap-x-6">
                    {/* all course part */}
                    <div className="w-64 space-y-10   p-4 h-screen rounded-2xl text-white bg-slate-200">
                         <h3 className="text-2xl font-semibold text-center border-b-2 border-amber-500 text-black">Course List</h3>
                        {
                            detailsData.map((item, idx) => <div key={idx}>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={`/details/${item.id}`}
                                            className={({ isActive }) =>
                                                `text-base font-medium  ${isActive ? ' text-red-500  font-extrabold' : ' text-black'}`
                                            }
                                        >
                                                {item.name}
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>)
                        }
                    </div>
                    {/* details content */}
                    <div className="flex-1">
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
            </div>
        </div>
    );
};

export default CourseDetilas;