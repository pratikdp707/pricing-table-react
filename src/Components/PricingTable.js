import React from 'react'
import './PricingTable.css';


export default function PricingTable(props) {
    return (
        <div>
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                    <h6 className="card-price text-center">${props.pricingObj.freePrice}<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.pricingObj.freeUsers} User</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.pricingObj.freeStorage}GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                                            Private Projects</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                                            Phone Support</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
                                        </li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="/" className="btn btn-primary text-uppercase">{props.pricingObj.freeButton}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                                    <h6 className="card-price text-center">${props.pricingObj.plusPrice}<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.pricingObj.plusUsers} Users</strong></li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.pricingObj.plusStorage}GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="/" className="btn btn-primary text-uppercase">{props.pricingObj.plusButton}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                                    <h6 className="card-price text-center">${props.pricingObj.proPrice}<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.pricingObj.proUsers} Users</strong>
                                        </li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.pricingObj.proStorage}GB Storage</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                                            Subdomains</li>
                                        <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="/" className="btn btn-primary text-uppercase">{props.pricingObj.proButton}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
