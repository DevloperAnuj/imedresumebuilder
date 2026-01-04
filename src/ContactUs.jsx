import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Simulate form submission (replace with actual backend call if needed)
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: 'Thank you for contacting us! We\'ll get back to you within 24-48 hours.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>
                    <div className="legal-title-section">
                        <MessageSquare className="legal-icon" />
                        <h1 className="legal-title">Contact Us</h1>
                        <p className="legal-subtitle">We'd love to hear from you!</p>
                    </div>
                </div>
            </div>

            <div className="legal-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info-section">
                            <div className="contact-info-card">
                                <h2>Get in Touch</h2>
                                <p>
                                    Have questions, feedback, or need help? We're here for IMED students!
                                    Fill out the form and we'll get back to you as soon as possible.
                                </p>

                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <div className="contact-method-icon">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3>Email Us</h3>
                                            <p>support@imedresumebuilder.com</p>
                                            <span className="response-time">Response within 24-48 hours</span>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <div className="contact-method-icon">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3>Feedback</h3>
                                            <p>We value your input</p>
                                            <span className="response-time">Help us improve the tool</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-faq">
                                    <h3>Quick Help</h3>
                                    <div className="faq-item">
                                        <strong>Q: How do I save my resume?</strong>
                                        <p>Your resume is automatically saved in your browser. Download as PDF for backup.</p>
                                    </div>
                                    <div className="faq-item">
                                        <strong>Q: Is this really free?</strong>
                                        <p>Yes! 100% free for all IMED students. No hidden charges.</p>
                                    </div>
                                    <div className="faq-item">
                                        <strong>Q: Can I edit my resume later?</strong>
                                        <p>Yes, your data is saved locally. Return anytime to edit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <div className="legal-card">
                                <h2>Send us a Message</h2>
                                <p className="form-description">
                                    Fill out the form below and we'll respond within 24-48 hours
                                </p>

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="bug">Report a Bug</option>
                                            <option value="feature">Feature Request</option>
                                            <option value="help">Need Help</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            placeholder="Tell us how we can help you..."
                                            className="form-input"
                                        ></textarea>
                                    </div>

                                    {status.message && (
                                        <div className={`form-status ${status.type}`}>
                                            {status.type === 'success' ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5" />
                                            )}
                                            <span>{status.message}</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn-primary btn-submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
