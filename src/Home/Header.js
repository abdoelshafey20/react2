import React from "react"
function Header (){
    return(
        <div>
             <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 boxes">
                    <h2>Showcase your app beautifully.</h2>
                    <p>Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>
                    <img src="img/app-store-badge.svg" alt="" className="img-fluid"/>
                    <img src="img/google-play-badge.svg" alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src="img/project.PNG" alt="" className="img-fluid img-header"/>
                </div>
            </div>
        </div>
    </header>
            
        </div>
    ) 
}
export default Header