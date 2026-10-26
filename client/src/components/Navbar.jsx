import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
    const [profileOpen, setProfileOpen] = useState(false);
    const [pinVisible, setPinVisible] = useState(false);

    function toggleProfile() {
        if (!profileOpen) setPinVisible(false);
        setProfileOpen((open) => !open);
    }

    function handleLogout() {
        setProfileOpen(false);
        onLogout();
    }

    return (
        <header className="navbar">
            <Link to={user ? "/topics" : "/"} className="logo" aria-label="TechExcel home">
                Tech<span>Excel</span>
            </Link>
            {user && (
                <nav aria-label="Main navigation" className="navbar-links">
                    <Link to="/topics">Learning paths</Link>
                    <div className="profile-menu">
                        <button
                            type="button"
                            className="profile-button"
                            aria-label="Open user profile"
                            aria-expanded={profileOpen}
                            onClick={toggleProfile}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
                            </svg>
                        </button>
                        {profileOpen && (
                            <section className="profile-popover" aria-label="Your profile details">
                                <h2>Your profile</h2>
                                <dl>
                                    <div><dt>Name</dt><dd>{user.name}</dd></div>
                                    <div><dt>Email</dt><dd>{user.email}</dd></div>
                                    <div>
                                        <dt>PIN</dt>
                                        <dd className="profile-pin-value">
                                            <span>{pinVisible ? user.pin : "••••••"}</span>
                                            <button
                                                type="button"
                                                className="pin-visibility-toggle"
                                                aria-label={pinVisible ? "Hide PIN" : "Show PIN"}
                                                aria-pressed={pinVisible}
                                                title={pinVisible ? "Hide PIN" : "Show PIN"}
                                                onClick={() => setPinVisible((visible) => !visible)}
                                            >
                                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                                    {pinVisible ? (
                                                        <>
                                                            <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                                                            <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15.7 15.7 0 0 1-3.1 3.8M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.1 0 2.1-.2 3-.5" />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                                                            <circle cx="12" cy="12" r="3" />
                                                        </>
                                                    )}
                                                </svg>
                                            </button>
                                        </dd>
                                    </div>
                                </dl>
                                <button type="button" className="profile-logout" onClick={handleLogout}>
                                    Log out
                                </button>
                            </section>
                        )}
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
