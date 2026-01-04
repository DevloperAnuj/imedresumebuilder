import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Sparkles, Download, Zap, Shield, Palette, Star, ChevronRight } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "IMED-Optimized Design",
            description: "Templates specifically designed for IMED students applying to internships and placements"
        },
        {
            icon: <Download className="w-6 h-6" />,
            title: "Instant PDF Export",
            description: "Download your professional resume in seconds with perfect formatting for applications"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lightning Fast",
            description: "Build your resume in minutes, not hours. Perfect for last-minute applications"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Privacy First",
            description: "Your data stays in your browser. No servers, no tracking, complete privacy for IMED students"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Professional Templates",
            description: "Clean, modern designs that help IMED students stand out to recruiters"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "ATS Optimized",
            description: "Formatted to pass Applicant Tracking Systems used by top companies"
        }
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "IMED Student - Placed at TCS",
            image: "👩‍💻",
            text: "This resume builder made my placement preparation so much easier! Got placed at TCS in the first round itself.",
            rating: 5
        },
        {
            name: "Rahul Verma",
            role: "IMED Student - Intern at Infosys",
            image: "👨‍💼",
            text: "As an IMED student, this tool saved me hours. Clean interface, professional output, and completely free!",
            rating: 5
        },
        {
            name: "Anjali Patel",
            role: "IMED Student - Placed at Wipro",
            image: "👩‍🎨",
            text: "Perfect for IMED students! No sign-up hassle, just create and download. Used it for my campus placements.",
            rating: 5
        },
        {
            name: "Arjun Singh",
            role: "IMED Student - Intern at Cognizant",
            image: "👨‍🔬",
            text: "Built my resume in 10 minutes before the placement drive. The real-time preview helped me perfect it instantly!",
            rating: 5
        }
    ];

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-gradient"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <Sparkles className="w-4 h-4" />
                            <span>Free • No Sign-Up • Privacy First</span>
                        </div>
                        <h1 className="hero-title">
                            Build Your IMED Resume in
                            <span className="gradient-text"> Minutes</span>
                        </h1>
                        <p className="hero-subtitle">
                            Designed exclusively for IMED students. Create professional resumes for internships,
                            placements, and campus recruitment drives. Beautiful templates, instant PDF export, and complete privacy.
                        </p>
                        <div className="hero-cta">
                            <button
                                className="btn-primary"
                                onClick={() => navigate('/builder')}
                            >
                                Start Building Free
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <button
                                className="btn-secondary"
                                onClick={() => navigate('/tips')}
                            >
                                Resume Tips
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <div className="stat-number">5K+</div>
                                <div className="stat-label">IMED Students Helped</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Placement Success</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">4.9★</div>
                                <div className="stat-label">User Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Everything IMED Students Need</h2>
                        <p className="section-subtitle">
                            Powerful features designed specifically for IMED students' placement and internship needs
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Loved by IMED Students</h2>
                        <p className="section-subtitle">
                            Join thousands of IMED students who secured placements and internships with our resume builder
                        </p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 star-filled" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.image}</div>
                                    <div className="author-info">
                                        <div className="author-name">{testimonial.name}</div>
                                        <div className="author-role">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-gradient"></div>
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready for Your Placement Drive?</h2>
                        <p className="cta-subtitle">
                            Join thousands of IMED students who've already created their winning resumes
                        </p>
                        <button
                            className="btn-primary btn-large"
                            onClick={() => navigate('/builder')}
                        >
                            Get Started Now - It's Free
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        <p className="cta-note">No credit card required • No sign-up • 100% Free for IMED Students</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <FileText className="w-8 h-8" />
                            <span className="footer-logo">IMED Resume Builder</span>
                        </div>
                        <p className="footer-text">
                            Built with ❤️ exclusively for IMED students
                        </p>
                        <div className="footer-links">
                            <a href="/about" className="footer-link">About Us</a>
                            <a href="/contact" className="footer-link">Contact</a>
                            <a href="/privacy" className="footer-link">Privacy Policy</a>
                            <a href="/terms" className="footer-link">Terms of Service</a>
                        </div>
                        <p className="footer-copyright">
                            © 2026 IMED Resume Builder. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
