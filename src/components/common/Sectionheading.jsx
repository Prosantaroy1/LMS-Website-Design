
const Sectionheading = ({headingTitle, headingsubtitle, alignment = "center" }) => {

    const alignmentClass =
    alignment === "center"
        ? "items-center justify-center"
        : "items-start justify-center";

    return (
        <div className="container">
            <div className={`flex flex-col text-black font-Poppins  ${alignmentClass}  gap-y-5`}>
                 <h2 className="text-4xl tracking-normal  font-semibold leading-7">{headingTitle}</h2>
                 <h4 className="text-4xl font-semibold leading-7">{headingsubtitle}</h4>
            </div>
        </div>
    );
};

export default Sectionheading;