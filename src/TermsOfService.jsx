import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
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
                        <FileText className="legal-icon" />
                        <h1 className="legal-title">Terms of Service</h1>
                        <p className="legal-subtitle">Last updated: January 4, 2026</p>
                    </div>
                </div>
            </div>

            <div className="legal-content">
                <div className="container">
                    <div className="legal-card">
                        <div className="legal-intro">
                            <p>
                                Welcome to IMED Resume Builder. By accessing or using our service, you agree to be bound by these Terms of Service. Please read them carefully.
                            </p>
                        </div>

                        <section className="legal-section">
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By using IMED Resume Builder, you confirm that you are an IMED student or have authorization to use this service. You agree to comply with these Terms of Service and all applicable laws and regulations.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>2. Service Description</h2>
                            <p>
                                IMED Resume Builder is a free, web-based tool designed exclusively for IMED students to create professional resumes for internships, placements, and campus recruitment drives. The service includes:
                            </p>
                            <ul>
                                <li>Resume creation and editing tools</li>
                                <li>Professional templates</li>
                                <li>PDF export functionality</li>
                                <li>Local browser storage of resume data</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>3. User Responsibilities</h2>
                            <p>As a user of IMED Resume Builder, you agree to:</p>
                            <ul>
                                <li>Provide accurate and truthful information in your resume</li>
                                <li>Use the service only for lawful purposes</li>
                                <li>Not attempt to hack, reverse engineer, or compromise the service</li>
                                <li>Not use the service to create fraudulent or misleading resumes</li>
                                <li>Respect intellectual property rights</li>
                                <li>Back up your resume data regularly by downloading PDFs</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>4. Intellectual Property</h2>
                            <p>
                                The IMED Resume Builder platform, including its design, code, and templates, is owned by IMED Resume Builder. You retain all rights to the content you create using our service.
                            </p>
                            <ul>
                                <li>You own 100% of your resume content</li>
                                <li>We claim no ownership over your personal information or resume data</li>
                                <li>You may use your generated resume for any lawful purpose</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>5. Service Availability</h2>
                            <p>
                                We strive to keep IMED Resume Builder available 24/7, but we do not guarantee uninterrupted access. The service may be temporarily unavailable due to:
                            </p>
                            <ul>
                                <li>Maintenance and updates</li>
                                <li>Technical issues or server problems</li>
                                <li>Circumstances beyond our control</li>
                            </ul>
                            <p>
                                <strong>Important:</strong> Always download and save your resume as a PDF to avoid data loss.
                            </p>
                        </section>

                        <section className="legal-section">
                            <div className="warning-box">
                                <AlertCircle className="w-6 h-6" />
                                <div>
                                    <h3>Disclaimer of Warranties</h3>
                                    <p>
                                        IMED Resume Builder is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. We do not guarantee that:
                                    </p>
                                    <ul>
                                        <li>The service will meet your specific requirements</li>
                                        <li>The service will be error-free or uninterrupted</li>
                                        <li>Your resume will result in job placement or interview calls</li>
                                        <li>Data stored in browser localStorage will never be lost</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="legal-section">
                            <h2>7. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, IMED Resume Builder and its creators shall not be liable for:
                            </p>
                            <ul>
                                <li>Any indirect, incidental, or consequential damages</li>
                                <li>Loss of data due to browser storage limitations or clearing</li>
                                <li>Errors or inaccuracies in resume content you create</li>
                                <li>Outcomes of job applications or placements</li>
                                <li>Any damages resulting from use or inability to use the service</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>8. Data Storage and Backup</h2>
                            <p>
                                Your resume data is stored locally in your browser's localStorage. You acknowledge that:
                            </p>
                            <ul>
                                <li>We are not responsible for data loss due to browser clearing or device issues</li>
                                <li>You should regularly download your resume as PDF for backup</li>
                                <li>Switching browsers or devices will not transfer your saved data</li>
                                <li>We do not provide cloud backup or data recovery services</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>9. Free Service</h2>
                            <p>
                                IMED Resume Builder is provided free of charge to IMED students. We reserve the right to:
                            </p>
                            <ul>
                                <li>Modify or discontinue the service at any time</li>
                                <li>Introduce premium features in the future</li>
                                <li>Change these terms with notice to users</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>10. Prohibited Uses</h2>
                            <p>You may not use IMED Resume Builder to:</p>
                            <ul>
                                <li>Create fraudulent or misleading resumes</li>
                                <li>Impersonate others or misrepresent your credentials</li>
                                <li>Violate any applicable laws or regulations</li>
                                <li>Attempt to gain unauthorized access to the service</li>
                                <li>Distribute malware or harmful code</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>11. Modifications to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes constitutes acceptance of the modified terms.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>12. Governing Law</h2>
                            <p>
                                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>13. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms of Service, please contact us through our <a href="/contact" className="legal-link">Contact Us</a> page.
                            </p>
                        </section>

                        <div className="legal-footer-note">
                            <p>
                                By using IMED Resume Builder, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
