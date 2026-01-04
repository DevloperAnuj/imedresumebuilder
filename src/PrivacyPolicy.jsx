import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

const PrivacyPolicy = () => {
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
                        <Shield className="legal-icon" />
                        <h1 className="legal-title">Privacy Policy</h1>
                        <p className="legal-subtitle">Last updated: January 4, 2026</p>
                    </div>
                </div>
            </div>

            <div className="legal-content">
                <div className="container">
                    <div className="legal-card">
                        <div className="legal-intro">
                            <p>
                                At IMED Resume Builder, we take your privacy seriously. This Privacy Policy explains how we handle your data when you use our resume building service designed exclusively for IMED students.
                            </p>
                        </div>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Database className="section-icon" />
                            </div>
                            <h2>Data Collection</h2>
                            <p>
                                <strong>We do NOT collect, store, or transmit your personal data.</strong> All resume data you enter is stored locally in your browser using localStorage. This means:
                            </p>
                            <ul>
                                <li>Your resume data never leaves your device</li>
                                <li>We have no access to your personal information</li>
                                <li>No data is sent to our servers or any third-party services</li>
                                <li>Your information remains completely private and secure</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Eye className="section-icon" />
                            </div>
                            <h2>Analytics</h2>
                            <p>
                                We use Firebase Analytics to understand how IMED students use our service. This helps us improve the tool. The analytics collect:
                            </p>
                            <ul>
                                <li>Anonymous usage statistics (page views, button clicks)</li>
                                <li>Device and browser information</li>
                                <li>General location data (country/city level only)</li>
                            </ul>
                            <p>
                                <strong>Important:</strong> Analytics data is completely anonymous and cannot be used to identify individual users.
                            </p>
                        </section>

                        <section className="legal-section">
                            <div className="section-icon-wrapper">
                                <Lock className="section-icon" />
                            </div>
                            <h2>Data Security</h2>
                            <p>
                                Since all your resume data is stored locally in your browser:
                            </p>
                            <ul>
                                <li>Only you have access to your resume data</li>
                                <li>Data persists until you clear your browser's localStorage</li>
                                <li>We recommend backing up your resume by downloading the PDF</li>
                                <li>Clearing browser data will delete your saved resume</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Third-Party Services</h2>
                            <p>We use the following third-party services:</p>
                            <ul>
                                <li><strong>Firebase Analytics:</strong> For anonymous usage analytics</li>
                                <li><strong>Google Fonts:</strong> For typography (no personal data collected)</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Cookies</h2>
                            <p>
                                We use minimal cookies only for:
                            </p>
                            <ul>
                                <li>Firebase Analytics functionality</li>
                                <li>Storing your preferences (if any)</li>
                            </ul>
                            <p>No tracking cookies or advertising cookies are used.</p>
                        </section>

                        <section className="legal-section">
                            <h2>Your Rights</h2>
                            <p>Since we don't collect or store your personal data, you have complete control:</p>
                            <ul>
                                <li>You can clear your resume data anytime by clearing browser localStorage</li>
                                <li>You can use the service without providing any personal information</li>
                                <li>You can export your resume as PDF and delete local data</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Children's Privacy</h2>
                            <p>
                                Our service is designed for IMED students who are typically 18 years or older. We do not knowingly collect data from anyone under 13 years of age.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Changes to Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify users of any material changes by updating the "Last updated" date at the top of this policy.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us through our <a href="/contact" className="legal-link">Contact Us</a> page.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
