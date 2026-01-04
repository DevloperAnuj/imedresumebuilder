import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, TrendingUp, Target, CheckCircle, Lightbulb, FileText, Search, Award, Briefcase, ChevronRight } from 'lucide-react';

// Export posts data for use in individual post pages
export const postsData = [
    {
        id: 1,
        slug: 'how-to-build-perfect-resume',
        category: 'resume-basics',
        icon: 'FileText',
        title: "How to Build a Perfect Resume for IMED Students",
        excerpt: "Learn the essential components every IMED student needs in their resume for campus placements and internships.",
        readTime: "5 min read",
        content: [
            {
                heading: "Essential Sections for Your Resume",
                points: [
                    "Personal Details: Include your name, contact info, email, and LinkedIn profile",
                    "Career Objective: Write a concise 2-3 line statement about your career goals",
                    "Education: List your MBA, graduation, HSC, and SSC with marks/CGPA",
                    "Internships: Highlight your summer internships and learning outcomes",
                    "Projects: Showcase both college and personal projects with impact",
                    "Skills: Separate technical and soft skills clearly",
                    "Certifications: Add relevant courses and certifications",
                    "Declaration: Standard declaration with place and date"
                ]
            },
            {
                heading: "Formatting Best Practices",
                points: [
                    "Keep it to 1-2 pages maximum",
                    "Use consistent fonts (Arial, Calibri, or Times New Roman)",
                    "Maintain proper margins (2cm on all sides)",
                    "Use bullet points for better readability",
                    "Avoid fancy colors or graphics",
                    "Ensure proper spacing between sections"
                ]
            },
            {
                heading: "Common Mistakes to Avoid",
                points: [
                    "Don't include a photo (unless specifically requested)",
                    "Avoid spelling and grammatical errors",
                    "Don't use unprofessional email addresses",
                    "Don't lie or exaggerate your achievements",
                    "Avoid using 'I', 'me', 'my' - use action verbs instead"
                ]
            }
        ]
    },
    {
        id: 2,
        slug: 'ats-friendly-resume',
        category: 'ats-optimization',
        icon: 'Search',
        title: "Making Your Resume ATS-Friendly",
        excerpt: "Understand how Applicant Tracking Systems work and optimize your resume to pass ATS screening.",
        readTime: "6 min read",
        content: [
            {
                heading: "What is ATS?",
                points: [
                    "ATS (Applicant Tracking System) is software used by companies to screen resumes",
                    "Over 90% of large companies use ATS to filter applications",
                    "ATS scans resumes for keywords, skills, and qualifications",
                    "Only resumes that pass ATS reach human recruiters"
                ]
            },
            {
                heading: "ATS Optimization Tips",
                points: [
                    "Use standard section headings (Education, Experience, Skills)",
                    "Include keywords from the job description naturally",
                    "Use simple, clean formatting without tables or columns",
                    "Avoid headers, footers, and text boxes",
                    "Save as PDF or DOCX format (check job posting requirements)",
                    "Use standard fonts like Arial, Calibri, or Times New Roman",
                    "Spell out acronyms at least once (e.g., 'MBA (Master of Business Administration)')"
                ]
            },
            {
                heading: "Keywords to Include",
                points: [
                    "Technical skills mentioned in job description",
                    "Industry-specific terminology",
                    "Soft skills like 'leadership', 'teamwork', 'communication'",
                    "Certifications and tools you know",
                    "Action verbs: 'managed', 'developed', 'analyzed', 'led'"
                ]
            },
            {
                heading: "What ATS Cannot Read",
                points: [
                    "Images and graphics",
                    "Text in headers or footers",
                    "Complex tables and columns",
                    "Fancy fonts or special characters",
                    "Text boxes and shapes"
                ]
            }
        ]
    },
    {
        id: 3,
        slug: 'writing-career-objectives',
        category: 'content-writing',
        icon: 'Lightbulb',
        title: "Writing Powerful Career Objectives",
        excerpt: "Craft a compelling career objective that grabs recruiters' attention in the first few seconds.",
        readTime: "4 min read",
        content: [
            {
                heading: "What Makes a Good Career Objective?",
                points: [
                    "Concise: Keep it to 2-3 lines maximum",
                    "Specific: Mention your field and career goals",
                    "Value-focused: Show what you bring to the company",
                    "Professional: Use formal language and tone"
                ]
            },
            {
                heading: "Formula for Writing Objectives",
                points: [
                    "Start with your current status (e.g., 'MBA student with specialization in...')",
                    "Mention your key skills or strengths",
                    "State what position you're seeking",
                    "End with how you'll add value to the organization"
                ]
            },
            {
                heading: "Examples for IMED Students",
                points: [
                    "Marketing: 'Dynamic MBA student specializing in Marketing seeking to leverage digital marketing skills and creative thinking to drive brand growth in a progressive organization.'",
                    "Finance: 'Results-oriented MBA Finance graduate with strong analytical skills seeking a challenging role in financial analysis to contribute to organizational growth.'",
                    "Operations: 'MBA student with expertise in operations management and process optimization seeking to apply lean methodologies in a fast-paced manufacturing environment.'"
                ]
            },
            {
                heading: "What to Avoid",
                points: [
                    "Generic statements like 'seeking a challenging position'",
                    "Focusing only on what you want, not what you offer",
                    "Being too vague or too specific",
                    "Using clichés and overused phrases"
                ]
            }
        ]
    },
    {
        id: 4,
        slug: 'top-skills-for-placements',
        category: 'skills',
        icon: 'Award',
        title: "Top Skills to Include for Campus Placements",
        excerpt: "Discover the most in-demand skills that recruiters look for in IMED students during campus placements.",
        readTime: "5 min read",
        content: [
            {
                heading: "Technical Skills (Based on Specialization)",
                points: [
                    "Marketing: Digital Marketing, SEO/SEM, Google Analytics, Social Media Marketing, Content Marketing",
                    "Finance: Financial Modeling, Excel (Advanced), Tally, SAP, Financial Analysis, Valuation",
                    "HR: HRIS Software, Recruitment Tools, Performance Management, Employee Engagement",
                    "Operations: Supply Chain Management, Six Sigma, Lean Manufacturing, ERP Systems, Project Management",
                    "General: MS Office Suite, Data Analysis, SQL, Python (Basic), Presentation Skills"
                ]
            },
            {
                heading: "Soft Skills (Universal)",
                points: [
                    "Communication: Written and verbal communication skills",
                    "Leadership: Team leadership and management abilities",
                    "Problem-Solving: Analytical and critical thinking",
                    "Teamwork: Collaboration and interpersonal skills",
                    "Time Management: Ability to prioritize and meet deadlines",
                    "Adaptability: Flexibility in changing environments",
                    "Attention to Detail: Accuracy and thoroughness"
                ]
            },
            {
                heading: "How to Present Skills",
                points: [
                    "Separate technical and soft skills into different sections",
                    "List skills in order of relevance to the job",
                    "Be honest - only list skills you actually have",
                    "Provide proficiency levels if relevant (e.g., 'Advanced Excel')",
                    "Back up skills with examples in your experience section"
                ]
            },
            {
                heading: "Skills to Develop Before Placements",
                points: [
                    "Advanced Excel (VLOOKUP, Pivot Tables, Macros)",
                    "PowerPoint presentation skills",
                    "Basic data analysis and visualization",
                    "Business communication and email etiquette",
                    "Industry-specific software for your specialization"
                ]
            }
        ]
    },
    {
        id: 5,
        slug: 'describe-internship-experience',
        category: 'experience',
        icon: 'Briefcase',
        title: "How to Describe Your Internship Experience",
        excerpt: "Transform your internship experiences into compelling resume content that showcases your value.",
        readTime: "5 min read",
        content: [
            {
                heading: "Structure for Internship Descriptions",
                points: [
                    "Start with company name and duration",
                    "Mention your role/designation",
                    "Use action verbs to describe responsibilities",
                    "Quantify achievements with numbers where possible",
                    "Highlight key learnings and outcomes"
                ]
            },
            {
                heading: "Powerful Action Verbs to Use",
                points: [
                    "Leadership: Led, Managed, Coordinated, Supervised, Directed",
                    "Analysis: Analyzed, Evaluated, Assessed, Researched, Investigated",
                    "Achievement: Achieved, Accomplished, Delivered, Exceeded, Improved",
                    "Creation: Developed, Created, Designed, Built, Implemented",
                    "Communication: Presented, Communicated, Collaborated, Negotiated"
                ]
            },
            {
                heading: "Examples of Good Descriptions",
                points: [
                    "Weak: 'Worked on marketing campaigns'",
                    "Strong: 'Developed and executed 3 social media campaigns that increased engagement by 25% over 2 months'",
                    "Weak: 'Helped with data analysis'",
                    "Strong: 'Analyzed sales data for 500+ products using Excel, identifying top 10 revenue drivers and presenting insights to senior management'"
                ]
            },
            {
                heading: "Quantifying Your Impact",
                points: [
                    "Use percentages: 'Increased efficiency by 20%'",
                    "Use numbers: 'Managed database of 1000+ customer records'",
                    "Use time frames: 'Completed project 2 weeks ahead of schedule'",
                    "Use comparisons: 'Reduced costs by ₹50,000 annually'"
                ]
            }
        ]
    },
    {
        id: 6,
        slug: 'showcasing-projects',
        category: 'projects',
        icon: 'Target',
        title: "Showcasing Projects Effectively",
        excerpt: "Learn how to present your college and personal projects to demonstrate practical skills and initiative.",
        readTime: "4 min read",
        content: [
            {
                heading: "Types of Projects to Include",
                points: [
                    "College Projects: Academic projects from your MBA/graduation",
                    "Personal Projects: Side projects, apps, websites you built",
                    "Freelance Work: Any paid or unpaid freelance projects",
                    "Case Study Competitions: Participation in business competitions",
                    "Research Projects: Any research work or publications"
                ]
            },
            {
                heading: "How to Describe Projects",
                points: [
                    "Project Title: Clear, descriptive name",
                    "Technology/Tools: Mention tools, software, or methodologies used",
                    "Description: Brief 1-2 line summary of what the project does",
                    "Your Role: What specifically you contributed",
                    "Impact/Outcome: Results achieved or learning outcomes",
                    "Link: Include GitHub/live demo links if available"
                ]
            },
            {
                heading: "Example Project Descriptions",
                points: [
                    "Marketing: 'Digital Marketing Campaign Analysis - Analyzed 6-month campaign data for a local startup using Google Analytics, identifying key customer segments and recommending strategies that improved ROI by 15%'",
                    "Finance: 'Stock Portfolio Optimization - Built an Excel-based portfolio optimization model using historical data of 20 stocks, implementing Markowitz theory to maximize returns while minimizing risk'",
                    "Tech: 'Expense Tracker Mobile App - Developed a React Native app for personal expense tracking with features like category-wise analysis, budget alerts, and visual reports. Available on GitHub.'"
                ]
            },
            {
                heading: "Projects That Stand Out",
                points: [
                    "Projects that solve real problems",
                    "Projects with measurable outcomes",
                    "Projects using current technologies/methodologies",
                    "Projects with live demos or GitHub links",
                    "Projects done independently (shows initiative)"
                ]
            }
        ]
    },
    {
        id: 7,
        slug: 'resume-formatting-guide',
        category: 'formatting',
        icon: 'CheckCircle',
        title: "Resume Formatting Do's and Don'ts",
        excerpt: "Master the visual presentation of your resume with these essential formatting guidelines.",
        readTime: "4 min read",
        content: [
            {
                heading: "Do's - Best Practices",
                points: [
                    "✅ Use consistent font sizes (10-12pt for body, 14-16pt for name)",
                    "✅ Maintain uniform margins (2cm on all sides)",
                    "✅ Use bullet points for lists and achievements",
                    "✅ Keep consistent spacing between sections",
                    "✅ Use bold for headings and important information",
                    "✅ Align text properly (left-aligned is safest)",
                    "✅ Use white space effectively - don't overcrowd",
                    "✅ Save as PDF to preserve formatting"
                ]
            },
            {
                heading: "Don'ts - Common Mistakes",
                points: [
                    "❌ Don't use multiple fonts (stick to 1-2 maximum)",
                    "❌ Don't use bright colors or backgrounds",
                    "❌ Don't include photos (unless specifically requested)",
                    "❌ Don't use tables for layout (ATS can't read them)",
                    "❌ Don't use headers/footers for important info",
                    "❌ Don't make text too small to fit more content",
                    "❌ Don't use decorative fonts or special characters",
                    "❌ Don't exceed 2 pages"
                ]
            },
            {
                heading: "Recommended Fonts",
                points: [
                    "Professional: Arial, Calibri, Helvetica",
                    "Traditional: Times New Roman, Georgia",
                    "Modern: Roboto, Open Sans (if company is tech-focused)",
                    "Font Size: 10-12pt for body text, 14-16pt for your name"
                ]
            },
            {
                heading: "Section Order",
                points: [
                    "1. Header (Name and Contact Info)",
                    "2. Career Objective",
                    "3. Education",
                    "4. Internships/Experience",
                    "5. Projects",
                    "6. Skills (Technical & Soft)",
                    "7. Certifications",
                    "8. Extra-curricular Activities",
                    "9. Declaration"
                ]
            }
        ]
    },
    {
        id: 8,
        slug: 'last-minute-tips',
        category: 'tips',
        icon: 'TrendingUp',
        title: "Last-Minute Resume Tips Before Placements",
        excerpt: "Quick checklist and final touches to ensure your resume is placement-ready.",
        readTime: "3 min read",
        content: [
            {
                heading: "Final Checklist",
                points: [
                    "✓ Proofread 3 times for spelling and grammar errors",
                    "✓ Ask 2-3 people to review your resume",
                    "✓ Verify all contact information is correct",
                    "✓ Ensure all dates and numbers are accurate",
                    "✓ Check that file name is professional (e.g., 'John_Doe_Resume.pdf')",
                    "✓ Test PDF opens correctly on different devices",
                    "✓ Keep multiple versions for different job types"
                ]
            },
            {
                heading: "Customization Tips",
                points: [
                    "Tailor your objective for each company/role",
                    "Highlight relevant skills based on job description",
                    "Reorder sections to emphasize relevant experience",
                    "Add keywords from job posting naturally",
                    "Keep a master resume and create targeted versions"
                ]
            },
            {
                heading: "Common Last-Minute Mistakes",
                points: [
                    "Forgetting to update the date in declaration",
                    "Leaving placeholder text or dummy content",
                    "Not updating phone number or email",
                    "Sending wrong version of resume",
                    "File name like 'Resume_Final_Final_v3.pdf'"
                ]
            },
            {
                heading: "Quick Wins",
                points: [
                    "Add LinkedIn profile URL if it's updated",
                    "Include GitHub link if you have coding projects",
                    "Quantify at least 3 achievements with numbers",
                    "Remove outdated or irrelevant information",
                    "Ensure resume fits on 1-2 pages without cramming"
                ]
            }
        ]
    }
];

