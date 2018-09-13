import React from 'react';

//ITS WORK CONTENT
class Content1 extends React.Component{
    render(){
        return(
            <div id="services">
            <div className="bg-color-sky-light" data-auto-height="true">
                <div className="content-lg container">
                    <div className="row margin-b-40">
                        <div className="col-sm-6">
                            <h2>Services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                        </div>
                    </div>
                    {/* <!--// end row --> */}

                    <div className="row row-space-1 margin-b-2">
                        <div className="col-sm-4 sm-margin-b-2">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-chemistry"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Company Formation</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <a href="#" className="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div className="col-sm-4 sm-margin-b-2">
                            <div className="service bg-color-base" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon color-white icon-screen-tablet"></i>
                                </div>
                                <div className="service-info">
                                    <h3 className="color-white">Stuff Management</h3>
                                    <p className="color-white margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <a href="#" className="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-badge"></i>
                                </div>
                                <div className="service-info">
                                    <h3>KPI Optimization</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <a href="#" className="content-wrapper-link"></a>    
                            </div>
                        </div>
                    </div>
                    {/* <!--// end row --> */}

                    <div className="row row-space-1">
                        <div className="col-sm-4 sm-margin-b-2">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-notebook"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Information Security</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <a href="#" className="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div className="col-sm-4 sm-margin-b-2">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-speedometer"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Recrutinment</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <a href="#" className="content-wrapper-link"></a>    
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-badge"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Materials Supply</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <a href="#" className="content-wrapper-link"></a>    
                            </div>
                        </div>
                    </div>
                    {/* <!--// end row --> */}
                </div>
            </div>
        </div>
        );
    }
}

export default Content1;