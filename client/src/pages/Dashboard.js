import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/dashboard/Header';
import Content from 'components/dashboard/Content';

export default function Dashboard() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content />
            </main>
            <DefaultFooter />
        </>
    );
}
