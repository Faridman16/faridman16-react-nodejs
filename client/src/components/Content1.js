import React from 'react';

//ITS ABOUT CONTENT
class Content1 extends React.Component{
    render(){
        return(
            <div id="about">
            <div className="content-lg container">
                {/* <!-- Masonry Grid --> */}
                <div className="masonry-grid row">
                    
                    {/* <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img className="full-width img-responsive wow fadeInUp" src="img/500x500/01.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".2s" />
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img className="full-width img-responsive wow fadeInUp" src="img/500x500/02.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".3s" />
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img className="full-width img-responsive wow fadeInUp" src="img/500x500/03.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".4s" />
                    </div> */}
                    
                    <div className="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                    <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4 sm-margin-b-30">
                        <div className="margin-b-60">
                            <h2>Harmonious Planning</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
                        </div>
                        <img className="full-width img-responsive wow fadeInUp" src="/img/500x500/01.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".2s" />
                    </div>
                    <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                        <div className="margin-b-60">
                          <h2>Easy Integration</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>  
                        </div>
						 <img className="full-width img-responsive wow fadeInUp" src="/img/500x500/02.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".3s" />
                    </div>
                    <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                        <div className="margin-t-60 margin-b-60">
                            <h2>Superior Support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
                        </div>
                        <img className="full-width img-responsive wow fadeInUp" src="/img/500x500/03.jpg" alt="Portfolio Image" data-wow-duration=".3" data-wow-delay=".4s" />
                    </div>
				</div>
                {/* <!-- End Masonry Grid --> */}
            </div>
            
            <div className="bg-color-sky-light">
                <div className="content-lg container">
                    <div className="row">
                        <div className="col-md-5 col-sm-5 md-margin-b-60">
                            <div className="margin-t-50 margin-b-30">
                                <h2>Why Us?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <a href="#" className="btn-theme btn-theme-sm btn-white-bg text-uppercase">More...</a>
                        </div>
                        <div className="col-md-5 col-sm-7 col-md-offset-2">
                            {/* <!-- Accordion --> */}
                            <div className="accordion">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a className="panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Expert Research
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Hi-Tech Engineering
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed panel-title-child" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Outstanding Results
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Accodrion --> */}
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