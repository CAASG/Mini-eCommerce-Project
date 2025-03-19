import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "./contact.css"

const Contact = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const send = (data) => {
        console.log(data);
        setSubmitted(true);
        reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    }

  return (
    <div className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">
                    Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

            <div className="contact-layout">
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit(send)}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input 
                                type="text" 
                                id="name"
                                className="form-input" 
                                placeholder="Enter your full name" 
                                {...register("name", { 
                                    required: "Name is required",
                                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                                })}
                            />
                            {errors.name && <p className="error-message">{errors.name.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input 
                                type="email" 
                                id="email"
                                className="form-input" 
                                placeholder="Enter your email address" 
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: { 
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                                        message: "Invalid email address" 
                                    }
                                })}
                            />
                            {errors.email && <p className="error-message">{errors.email.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone"
                                className="form-input" 
                                placeholder="Enter your phone number" 
                                {...register("phone", { 
                                    required: "Phone number is required",
                                    pattern: { 
                                        value: /^[0-9+-\s()]*$/, 
                                        message: "Invalid phone number" 
                                    }
                                })}
                            />
                            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message" 
                                className="form-input form-textarea" 
                                placeholder="How can we help you?" 
                                {...register("message", { 
                                    required: "Message is required",
                                    minLength: { value: 10, message: "Message must be at least 10 characters" }
                                })}
                            ></textarea>
                            {errors.message && <p className="error-message">{errors.message.message}</p>}
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                        
                        {submitted && (
                            <div className="submission-success">
                                <i className="fas fa-check-circle"></i>
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>

                <div className="contact-info">
                    <div className="info-card">
                        <h3 className="info-title">Contact Information</h3>
                        <ul className="info-list">
                            <li className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-details">
                                    <span className="info-label">Address</span>
                                    <span className="info-value">123 Tech Street, Digital City, 10010</span>
                                </div>
                            </li>
                            <li className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="info-details">
                                    <span className="info-label">Phone</span>
                                    <span className="info-value">+1 (555) 123-4567</span>
                                </div>
                            </li>
                            <li className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-details">
                                    <span className="info-label">Email</span>
                                    <span className="info-value">support@ecommerce.com</span>
                                </div>
                            </li>
                            <li className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="info-details">
                                    <span className="info-label">Working Hours</span>
                                    <span className="info-value">Monday - Friday: 9AM - 6PM</span>
                                </div>
                            </li>
                        </ul>

                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="map-container">
                        {/* Placeholder for map */}
                        <span>Store Location Map</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact