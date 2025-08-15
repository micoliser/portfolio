import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import validator from "validator";

function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Helper to build HTML body
  const buildEmailBody = (name, email, message, isCopy = false) => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; padding: 32px 20px; border-radius: 12px; color: #222;">
     ${
       isCopy
         ? `<p style="font-size: 0.95em; color: #888;">This is a copy of your message sent via Samuel Iwelumo's portfolio site.</p>`
         : ``
     }
      <h2 style="color: #8b5cf6; margin-bottom: 0.5em;">New Contact Message from Portfolio</h2>
      <p style="margin: 0 0 1em 0;">Hi Samuel,</p>
      <p style="margin: 0 0 1.5em 0;">You have a new message from your portfolio:</p>
      <div style="background: #fff; border-radius: 8px; padding: 18px 20px; box-shadow: 0 2px 8px rgba(139,92,246,0.07); margin-bottom: 1.5em;">
        <p style="margin: 0 0 0.5em 0;"><strong style="color: #8b5cf6;">Name:</strong> ${name}</p>
        <p style="margin: 0 0 0.5em 0;"><strong style="color: #8b5cf6;">Email:</strong> ${email}</p>
        <p style="margin: 0 0 0.3em 0;"><strong style="color: #8b5cf6;">Message:</strong></p>
        <p style="margin: 0; color: #444;">${message}</p>
      </div>
      <p style="font-size: 0.95em; color: #888;">This message was sent from your portfolio website contact form.</p>
    </div>
  `;

  const handleSend = (e) => {
    e.preventDefault();
    setErrors({});
    const name = formRef.current.name.value.trim();
    const email = formRef.current.reply_to.value.trim();
    const message = formRef.current.message.value.trim();

    // Validation
    let newErrors = {};
    if (!name) {
      newErrors.name = "Name is required.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validator.isEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          name,
          to_email: email,
          body: buildEmailBody(name, email, message, false),
        },
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        () => {
          // Send a copy to the sender
          emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            {
              name,
              to_email: email,
              body: buildEmailBody(name, email, message, true),
            },
            process.env.REACT_APP_EMAIL_USER_ID
          );
          setSent(true);
          setLoading(false);
        },
        (e) => {
          console.log(e);
          setErrors({ form: "Failed to send message. Please try again." });
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex-root" id="top">
      <section className="section flex-grow-1 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-7 reveal-on-load">
              <p className="typing-effect ms-1">We can be partners.</p>
              <h2 className="hero-title text-light mb-3">Contact Me</h2>
              <h3
                className="hero-subtitle mb-4"
                style={{ color: "var(--accent)" }}
              >
                Let’s work together!
              </h3>
              <p className="mb-4">
                I’m open to full-time, freelance, or collaboration
                opportunities. Feel free to reach out for a project, a chat, or
                just to say hi!
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i
                    className="fas fa-envelope me-2"
                    style={{ color: "var(--accent)" }}
                  ></i>
                  <a
                    href="mailto:samueliwelumo@gmail.com"
                    className="text-light text-decoration-none"
                  >
                    samueliwelumo@gmail.com
                  </a>
                </li>
                <li className="mb-2">
                  <i
                    className="fab fa-linkedin me-2"
                    style={{ color: "var(--accent)" }}
                  ></i>
                  <a
                    href="https://www.linkedin.com/in/samuel-iwelumo-8a43a6219/"
                    className="text-light text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <i
                    className="fab fa-github me-2"
                    style={{ color: "var(--accent)" }}
                  ></i>
                  <a
                    href="https://github.com/micoliser"
                    className="text-light text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 reveal-on-load delay-1">
              <div
                className="p-4 shadow-lg mt-5"
                style={{
                  borderLeft: "5px solid var(--accent)",
                  borderRadius: "1.5rem",
                  backdropFilter: "blur(8px)",
                  background: "rgba(31,41,55,0.65)",
                }}
              >
                <h5 className="mb-3" style={{ color: "var(--accent)" }}>
                  Send a Message
                </h5>
                {sent ? (
                  <div className="alert alert-success mb-0">
                    Message sent! Thank you.
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSend} noValidate>
                    {errors.form && (
                      <div className="alert alert-danger">{errors.form}</div>
                    )}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className={`form-control contact-input${
                          errors.name ? " is-invalid" : ""
                        }`}
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        autoComplete="off"
                        required
                      />
                      {errors.name && (
                        <div className="invalid-feedback d-block">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control contact-input${
                          errors.email ? " is-invalid" : ""
                        }`}
                        id="email"
                        name="reply_to"
                        placeholder="you@email.com"
                        autoComplete="off"
                        required
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className={`form-control contact-input${
                          errors.message ? " is-invalid" : ""
                        }`}
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Type your message..."
                        required
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback d-block">
                          {errors.message}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-accent w-100"
                      disabled={loading}
                      style={{
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
