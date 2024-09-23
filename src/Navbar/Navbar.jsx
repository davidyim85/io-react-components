import './Navbar.css';


//a child component to App.jsx (because this is being used in App.jsx)
const Navbar = (props) => {
    console.log(props)
    return (
        <nav id="top-navbar">
            {props.navItems.map((v, i) => {
                return (<a key={i}>{v}</a>)
            })}
            {/* <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/money-pit">Investment Opportunities</a>
                <a href="/the-fine-print">Terms of Service</a> */}
        </nav>
    );
}

export default Navbar;