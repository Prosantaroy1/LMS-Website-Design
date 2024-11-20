import Button from "../common/Button";

// eslint-disable-next-line react/prop-types
const Banner = ({ title, subtitle, dec, buttonrbtn, coverImg }) => {
    return (
        <div>
            <div className="relative">
                {/* Background Image */}
                <div className="hidden relative md:block">
                    <img
                        src={coverImg}
                        alt="banner photo"
                        className="absolute top-0 left-0  w-full h-[550px]"
                    />
                    {/* animation effect  */}
                    <div>
                        <img
                            src="https://utfs.io/f/O5sH8sNCMYV4aSWumvXaBjZ1eFp0IhmcN97xvV4zYXfWtCMi"
                            alt="banner photo"
                            className="absolute top-48 right-1/4 bg-no-repeat "
                        />
                    </div>
                    <div>
                        <img
                            src="https://utfs.io/f/O5sH8sNCMYV4ioV2MIvQ10rtd7x2HzfqoVS3CmgJeZFsv9YM"
                            alt="banner photo"
                            className="absolute top-24  animate-bounce right-1/3 bg-no-repeat "
                        />
                    </div>
                    {/* box card style */}
                    <div className="absolute top-52 right-1/3">
                        <div className="bg-white flex flex-col items-center justify-center px-12 py-3 rounded-lg  gap-y-3 shadow-xl ">
                            <img
                                src="https://utfs.io/f/O5sH8sNCMYV4D70Zg8qkPfAHT5we2bVWgz09xNonRd4vLaUJ"
                                alt=""
                                className="w-24"
                            />
                            <h3 className="text-black text-center font-Poppins text-lg">
                                Top Rated<br /> Instructors
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Content Section part */}
                <div className="absolute w-full md:w-1/2  top-0 left-0 md:left-24  flex flex-col items-start justify-center h-[500px] px-2 md:px-12 font-Poppins text-white gap-y-4">
                    <h5 className="text-[#546feb] text-lg font-semibold">{title}</h5>
                    <h3 className="text-5xl leading-tight text-balance tracking-tighter text-black font-semibold">
                        {subtitle}
                    </h3>
                    <p className="text-base text-black font-normal">
                        {dec}
                    </p>
                    <Button btntitle={buttonrbtn} link='/course' />
                </div>
            </div>
        </div>

    );
};

export default Banner;