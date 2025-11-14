// src/layouts/AppLayout.jsx
import DesktopSideNav from "../components/DesktopSideNav.jsx";
import BottomNav from "../components/BottomNav.jsx";
import {DesktopFooter} from "../components/DesktopFooter.jsx";
import {DesktopTopBar} from "../components/DesktopTopBar.jsx";
import {MobileTopBar} from "../components/MobileTopBar.jsx";

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Desktop: Drawer + Sidebar + Navbar */}
            <div className="hidden lg:block">
                <DesktopSideNav>{children}</DesktopSideNav>
                <DesktopFooter />
            </div>

            {/* Mobile/Tablet: nur Inhalt, ohne Drawer, Platz für Dock unten */}
            <div className="block lg:hidden pb-16">
                <MobileTopBar />
                {children}
            </div>

            {/* Mobile/Tablet: Bottom Navigation (Dock) */}
            <nav className="fixed bottom-0 inset-x-0 lg:hidden">
                <MobileTopBar />
                <BottomNav />
            </nav>
        </div>
    );
}
