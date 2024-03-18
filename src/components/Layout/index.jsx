import Footer from "../Footer";
import Header from "../Header";

export default function Layout(props) {
    const children = props.children;
    return (
        <>
                <div>
            <Header />
            {children}
            <Footer />
        </div>
        </>
    )
}