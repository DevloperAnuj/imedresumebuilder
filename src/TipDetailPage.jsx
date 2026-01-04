import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, FileText, Search, Lightbulb, Award, Briefcase, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { postsData } from './TipsPage';

const getIconComponent = (iconName) => {
    const icons = {
        FileText, Search, Lightbulb, Award, Briefcase, Target, CheckCircle, TrendingUp
    };
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-12 h-12" /> : <FileText className="w-12 h-12" />;
};

const TipDetailPage = () => {
    const navigate = useNavigate();
    const { slug } = useParams();

    const post = postsData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="legal-page">
                <div className="legal-header">
                    <div className="container">
                        <button className="back-button" onClick={() => navigate('/tips')}>
                            <ArrowLeft className="w-5 h-5" />
                            Back to Tips
                        </button>
                        <div className="legal-title-section">
                            <h1 className="legal-title">Post Not Found</h1>
                            <p className="legal-subtitle">The tip you're looking for doesn't exist</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const categories = {
        'resume-basics': 'Resume Basics',
        'ats-optimization': 'ATS Optimization',
        'content-writing': 'Content Writing',
        'skills': 'Skills',
        'experience': 'Experience',
        'projects': 'Projects',
        'formatting': 'Formatting',
        'tips': 'Quick Tips'
    };

    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <button className="back-button" onClick={() => navigate('/tips')}>
                        <ArrowLeft className="w-5 h-5" />
                        Back to All Tips
                    </button>
                    <div className="legal-title-section">
                        <div className="tip-detail-icon">
                            {getIconComponent(post.icon)}
                        </div>
                        <div className="tip-detail-meta">
                            <span className="tip-detail-category">
                                <Tag className="w-4 h-4" />
                                {categories[post.category]}
                            </span>
                            <span className="tip-detail-read-time">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                        <h1 className="legal-title">{post.title}</h1>
                        <p className="legal-subtitle">{post.excerpt}</p>
                    </div>
                </div>
            </div>

            <div className="legal-content">
                <div className="container">
                    <div className="legal-card">
                        <div className="tip-detail-content">
                            {post.content.map((section, idx) => (
                                <div key={idx} className="tip-detail-section">
                                    <h2>{section.heading}</h2>
                                    <ul>
                                        {section.points.map((point, pidx) => (
                                            <li key={pidx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="tip-detail-footer">
                            <div className="tip-detail-cta">
                                <h3>Ready to build your resume?</h3>
                                <p>Use our free resume builder to create a professional resume for IMED placements</p>
                                <button
                                    className="btn-primary"
                                    onClick={() => navigate('/builder')}
                                >
                                    Start Building Your Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipDetailPage;
