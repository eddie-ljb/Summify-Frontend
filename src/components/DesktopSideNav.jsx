// src/components/DesktopSideNav.jsx
import { Link } from "react-router-dom";
import {DesktopTopBar} from "./DesktopTopBar.jsx";

function DesktopSideNav({ children }) {
    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* Inhalt + Navbar */}
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <DesktopTopBar />
                </nav>

                {/* Page content */}
                <div className="p-4">{children}</div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side is-drawer-close:overflow-visible">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    <ul className="menu w-full grow">
                        <li>
                            <Link
                                to="/"
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Homepage"
                            >
                                {/* Home icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="my-1.5 inline-block size-4"
                                >
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                <span className="is-drawer-close:hidden">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/courses"
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Kurse"
                            >
                                {/* Icon wiederverwendet */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="my-1.5 inline-block size-4"
                                >
                                    <path d="M22 10L12 6 2 10l10 4 10-4z"></path>
                                    <path d="M6 12v5a6 6 0 0 0 12 0v-5"></path>
                                    <path d="M12 6v4"></path>
                                    <circle cx="6" cy="17" r="1"></circle>
                                    <path d="M6 17v3"></path>
                                </svg>
                                <span className="is-drawer-close:hidden">Kurse</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/summaries"
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Zusammenfassungen"
                            >
                                {/* Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="my-1.5 inline-block size-4"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <path d="M9 13h3"></path>
                                    <path d="M9 17h6"></path>
                                    <path d="M9 9h1"></path>
                                    <path d="M16.5 12.5l1.5 1.5"></path>
                                    <path d="M15 14l1-3 3-1-3 3-1 1z"></path>
                                </svg>
                                <span className="is-drawer-close:hidden">Zusammenfassungen</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/settings"
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Settings"
                            >
                                {/* Settings icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="my-1.5 inline-block size-4"
                                >
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                                <span className="is-drawer-close:hidden">Einstellungen</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DesktopSideNav;
