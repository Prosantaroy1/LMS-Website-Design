
// eslint-disable-next-line react/prop-types
const Sectionheading = ({headingTitle, headingsubtitle}) => {
    return (
        <div className="container">
            <div className="flex flex-col text-black font-Poppins items-center justify-center gap-y-5">
                 <h2 className="text-4xl tracking-normal  font-semibold leading-7">{headingTitle}</h2>
                 <h4 className="text-4xl font-semibold leading-7">{headingsubtitle}</h4>
            </div>
        </div>
    );
};

export default Sectionheading;