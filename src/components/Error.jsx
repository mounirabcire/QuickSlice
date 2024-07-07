import { Link, useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="err-message__container">
            <div className="message message__error">
                <span>
                    <Link className="btn btn--link mb-3" to={"/"}>
                        Back to Home
                    </Link>
                </span>
                <br />
                {error.statusText === "Not Found"
                    ? "Page Not Found! 404 "
                    : "Something went Wrong!"}
            </div>
        </div>
    );
}

export default Error;
