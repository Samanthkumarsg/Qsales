import React from 'react'

function Navigation() {
    return (
        <React.Fragment>
            <div className="col-lg-12 col-md-12 col-sm-12 bg-light">
                <div className="col-lg-9 col-md-9 col-sm-12 mx-auto d-flex align-items-center flex-row justify-content-start">
                <div className="nav-list p-3 " aria-labelledby="navbarDropdownMenuLink">
                    <h6 className="small nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</h6>
                   <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                    <div className="nav-list p-3"><h6 className="small">Bath Accessories</h6></div>
                    <div className="nav-list p-3"><h6 className="small">Children</h6></div>
                    <div className="nav-list p-3"><h6 className="small">Cooking Utensils</h6></div>
                    <div className="nav-list p-3"><h6 className="small">Skin Care</h6></div>
                    <div className="nav-list p-3"><h6 className="small">Home Care</h6></div>
                    <div className="nav-list p-3"><h6 className="small">Storage and Organisation</h6></div>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default Navigation
