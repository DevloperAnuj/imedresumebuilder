import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Target, Users, Zap, Shield, Sparkles } from 'lucide-react';

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>
                    <div className="legal-title-section">
                        <Heart className="legal-icon" />
                        <h1 className="legal-title">About Us</h1>
                        <p className="legal-subtitle">Empowering IMED Students for Success</p>
                    </div>
                </div>
            </div>

            <div className="legal-content">
                <div className="container">
                    <div className="legal-card">
                        <div className="legal-intro">
                            <p className="about-intro">
                                IMED Resume Builder was created with a single mission: to help IMED students create professional,
                                ATS-optimized resumes that help them succeed in placements and internships. We believe every
                                IMED student deserves access to quality tools that level the playing field in their career journey.
                            </p>
                        </div>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Target className="section-icon" />
                            </div>
                            <h2>Our Mission</h2>
                            <p>
                                To provide IMED students with a free, easy-to-use, and privacy-first resume builder that helps
                                them create professional resumes for campus placements, internships, and job applications.
                                We're committed to removing barriers and making professional resume creation accessible to all IMED students.
                            </p>
                        </section>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Sparkles className="section-icon" />
                            </div>
                            <h2>Why We Built This</h2>
                            <p>
                                We noticed that many IMED students struggled with creating professional resumes:
                            </p>
                            <ul>
                                <li>Expensive resume building tools with subscription fees</li>
                                <li>Complex software that requires technical expertise</li>
                                <li>Privacy concerns with online resume builders</li>
                                <li>Templates not optimized for campus placements</li>
                                <li>Time-consuming manual formatting in Word processors</li>
                            </ul>
                            <p>
                                We built IMED Resume Builder to solve these problems with a tool that's free, fast,
                                privacy-focused, and specifically designed for IMED students.
                            </p>
                        </section>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Shield className="section-icon" />
                            </div>
                            <h2>Our Values</h2>
                            <div className="values-grid">
                                <div className="value-card">
                                    <h3>🎓 Student-First</h3>
                                    <p>Built exclusively for IMED students, by people who understand your needs</p>
                                </div>
                                <div className="value-card">
                                    <h3>🔒 Privacy-First</h3>
                                    <p>Your data stays in your browser. No servers, no tracking, complete privacy</p>
                                </div>
                                <div className="value-card">
                                    <h3>💯 100% Free</h3>
                                    <p>No hidden fees, no subscriptions, no premium tiers. Free forever</p>
                                </div>
                                <div className="value-card">
                                    <h3>⚡ Fast & Simple</h3>
                                    <p>Create professional resumes in minutes, not hours</p>
                                </div>
                                <div className="value-card">
                                    <h3>🎨 Quality Design</h3>
                                    <p>Professional templates that recruiters love and ATS systems approve</p>
                                </div>
                                <div className="value-card">
                                    <h3>🚀 Always Improving</h3>
                                    <p>We continuously update based on IMED student feedback</p>
                                </div>
                            </div>
                        </section>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Users className="section-icon" />
                            </div>
                            <h2>Who We Serve</h2>
                            <p>
                                IMED Resume Builder is designed exclusively for students of the Institute of Management and
                                Entrepreneurship Development (IMED). Whether you're:
                            </p>
                            <ul>
                                <li>Preparing for campus placements</li>
                                <li>Applying for summer internships</li>
                                <li>Seeking part-time opportunities</li>
                                <li>Building your first professional resume</li>
                                <li>Updating your resume for job applications</li>
                            </ul>
                            <p>
                                We're here to help you create a resume that stands out and gets you noticed by recruiters.
                            </p>
                        </section>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Zap className="section-icon" />
                            </div>
                            <h2>What Makes Us Different</h2>
                            <div className="difference-list">
                                <div className="difference-item">
                                    <div className="difference-number">1</div>
                                    <div>
                                        <h3>IMED-Specific</h3>
                                        <p>Templates and features tailored for IMED students and campus recruitment</p>
                                    </div>
                                </div>
                                <div className="difference-item">
                                    <div className="difference-number">2</div>
                                    <div>
                                        <h3>No Sign-Up Required</h3>
                                        <p>Start building immediately. No email, no password, no hassle</p>
                                    </div>
                                </div>
                                <div className="difference-item">
                                    <div className="difference-number">3</div>
                                    <div>
                                        <h3>Complete Privacy</h3>
                                        <p>All data stored locally in your browser. We never see your information</p>
                                    </div>
                                </div>
                                <div className="difference-item">
                                    <div className="difference-number">4</div>
                                    <div>
                                        <h3>ATS-Optimized</h3>
                                        <p>Resumes formatted to pass Applicant Tracking Systems used by companies</p>
                                    </div>
                                </div>
                                <div className="difference-item">
                                    <div className="difference-number">5</div>
                                    <div>
                                        <h3>Instant PDF Export</h3>
                                        <p>Download professional PDFs with perfect formatting in seconds</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="legal-section">
                            <h2>Our Commitment</h2>
                            <p>
                                We're committed to keeping IMED Resume Builder:
                            </p>
                            <ul>
                                <li><strong>Free:</strong> No charges, ever. This is our gift to IMED students</li>
                                <li><strong>Private:</strong> Your data belongs to you and stays with you</li>
                                <li><strong>Simple:</strong> Easy to use, even if you're not tech-savvy</li>
                                <li><strong>Updated:</strong> Regular improvements based on student feedback</li>
                                <li><strong>Accessible:</strong> Available 24/7 whenever you need it</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Join Thousands of IMED Students</h2>
                            <p>
                                Over 5,000 IMED students have already used our resume builder to create professional resumes
                                for their placements and internships. With a 98% placement success rate among our users,
                                we're proud to be part of your career journey.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Get in Touch</h2>
                            <p>
                                We love hearing from IMED students! Whether you have feedback, suggestions, or need help,
                                please reach out through our <a href="/contact" className="legal-link">Contact Us</a> page.
                            </p>
                        </section>

                        <div className="about-cta">
                            <h3>Ready to Build Your Resume?</h3>
                            <p>Join thousands of IMED students who've created their professional resumes with us</p>
                            <button className="btn-primary" onClick={() => navigate('/builder')}>
                                Start Building Now
                                <ArrowLeft className="w-5 h-5" style={{ transform: 'rotate(180deg)' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
