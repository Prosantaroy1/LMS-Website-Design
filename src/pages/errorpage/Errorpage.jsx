
import { useRouteError } from "react-router-dom";
import Button from "../../components/common/Button";

const Errorpage = () => {

    const error = useRouteError();

    return (
        <div>
            <div className="flex h-screen flex-col font-Poppins items-center justify-center gap-y-4">
                <h1 className="text-3xl font-semibold">Oops!</h1>
                <p className="text-lg text-red-600">Sorry, an unexpected error has occurred.</p>
                <p className="text-lg">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Button btntitle='Go Back' link='/'/>
            </div>
        </div>
    );
};

export default Errorpage;