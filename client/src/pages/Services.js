import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/services/Header';
import Content from 'components/services/Content';
import "../assets/styles/image-styles.css";

export default function Services() {
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
