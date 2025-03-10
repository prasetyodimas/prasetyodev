import React from "react"

const MyServices = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-10 mb-10">
      <div className="col">
        <div className="card h-100">
          <h5 className="card-header">Web Development</h5>
          <div className="card-body">
            <h5 className="card-title">Custom Website</h5>
            <p className="card-text">
              Need a website for your business? I can help you create a custom
              website that fits your needs.
            </p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <h5 className="card-header">Web Development</h5>
          <div className="card-body">
            <h5 className="card-title">E-commerce Website</h5>
            <p className="card-text">
              Need an e-commerce website for your online store? I can help you
              create a custom e-commerce website that fits your needs.
            </p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <h5 className="card-header">Web Development</h5>
          <div className="card-body">
            <h5 className="card-title">Website Maintenance</h5>
            <p className="card-text">
              Need someone to maintain your website? I can help you with website
              maintenance, including updates, security, and performance
              optimization.
            </p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyServices
