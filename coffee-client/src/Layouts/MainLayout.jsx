import { Outlet } from 'react-router';
import Header from '../Components/Header';
import { ScrollToTop } from '../Components/ScrollToTop';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className=''>
                <ScrollToTop/>
                <Outlet/>
            </main>
            <footer className='md:mt-30'>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;