import React from 'react';

//ITS WORK CONTENT
class Content1 extends React.Component{
    render(){
        return(
            <div id="contact">
            {/* <!-- Contact List --> */}
            <div className="section-seperator">
                <div className="content-lg container">
                    <div className="row">
                        {/* <!-- Contact List --> */}
                        <div className="col-sm-4 sm-margin-b-50">
                            <h3><a href="http://ft-seo.ch/">Zurich</a> <span className="text-uppercase margin-l-20">Human Resources</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                            <ul className="list-unstyled contact-list">
                                <li><i className="margin-r-10 color-base icon-call-out"></i> +41 60 66 555 44 33</li>
                                <li><i className="margin-r-10 color-base icon-envelope"></i> hr@flameonepage.com</li>
                            </ul>
                        </div>
                        {/* <!-- End Contact List --> */}

                        {/* <!-- Contact List --> */}
                        <div className="col-sm-4 sm-margin-b-50">
                            <h3><a href="http://ft-seo.ch/">Malta</a> <span className="text-uppercase margin-l-20">Development</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                            <ul className="list-unstyled contact-list">
                                <li><i className="margin-r-10 color-base icon-call-out"></i> +356 7965 1257</li>
                                <li><i className="margin-r-10 color-base icon-envelope"></i> developmemt@flameonepage.com</li>
                            </ul>
                        </div>
                        {/* <!-- End Contact List --> */}

                        {/* <!-- Contact List --> */}
                        <div className="col-sm-4 sm-margin-b-50">
                            <h3><a href="http://ft-seo.ch/">Manchester</a> <span className="text-uppercase margin-l-20">CEO</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                            <ul className="list-unstyled contact-list">
                                <li><i className="margin-r-10 color-base icon-call-out"></i> +44 654 583 5518</li>
                                <li><i className="margin-r-10 color-base icon-envelope"></i> ceo@flameonepage.com</li>
                            </ul>
                        </div>
                        {/* <!-- End Contact List --> */}
                    </div>
                    {/* <!--// end row --> */}
                </div>
            </div>
            {/* <!-- End Contact List --> */}
            
            {/* <!-- Google Map --> */}
            <div className="map height-300">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.0694570748947!2d7.455080415208266!3d46.94067397914616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39d0cf20e8d1%3A0x9daac4cd3043d067!2sThunstrasse+50%2C+3005+Bern%2C+Switzerland!5e0!3m2!1sen!2sin!4v1496749852928" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen></iframe>
			</div>
        </div>
        );
    }
}

export default Content1;