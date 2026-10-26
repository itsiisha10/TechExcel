import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const pinPattern = /^[0-9]{6}$/;

function AuthPage({ mode, onSuccess }) {
    const isSignup = mode === "signup";
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", pin: "" });
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: "" }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.currentTarget;
        const nextErrors = {};
        const name = form.name.trim();
        const email = form.email.trim();
        const pin = form.pin.trim();

        if (!name) {
            nextErrors.name = "Please enter your name.";
        } else if (!namePattern.test(name)) {
            nextErrors.name = "Use letters and spaces only for your name.";
        }

        if (!email) {
            nextErrors.email = "Please enter your email address.";
        } else if (!formElement.elements.email.validity.valid) {
            nextErrors.email = "Enter a valid email address, such as name@example.com.";
        }

        if (!pin) {
            nextErrors.pin = "Please enter your PIN.";
        } else if (!pinPattern.test(pin)) {
            nextErrors.pin = "Your PIN must contain exactly six digits.";
        }

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        // Demo only: no account lookup or persistence is performed.
        onSuccess({ name, email, pin });
        navigate("/topics", { replace: true });
    }

    return (
        <main className="auth-page">
            <section className="auth-card" aria-labelledby="auth-title">
                <Link to="/" className="auth-brand">Tech<span>Excel</span></Link>
                <p className="auth-eyebrow">YOUR NEXT STEP IN TECH</p>
                <h1 id="auth-title">{isSignup ? "Create your account" : "Welcome back"}</h1>
                <p className="auth-intro">
                    {isSignup
                        ? "Add your details to begin your TechExcel learning journey."
                        : "Enter your details to continue to the learning paths."}
                </p>

                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="auth-field">
                        <label htmlFor="auth-name">Name</label>
                        <input
                            id="auth-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "auth-name-error" : undefined}
                            required
                        />
                        {errors.name && <p className="field-error" id="auth-name-error" role="alert">{errors.name}</p>}
                    </div>

                    <div className="auth-field">
                        <label htmlFor="auth-email">Email</label>
                        <input
                            id="auth-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "auth-email-error" : undefined}
                            required
                        />
                        {errors.email && <p className="field-error" id="auth-email-error" role="alert">{errors.email}</p>}
                    </div>

                    <div className="auth-field">
                        <label htmlFor="auth-pin">6-digit numeric PIN</label>
                        <input
                            id="auth-pin"
                            name="pin"
                            type="password"
                            inputMode="numeric"
                            minLength={6}
                            maxLength={6}
                            autoComplete="off"
                            value={form.pin}
                            onChange={handleChange}
                            placeholder="Enter 6 digits"
                            aria-invalid={Boolean(errors.pin)}
                            aria-describedby={errors.pin ? "auth-pin-error" : undefined}
                            required
                        />
                        {errors.pin && <p className="field-error" id="auth-pin-error" role="alert">{errors.pin}</p>}
                    </div>

                    <button type="submit" className="button button-primary auth-submit">
                        {isSignup ? "Create account and continue" : "Log in and continue"}
                        <span aria-hidden="true">→</span>
                    </button>
                </form>

                <p className="auth-switch">
                    {isSignup ? "Already have an account?" : "New to TechExcel?"}{" "}
                    <Link to={isSignup ? "/login" : "/signup"}>
                        {isSignup ? "Log in" : "Create an account"}
                    </Link>
                </p>
            </section>
        </main>
    );
}

export default AuthPage;
