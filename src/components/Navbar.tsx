import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Về chúng tôi', path: '/about' },
        { name: 'Sản phẩm', path: '/products' },
        { name: 'Dự định tương lai', path: '/future-plans' },
        { name: 'Tra cứu QR', path: '/qr-lookup' },
        { name: 'Admin', path: '/qr-admin' },
    ];

    return (
        <nav className="bg-green-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-white text-2xl font-bold">ViDa</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${item.name === 'Admin'
                                        ? location.pathname === item.path
                                            ? 'bg-yellow-600 text-white'
                                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                                        : location.pathname === item.path
                                            ? 'bg-green-700 text-white'
                                            : 'text-green-100 hover:bg-green-700 hover:text-white'
                                    }`}
                            >
                                {item.name === 'Admin' && '🔧 '}{item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-green-100 hover:text-white focus:outline-none focus:text-white"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${item.name === 'Admin'
                                        ? location.pathname === item.path
                                            ? 'bg-yellow-600 text-white'
                                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                                        : location.pathname === item.path
                                            ? 'bg-green-600 text-white'
                                            : 'text-green-100 hover:bg-green-600 hover:text-white'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name === 'Admin' && '🔧 '}{item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;