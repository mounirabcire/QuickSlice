import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { isValidPassword } from "../../utils/helpers";

const initialInputs = {
    fullname: "",
    email: "",
    password: "",
};

function Registerpage() {
    const [inputs, setInputs] = useState(initialInputs);
    const [error, setError] = useState(initialInputs);
    const navigate = useNavigate();
    const { dispatch } = useAuth();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));

        // Clear the error for the specific input field when the user starts typing
        setError((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (inputs.fullname.trim() === "") {
            newErrors.fullname = "This field is required!";
        }
        if (inputs.email.trim() === "") {
            newErrors.email = "This field is required!";
        }
        const passwordError = isValidPassword(inputs.password);
        if (passwordError) {
            newErrors.password = passwordError;
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        dispatch({ type: "auth/signup", payload: inputs });

        setInputs(initialInputs);
        navigate("/menu", { replace: true });
    };

    return (
        <div className="register container">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form__heading-2 text-size-h4 mb-3">
                    Register Now!
                </h2>

                <div className="form__field">
                    <div className="form__input-box">
                        <label htmlFor="fullname">Full Name:</label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Full Name..."
                            className="form__input"
                            value={inputs.fullname}
                            onChange={handleChange}
                        />
                    </div>
                    {error.fullname && (
                        <p className="form__error">{error.fullname}</p>
                    )}
                </div>

                <div className="form__field">
                    <div className="form__input-box">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email..."
                            className="form__input"
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    </div>
                    {error.email && (
                        <p className="form__error">{error.email}</p>
                    )}
                </div>
                <div className="form__field">
                    <div className="form__input-box">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password..."
                            className="form__input"
                            value={inputs.password}
                            onChange={handleChange}
                        />
                    </div>
                    {error.password && (
                        <p className="form__error">{error.password}</p>
                    )}
                </div>

                <div className="form__submit-box">
                    <input
                        type="submit"
                        value='Register'
                        className="form__btn btn btn--primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default Registerpage;
