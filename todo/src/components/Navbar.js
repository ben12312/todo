// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor: 'grey' }}>
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" style={{ color: 'wheat' }}>Home</Link>
            </div>
        </nav>
    )
}