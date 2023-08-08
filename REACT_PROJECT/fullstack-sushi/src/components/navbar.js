import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><b>L O G O</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">HOME</a>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FEATURES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PRICING</a>
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-primary btn-lg">ISCRIVITI</button>
                            {/* <a className="nav-link" aria-disabled="true">DISABLED</a> */}
                            {/* <a className="nav-link disabled" aria-current="page" href="#">Home</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;