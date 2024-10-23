import React, { useState } from 'react';
import { FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-white shadow-md relative z-50">
                <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                    {/* Section gauche - Réseaux sociaux (visible uniquement sur desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a 
                            href="https://www.instagram.com/100_et_or?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            className="flex items-center space-x-2 text-gray-800 hover:text-yellow-500 group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="w-6 h-6 group-hover:text-yellow-500" />
                            <span>Instagram</span>
                        </a>
                        <a 
                            href="https://youtube.com/@breakboyfabian6050?si=7rbIRUIJSSvBW1F-" 
                            className="flex items-center space-x-2 text-gray-800 hover:text-yellow-500 group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="w-6 h-6 group-hover:text-yellow-500" />
                            <span>YouTube</span>
                        </a>
                    </div>

                    {/* Logo au milieu */}
                    <div className="flex-grow flex justify-center">
                        <img src="/100OR/img/LogoNav.png" alt="LogoNav" className="w-24 md:w-32" />
                    </div>

                    {/* Section droite - Drapeaux et Se connecter (visible uniquement sur desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-2">
                            <img src="/100OR/img/flag/FRANCE.png" alt="FR" className="w-12 border-4 border-black" />
                            <img src="/100OR/img/X.png" alt="X" className="w-12" />
                            <img src="/100OR/img/flag/COLOMBIE.png" alt="CO" className="w-12 border-4 border-black" />
                        </div>
                        <button 
                            className="text-gray-800 hover:text-yellow-500" 
                            onClick={toggleLoginForm}
                        >
                            Se Connecter
                        </button>
                    </div>
                </div>
            </nav>

            {/* Bouton burger fixe en bas à droite */}
            <div className="fixed bottom-4 right-4 md:hidden" style={{ zIndex: 10000 }}>
                <button 
                    onClick={toggleMenu}
                    className="bg-yellow-500 text-white p-3 rounded-full shadow-lg"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="fixed bottom-20 right-4 bg-white p-4 rounded-lg shadow-xl md:hidden" style={{ zIndex: 9999 }}>
                    <a 
                        href="https://www.instagram.com/100_et_or?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        className="block py-2 text-gray-800 hover:text-yellow-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="inline-block mr-2" /> Instagram
                    </a>
                    <a 
                        href="https://youtube.com/@breakboyfabian6050?si=7rbIRUIJSSvBW1F-" 
                        className="block py-2 text-gray-800 hover:text-yellow-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="inline-block mr-2" /> YouTube
                    </a>
                    <div className="flex space-x-2 py-2">
                        <img src="/100OR/img/flag/FRANCE.png" alt="FR" className="w-8 h-6 border border-black" />
                        <img src="/100OR/img/X.png" alt="X" className="w-6 h-6" />
                        <img src="/100OR/img/flag/COLOMBIE.png" alt="CO" className="w-8 h-6 border border-black" />
                    </div>
                </div>
            )}

            {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
        </>
    );
}

export default Navbar;
