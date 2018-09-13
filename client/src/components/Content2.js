import React from 'react';

//ITS PRODUCT CONTENT
class Content2 extends React.Component{
    render(){
        return(
            <div id="products">
            <div className="content-lg container">
                <div className="row margin-b-40">
                    <div className="col-sm-6">
                        <h2>Recent Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                    </div>
                </div>
                {/* <!--// end row --> */}

                <div className="row">
                    {/* <!-- Latest Products --> */}
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="margin-b-20">
                            <img className="img-responsive" src="img/970x647/01.jpg" alt="Latest Products" />
                        </div>
                        <h4><a href="">Interior</a> <span className="text-uppercase margin-l-20">Architecture</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <a className="link" href="">Details</a>
                    </div>
                    {/* <!-- End Latest Products --> */}

                    {/* <!-- Latest Products --> */}
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="margin-b-20">
                            <img className="img-responsive" src="img/970x647/02.jpg" alt="Latest Products" />
                        </div>
                        <h4><a href="">Trend</a> <span className="text-uppercase margin-l-20">Setting</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <a className="link" href="">Details</a>
                    </div>
                    {/* <!-- End Latest Products --> */}

                    {/* <!-- Latest Products --> */}
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="margin-b-20">
                            <img className="img-responsive" src="img/970x647/03.jpg" alt="Latest Products" />
                        </div>
                        <h4><a href="">Fresh Style</a> <span className="text-uppercase margin-l-20">Philosophy</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <a className="link" href="">Details</a>
                    </div>
                    {/* <!-- End Latest Products --> */}
                </div>
                {/* <!--// end row --> */}
            </div>
        </div>
        );
    }
}

export default Content2;