import { Menu, X } from "lucide-react";
import logo from "@/assets/gymprox-logo.png";
import LinkComponent from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
import TransitionLogo from "@/assets/logoTransition.png";
import MobileLink from "./MobileLink";
import { Link } from "react-router-dom"

const Navbar = ({ selectedPage, setSelectedPage, isTopPage }) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenu, setIsMenu] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const NavBackGround = isTopPage ? "" : "bg-primary-100";
    // const HoverBgColor = isTopPage ? '' : 'hover:text-white';

    return (
        <nav>
            <div className={`${NavBackGround} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left */}
                        <img src={isTopPage ? logo : TransitionLogo} alt="Logo" style={{ width: '12rem' }} />

                        {/* right */}
                        {isAboveMediumScreen ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <LinkComponent
                                        className={`${isTopPage ? "" : "text-white"}`}
                                        page="Home"
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}
                                    />
                                    <LinkComponent
                                        page="Benefits"
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}
                                    />
                                    <LinkComponent
                                        page="Exercises"
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}
                                    />
                                    {/* <LinkComponent
                                        page="Diet"
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}
                                    /> */}
                                    <LinkComponent
                                        page="Contact Us"
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    {/* Signup component */}
                                    <Link to='/gymprox/signup'>
                                        Sign Up
                                    </Link>
                                    <ActionButton setSelectedPage={setSelectedPage} >
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full p-2 bg-secondary-500"
                                onClick={() => setIsMenu(!isMenu)}
                            >
                                <Menu className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* phone modal */}
            {!isAboveMediumScreen && isMenu && (
                <div className="fixed right-0 bottom-0 z-30 h-full w-[250px] bg-primary-100 drop-shadow-xl">
                    {/* close icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenu(!isMenu)}>
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>
                    {/* menu items */}
                    <div className={`flex flex-col gap-8 text-sm mx-10`}>
                        <MobileLink
                            page="Home"
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                        />
                        <MobileLink
                            page="Benefits"
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                        />
                        <MobileLink
                            page="Exercises"
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                        />
                        {/* <MobileLink
                            page="Diet"
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                        /> */}
                        <MobileLink
                            page="Contact Us"
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
