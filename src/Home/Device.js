import React from "react";

function Device() {
    return (
        <div>
            <div className="device">
                <div className="contianer">
                    <div className="row align-content-center d-flex">
                        <div className="col-md-5">
                            <img src="img/project.PNG" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6 align-content-center d-flex  mt-5 pt-5">
                            <div className="row text-center ">
                                <div className="col-md-6">
                                    <i className="fa-solid fa-phone hart-icon "></i>
                                    <br />
                                    <h2>Device Mockups</h2>
                                    <h5>Ready to use HTML/CSS device mockups, no Photoshop required!</h5>
                                </div>
                                <div className="col-md-6">
                                    <i className="fa-solid fa-heart hart-icon"></i>
                                    <br />
                                    <h2>Flexible Use</h2>
                                    <h5>Put an image, video, animation, or anything else in the screen!</h5>
                                </div>
                                <div className="col-md-6">
                                    <i className="fa-solid fa-user hart-icon"></i>
                                    <br />
                                    <h2>Free to Use</h2>
                                    <h5>As always, this theme is free to download and use for any purpose!</h5>
                                </div>
                                <div className="col-md-6">
                                    <i className="fa-brands fa-github hart-icon"></i>
                                    <br />
                                    <h2>Open Source</h2>
                                    <h5>Since this theme is MIT licensed, you can use it commercially!</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Device;