import React from 'react';

const Navbar = () => {
    return (
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="text-blue-600">Home</a>
            <a href="#">All Books</a>
            <a href="#">Profile</a>
        </nav>
    );
};

export default Navbar;