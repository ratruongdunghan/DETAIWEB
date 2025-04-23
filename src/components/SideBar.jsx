import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';
import imgBanner from '../img/Group.png';
import iconOverview from '../img/Squares four 1.png';
import iconFolder from '../img/Folder.png';
import iconGroup from '../img/Groups.png';
import iconPie from '../img/Pie chart.png';
import iconChat from '../img/Chat.png';
import iconCode from '../img/Code.png';
import iconActive from '../img/active.png';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { label: "Dashboard", icon: iconOverview, path: "/dashboard" },
        { label: "Projects", icon: iconFolder, path: "/projects" },
        { label: "Teams", icon: iconGroup, path: "/teams" },
        { label: "Analytics", icon: iconPie, path: "/analytics" },
        { label: "Messages", icon: iconChat, path: "/messages" },
        { label: "Integrations", icon: iconCode, path: "/integrations" },
    ];

    return (
        <aside className="w-1/5 bg-white shadow-xl p-5 flex flex-col justify-between border-r border-gray-300">
            <div>
                <img className="mb-10 w-32" src={logo} alt="Logo" />
                {menuItems.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.label}
                        className={({ isActive }) =>
                            `flex items-center gap-2 mb-5 cursor-pointer px-3 py-2 rounded-md transition-all duration-200 ${isActive
                                ? "bg-[#f14f7e] text-white"
                                : "text-gray-700 hover:bg-pink-200"
                            }`
                        }
                    >
                        <img
                            src={location.pathname === item.path ? iconActive : item.icon}
                            alt=""
                        />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </div>

            <div className='bg-[#eff6ff] w-56 h-64 mb-30 ml-10'>
                <img src={imgBanner} alt="" />
                <button
                    style={{ cursor: "pointer" }}
                    className="flex items-center gap-2 px-4 py-2 border border-[#4d94ff] rounded text-[#4d94ff] hover:bg-[#4d94ff] hover:text-white w-56 mt-10 justify-center"
                >
                    Try now
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;