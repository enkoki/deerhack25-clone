import Deerhack from "../../assets/icons/Deerhack";
import Register from "../Buttons/Register";
import hamburger from "../../assets/icons/menu.svg";

function Navbar() {
    return (
        <header className="fixed top-2 w-screen bg-[#15122B]/50 backdrop-blur-sm shadow-lg z-50 rounded-2xl xl:min-h-[85px]">
            <nav className="flex items-center justify-between xl:justify-between py-4 px-16">

                <a href="index.html" className="shrink-0 w-10 h-10 lg:w-[50px] lg:h-[50px]"><Deerhack /></a>
                <div className="hidden xl:flex xl:w-[400px]" />
                <div className="nav-items hidden xl:flex items-center gap-6 lg:gap-10 text-[15px] shrink relative left-10 2xl:left-40"> {/*sm md lg xl 2xl*/}
                    <a className="hover:text-accent transition">Organizers</a>
                    <a className="hover:text-accent transition">Resources</a>
                </div>

                <div className="shrink-0 hidden xl:block">
                    <Register />
                </div>

                <div className="flex xl:hidden shrink-0">
                    <img src={hamburger} alt="menu" className="w-8 h-8 xl:w-9 xl:h-9" />
                </div>

            </nav>
        </header>
    );
}

export default Navbar;
