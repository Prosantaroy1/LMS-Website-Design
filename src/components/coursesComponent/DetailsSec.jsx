
const DetailsSec = ({ data }) => {

    const { name, description, requirements, whatYouWillLearn } = data;

    return (
        <div className="rounded-md px-20 py-8">
            <div className="font-Poppins space-y-5">
                {/* course name */}
                <h3 className="text-4xl font-semibold">{name}</h3>
                {/* description */}
                <div className="space-y-3">
                    <h5 className="text-xl font-semibold">Description</h5>
                    <p className="text-sm  leading-7 font-medium">
                        {description}
                    </p>
                </div>
                {/* What you'll learn */}
                <div className="bg-slate-100 px-7 py-5 rounded-2xl">
                    <h3 className="text-xl">What you&apos;ll learn</h3>
                    <div className="pt-2">
                        {
                            whatYouWillLearn.map((item, idx) => <div className="px-6" key={idx}>
                                <ul className="list-disc">
                                    <li className="text-sm leading-7 font-normal">{item}</li>
                                </ul>
                            </div>)
                        }
                    </div>
                </div>
                {/* Requirements */}
                <div className="pt-6">
                    <h3 className="text-xl">Requirements</h3>
                    <div className="pt-2">
                        {
                            requirements.map((item, idx) => <div className="px-6" key={idx}>
                                <ul className="list-disc">
                                    <li className="text-sm leading-7 font-normal">{item}</li>
                                </ul>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsSec;