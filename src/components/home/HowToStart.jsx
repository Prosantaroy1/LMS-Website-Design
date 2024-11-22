import Button from "../common/Button";
import Sectionheading from "../common/Sectionheading";


const HowToStart = () => {
    return (
        <div className="w-full bg-slate-100 py-16 mt-28">
            <div className="container">
                <div className="flex items-center justify-between px-60">
                    {/* left part */}
                    <div>
                        <img
                            src="https://utfs.io/f/O5sH8sNCMYV4VnxT8zsbR9ouLxFAn1TDpyNtQ8fzWUG3c2ej"
                            alt=""
                        />
                    </div>
                    {/* right part */}
                    <div className="space-y-5">
                        <div className="bg-slate-400">
                            <Sectionheading
                                headingTitle='Transform Your Life'
                                headingsubtitle='Through Education'
                                alignment="start"
                            />
                        </div>
                        <p className="w-full text-lg font-medium md:w-96">
                            Helping employees gain skills and providing career
                            development often take a back seat to business priorities but workplace.
                        </p>
                        <Button btntitle='Watch How To Start' link='/' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToStart;