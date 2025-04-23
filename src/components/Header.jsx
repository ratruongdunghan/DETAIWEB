import React from 'react';
import bell from '../img/Bell 1.png';
import question from '../img/Question 1.png';
import avatar from '../img/Avatar 313.png';

const Header = ({ title }) => {
    return (
        <div className="header flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#f14f7e]">{title}</h2>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="border px-3 py-1 w-64 rounded-md"
                />
                <img src={bell} alt="bell" />
                <img src={question} alt="question" />
                <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            </div>
        </div>
    );
};

export default Header;