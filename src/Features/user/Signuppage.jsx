import { useState } from "react";

const initialInputs = {
    fullname: "",
    email: "",
    password: "",
};

function Signuppage() {
    const [inputs, setInputs] = useState(initialInputs);
    const [error, setError] = useState(initialInputs);

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
        if (inputs.password.trim() === "") {
            newErrors.password = "This field is required!";
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }

        // Perform the signup logic here

        setInputs(initialInputs);
    };

    return (
        <div className="signup">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form__heading-2 text-size-h4">Sign up</h2>

                <div className="form__input-box">
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name..."
                        className="form__input"
                        value={inputs.fullname}
                        onChange={handleChange}
                    />
                    {error.fullname && (
                        <p className="form__error">{error.fullname}</p>
                    )}
                </div>
                <div className="form__input-box">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        className="form__input"
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    {error.email && (
                        <p className="form__error">{error.email}</p>
                    )}
                </div>
                <div className="form__input-box">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password..."
                        className="form__input"
                        value={inputs.password}
                        onChange={handleChange}
                    />
                    {error.password && (
                        <p className="form__error">{error.password}</p>
                    )}
                </div>

                <div className="form__submit-box">
                    <input
                        type="submit"
                        className="form__btn btn btn--primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default Signuppage;
