import '../pages/DashBoard.css';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Integrations = () => {
    const location = useLocation();
    const getPageTitle = (pathname) => {
        const map = {
            '/dashboard': 'Dashboard',
            '/projects': 'Projects',
            '/teams': 'Teams',
            '/analytics': 'Analytics',
            '/messages': 'Messages',
            '/integrations': 'Integrations'
        };
        return map[pathname.toLowerCase()] || 'Page';
    };

    const activeMenu = getPageTitle(location.pathname);

    return (
        <div className="menu flex min-h-screen bg-gray-100">
            <Sidebar />

            <main className="content flex-1 p-8 bg-white">
                <Header title={activeMenu} />

                <div className="text-gray-600 text-lg font-medium">
                    This is the <span className="font-bold">{activeMenu}</span> page.
                </div>

                <Footer totalResults={0} />
            </main>
        </div>
    );
};

export default Integrations;