const getIconComponent = (iconName) => {
    const icons = {
        FileText, Search, Lightbulb, Award, Briefcase, Target, CheckCircle, TrendingUp
    };
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : <FileText className="w-6 h-6" />;
};

const TipsPage = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Tips', icon: <BookOpen className="w-4 h-4" /> },
        { id: 'resume-basics', name: 'Resume Basics', icon: <FileText className="w-4 h-4" /> },
        { id: 'ats-optimization', name: 'ATS Optimization', icon: <Search className="w-4 h-4" /> },
        { id: 'content-writing', name: 'Content Writing', icon: <Lightbulb className="w-4 h-4" /> },
        { id: 'skills', name: 'Skills', icon: <Award className="w-4 h-4" /> },
        { id: 'experience', name: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
        { id: 'projects', name: 'Projects', icon: <Target className="w-4 h-4" /> },
        { id: 'formatting', name: 'Formatting', icon: <CheckCircle className="w-4 h-4" /> },
        { id: 'tips', name: 'Quick Tips', icon: <TrendingUp className="w-4 h-4" /> }
    ];

    const filteredPosts = selectedCategory === 'all'
        ? postsData
        : postsData.filter(post => post.category === selectedCategory);

    return (
        <div className="legal-page">
            <div className="legal-header">
                <div className="container">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>
                    <div className="legal-title-section">
                        <BookOpen className="legal-icon" />
                        <h1 className="legal-title">Resume Building Tips & Guides</h1>
                        <p className="legal-subtitle">Expert advice for IMED students to create winning resumes</p>
                    </div>
                </div>
            </div>

            <div className="legal-content">
                <div className="container">
                    {/* Category Filter */}
                    <div className="tips-categories">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            >
                                {category.icon}
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Posts Grid */}
                    <div className="tips-grid">
                        {filteredPosts.map(post => (
                            <div key={post.id} className="tip-card">
                                <div className="tip-card-header">
                                    <div className="tip-icon">
                                        {getIconComponent(post.icon)}
                                    </div>
                                    <div className="tip-meta">
                                        <span className="tip-category">{categories.find(c => c.id === post.category)?.name}</span>
                                        <span className="tip-read-time">{post.readTime}</span>
                                    </div>
                                </div>
                                <h3 className="tip-title">{post.title}</h3>
                                <p className="tip-excerpt">{post.excerpt}</p>

                                <button
                                    className="tip-read-more"
                                    onClick={() => navigate(`/tips/${post.slug}`)}
                                >
                                    Read More
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="no-posts">
                            <BookOpen className="w-16 h-16" />
                            <p>No tips found in this category</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TipsPage;
