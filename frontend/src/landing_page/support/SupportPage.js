import React from "react";

function SupportPage() {
  return (
    <div className="container py-5">

      {/* Heading */}

      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold display-4">Contact Support</h1>

        <p className="text-muted fs-5">
          Need help? We're here to assist you.
        </p>
      </div>

      <div className="row g-4">

        {/* Contact Info */}

        <div className="col-lg-5" data-aos="fade-right">

          <div className="card border-0 shadow-sm p-4 h-100">

            <h3 className="fw-bold mb-4">Get In Touch</h3>

            <p className="mb-3">
              📧 support@axenor.com
            </p>

            <p className="mb-3">
              📞 +91 9876543210
            </p>

            <p>
              📍 Hyd, Telangana, India
            </p>

          </div>

        </div>

        {/* Form */}

        <div className="col-lg-7" data-aos="fade-left">

          <div className="card border-0 shadow-sm p-4">

            <h3 className="fw-bold mb-4">
              Send a Message
            </h3>

            <form>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                className="btn btn-primary px-4"
                type="submit"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* FAQ */}

      <div className="mt-5" data-aos="fade-up">

        <h2 className="fw-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h5 className="fw-bold">
                How do I create an account?
              </h5>

              <p className="text-muted">
                Click Sign Up and fill in your details.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h5 className="fw-bold">
                Is my data secure?
              </h5>

              <p className="text-muted">
                Yes. We use JWT authentication and secure APIs.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h5 className="fw-bold">
                Can I track stocks live?
              </h5>

              <p className="text-muted">
                Yes. Real-time market tracking is supported.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default SupportPage;