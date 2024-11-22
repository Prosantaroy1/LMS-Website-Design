import { useForm } from "react-hook-form";
import CoverBannerPage from "../../components/common/CoverBannerPage";
import { useState } from "react";

const Contact = () => {

    const [collects, setCollects]= useState([]);

    //data form handle
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //data
    const onSubmit = (data) => {    
        const newData=[...collects, data];
        setCollects(newData)

    }
    console.log(collects)

    return (
        <div>
            {/* cover banner */}
            <CoverBannerPage
                img='https://utfs.io/f/oI7Ou0bdQ6rjYDCfTpVgoqDshSiVxC6IWeyk5aTJ1jQGwuRL'
                titleName='Contact'
            />
            <div className="container mt-16">
                {/* contact form */}
                <div className="font-Poppin">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex flex-col gap-y-3">
                            <label className="text-xl font-semibold">Name :</label>
                            <input placeholder="Enter your name?"
                                className="w-1/2 px-2 py-3 border-2 border-black rounded-md"
                                {...register("name",{ required: true })}
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}   
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <label className="text-xl font-semibold">Email :</label>
                            <input placeholder="Enter your email?"
                                className="w-1/2 px-2 py-3 border-2 border-black rounded-md"
                                {...register("email",{ required: true }) }
                            />
                          {errors.email && <span className="text-red-500">This field is required</span>}                          
                        </div>
                        {/* submit btn */}
                        <input type="submit" className="bg-green-500 cursor-pointer px-12 font-medium py-3 text-lg rounded-md text-white" />
                    </form>
                </div>
                {/* data collection show */}
                <div className="font-Poppins mt-9">
                    <h3 className="text-2xl font-medium leading-7">Collection Data User</h3>
                    <div className="pt-5 space-y-5">
                       {collects.map((item,idx)=><div key={idx}>
                                <div className="flex text-black items-center gap-x-8 ">
                                    <p>{idx+1}</p>
                                    <h3>{item.name}</h3>
                                    <p>{item.email}</p>
                                </div>
                       </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;