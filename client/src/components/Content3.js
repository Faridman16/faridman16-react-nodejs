import React from 'react';

//ITS PRICE CONTENT
class Content2 extends React.Component{
    render(){
        return(
            <div id="pricing">
            <div className="bg-color-sky-light">
                <div className="content-lg container">
                    <div className="row row-space-1">
                        <div className="col-sm-4 sm-margin-b-2">
                            {/* <!-- Pricing --> */}
                            <div className="pricing">
                                <div className="margin-b-30">
                                    <i className="pricing-icon icon-chemistry"></i>
                                    <h3>Silver Package <span> - $</span> 74.99</h3>
                                    <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <ul className="list-unstyled pricing-list margin-b-50">
                                    <li className="pricing-list-item">Starter Kit</li>
                                    <li className="pricing-list-item">Basic Features</li>
                                    <li className="pricing-list-item">Annual Report</li>
                                </ul>
                                <a href="pricing.html" className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                            </div>
                            {/* <!-- End Pricing --> */}
                        </div>
                        <div className="col-sm-4 sm-margin-b-2">
                            {/* <!-- Pricing --> */}
                            <div className="pricing pricing-active">
                                <div className="margin-b-30">
                                    <i className="pricing-icon icon-badge"></i>
                                    <h3>Gold Package <span> - $</span> 199.99</h3>
                                    <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <ul className="list-unstyled pricing-list margin-b-50">
                                    <li className="pricing-list-item">Professional Kit</li>
                                    <li className="pricing-list-item">Full Options</li>
                                    <li className="pricing-list-item">Bi-anual Report</li>
                                </ul>
                                <a href="pricing.html" className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                            </div>
                            {/* <!-- End Pricing --> */}
                        </div>
                        <div className="col-sm-4">
                            {/* <!-- Pricing --> */}
                            <div className="pricing">
                                <div className="margin-b-30">
                                    <i className="pricing-icon icon-shield"></i>
                                    <h3>Platinum Package <span> - $</span> 500</h3>
                                    <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <ul className="list-unstyled pricing-list margin-b-50">
                                    <li className="pricing-list-item">Complete Kit</li>
                                    <li className="pricing-list-item">Advanced Options</li>
                                    <li className="pricing-list-item">Monthly Report</li>
                                </ul>
                                <a href="pricing.html" className="btn-theme btn-theme-sm btn-default-bg text-uppercase">Start Now</a>
                            </div>
                            {/* <!-- End Pricing --> */}
                        </div>
                    </div>
                    {/* <!--// end row --> */}
                </div>
            </div>
        </div>
        );
    }
}

export default Content2;