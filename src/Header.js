import React from 'react'

function Header() {
    return (
        <React.Fragment>
            <header className="col-12 col-md-12 col-lg-12 border ">
                <div className="col-12 col-md-9 col-lg-9  mx-auto py-3 d-flex flex-row">
                    <div className="col-2 d-flex flex-row align-items-center justify-content-start">
                        <h6 className="p-0 px-3 m-0 primary-color">Qsales</h6>
                    </div>
                    <div className="col-md-5 col-lg-5 p-0 d-flex flex-row align-items-center justify-content-center">
                        <input type="text" placeholder="What are you looking for ?" className="search border px-2 py-1 rounded w-100" />
                    </div>
                    <div className="col d-flex flex-row align-items-center justify-content-center">
                        <p className="small p-0 m-0">العربية</p>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3 d-flex flex-row align-items-center justify-content-center p-0">
                        <div className="d-flex flex-row align-items-center px-3 border-right">
                            <p className="p-0 m-0 mr-2 me-2">Sign In </p>
                            <img src="/assets/images/user_thin.svg" height="18px" className=""/>
                        </div>
                        <div className="d-flex flex-row align-items-center px-3">
                            <p className="p-0 m-0 mr-2 me-2">Cart</p>
                            <img src="/assets/images/cart.svg" height="" className=""/>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;
