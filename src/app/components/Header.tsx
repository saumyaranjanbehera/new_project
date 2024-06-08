"use client";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <header className="bg-white shadow-md relative w-full ">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-extrabold text-black">Toingg</div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="h-8 w-8 text-[#D38751]"
                    >
                        <VscThreeBars />
                    </button>
                </div>
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } md:hidden fixed inset-0 z-10 w-[270px] ml-4 mt-16 h-[510px] rounded-[20px] transition-all duration-300 ease-in-out bg-[#D38751]`}
                >
                    <div className="flex flex-col p-4 space-y-4">
                        <Link href="#contact" legacyBehavior>
                            <a className="flex items-center text-lg transition duration-300">
                                Contact <MdOutlineArrowRightAlt className="ml-2" />
                            </a>
                        </Link>
                        <Link href="#pricing" legacyBehavior>
                            <a className="flex items-center text-lg transition duration-300">
                                Pricing <MdOutlineArrowRightAlt className="ml-2" />
                            </a>
                        </Link>
                        <Link href="#documentation" legacyBehavior>
                            <a className="flex items-center text-lg transition duration-300">
                                Documentation <MdOutlineArrowRightAlt className="ml-2" />
                            </a>
                        </Link>
                        <Link href="#community" legacyBehavior>
                            <a className="flex items-center text-lg transition duration-300">
                                Join our community <MdOutlineArrowRightAlt className="ml-2" />
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        
    );
};

export default Header;
