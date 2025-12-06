import React, { useState } from 'react';
import { Plus, Trash2, Printer, Eye, Edit2 } from 'lucide-react';

import headerImg from './Untitled.png';

// --- Components ---
const SectionTitle = ({ title }) => (
    <div className="bg-[#dae3f3] border border-[#7f7f7f] text-black px-2 py-1 font-bold text-sm uppercase mt-5 mb-4">
        {title}
    </div>
);

// Helper for input fields
const Input = ({ value, onChange, placeholder, className = "", multiline = false, isEditing }) => {
    if (!isEditing) return <span className={className + " whitespace-pre-wrap"}>{value}</span>;

    if (multiline) {
        return (
            <textarea value={value} onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full bg-blue-50/50 border-b border-blue-200 focus:outline-none focus:border-blue-500 transition-colors p-1 ${className}`}
                rows={Math.max(2, value.split('\n').length)}
            />
        );
    }
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full bg-blue-50/50 border-b border-blue-200 focus:outline-none focus:border-blue-500 transition-colors px-1 ${className}`}
        />
    );
};

// Helper for Section Actions
const SectionActions = ({ onAdd, isEditing }) => {
    if (!isEditing) return null;
    return (
        <div className="flex justify-end mb-2 no-print">
            <button
                onClick={onAdd}
                className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
            >
                <Plus size={12} /> Add Item
            </button>
        </div>
    );
};

const DeleteButton = ({ onClick, isEditing }) => {
    if (!isEditing) return null;
    return (
        <button
            onClick={onClick}
            className="absolute -right-6 top-0 text-red-400 hover:text-red-600 p-1 no-print"
            title="Delete Item"
        >
            <Trash2 size={16} />
        </button>
    );
};

const ResumeBuilder = () => {
    const [isEditing, setIsEditing] = useState(true);

    // --- Initial State ---
    const [resumeData, setResumeData] = useState({
        // Static header image path (replace with your actual hosted image URL or local path)
        headerImage: headerImg,
        name: "John Doe",
        details: {
            course: "MBA General",
            specialization: "Marketing & Operations",
            dob: "01 January 2000",
            domicile: "State, Country",
            email: "john.doe@example.com",
            mobile: "9876543210",
            address: "123, Street Name, City, State, Country - 123456"
        },
        objective: "A highly motivated and results-oriented professional seeking a challenging position in a reputable organization to utilize my skills and education for the growth of the company while achieving personal career goals.",
        education: [
            { exam: "MBA", year: "2024", board: "University Name, City", marks: "8.5 CGPA" },
            { exam: "B. Tech", year: "2022", board: "Technical University, City", marks: "75.00 %" },
            { exam: "HSC", year: "2018", board: "State Board of Education", marks: "70.00 %" },
            { exam: "SSC", year: "2016", board: "State Board of Education", marks: "85.00 %" }
        ],
        internships: [
            "Summer Intern at ABC Corp, City from June 2023 – August 2023. Gained hands-on experience in market research and digital marketing strategies."
        ],
        experience: [
            "Junior Associate at XYZ Solutions from Jan 2024 to Present. Responsible for managing client relationships and assisting in project management tasks.",
            "Business Development Trainee at Tech Startups Inc. from June 2022 to Dec 2023. Assisted in lead generation and preparing sales pitches for potential clients."
        ],
        collegeProjects: [
            { title: "Smart Inventory Management System", description: "Developed a system to track inventory levels in real-time using IoT sensors, reducing stockouts by 20%." },
            { title: "Sustainable Energy Harvester", description: "Designed a prototype for harvesting energy from foot traffic in high-density areas." }
        ],
        personalProjects: [
            { title: "Budget Tracker App", description: "A mobile application to help students manage their monthly expenses. Features include expense categorization and visual reports.", link: "https://play.google.com/store/apps/details?id=com.example.budget" },
            { title: "Portfolio Website", description: "Designed and deployed a personal portfolio website to showcase academic and professional achievements.", link: "https://johndoe.com" }
        ],
        certifications: [
            { title: "Course on Computer Concepts (CCC)", description: "NIELIT, 2023" }
        ],
        technicalSkills: {
            col1: ["Python", "Java", "SQL", "HTML/CSS", "JavaScript"],
            col2: ["Git", "Docker", "AWS Basic", "Microsoft Office Suite"]
        },
        softSkills: ["Team Leadership", "Problem Solving", "Effective Communication", "Time Management"],
        activities: [
            { title: "Volunteer at Local NGO", description: "Organized community cleanup drives and awareness campaigns about environmental conservation." }
        ],
        strengths: ["Adaptability", "Fast Learner", "Positive Attitude", "Strategic Thinking"],
        interests: ["Reading", "Traveling", "Photography", "Chess"],
        socials: [
            { platform: "LinkedIn", link: "https://linkedin.com/in/johndoe" },
            { platform: "GitHub", link: "https://github.com/johndoe" }
        ],
        declaration: {
            text: "I hereby declare that all the facts given here are true to my knowledge.",
            place: "City",
            date: new Date().toLocaleDateString()
        }
    });

    // --- Handlers ---
    const handleInputChange = (section, field, value) => {
        if (section === 'root') {
            setResumeData({ ...resumeData, [field]: value });
        } else {
            setResumeData({ ...resumeData, [section]: { ...resumeData[section], [field]: value } });
        }
    };

    const handleArrayChange = (section, index, field, value) => {
        const newArray = [...resumeData[section]];
        if (typeof newArray[index] === 'object') {
            newArray[index] = { ...newArray[index], [field]: value };
        } else {
            newArray[index] = value;
        }
        setResumeData({ ...resumeData, [section]: newArray });
    };

    const addItem = (section, template) => {
        setResumeData({ ...resumeData, [section]: [...resumeData[section], template] });
    };

    const removeItem = (section, index) => {
        const newArray = [...resumeData[section]];
        newArray.splice(index, 1);
        setResumeData({ ...resumeData, [section]: newArray });
    };

    const handleTechSkillChange = (col, index, value) => {
        const newCols = [...resumeData.technicalSkills[col]];
        newCols[index] = value;
        setResumeData({
            ...resumeData,
            technicalSkills: { ...resumeData.technicalSkills, [col]: newCols }
        });
    };

    const addTechSkill = (col) => {
        const newCols = [...resumeData.technicalSkills[col], "New Skill"];
        setResumeData({
            ...resumeData,
            technicalSkills: { ...resumeData.technicalSkills, [col]: newCols }
        });
    };

    const removeTechSkill = (col, index) => {
        const newCols = [...resumeData.technicalSkills[col]];
        newCols.splice(index, 1);
        setResumeData({
            ...resumeData,
            technicalSkills: { ...resumeData.technicalSkills, [col]: newCols }
        });
    };

    const handlePrint = () => {
        // Ensure we are in preview mode before printing
        setIsEditing(false);
        setTimeout(() => {
            window.print();
        }, 100);
    };

    // --- Components ---


    return (
        <div className="min-h-screen bg-gray-200 font-sans flex flex-col items-center">

            {/* --- Toolbar --- */}
            <div className="w-full bg-white shadow-md p-4 sticky top-0 z-50 print:hidden flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">IMED Resume Builder</h1>
                <div className="flex gap-4">
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setIsEditing(true)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${isEditing ? 'bg-white shadow text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <Edit2 size={16} /> Edit
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${!isEditing ? 'bg-white shadow text-green-600' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <Eye size={16} /> Preview
                        </button>
                    </div>
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded shadow text-sm font-bold transition-colors"
                    >
                        <Printer size={16} /> Print / Save PDF
                    </button>
                </div>
            </div>

            {/* --- Main Resume Sheet --- */}
            <div className="my-8 print:my-0 print:w-full">
                <div
                    className="bg-white shadow-2xl print:shadow-none w-[210mm] min-h-[297mm] px-[20mm] mx-auto relative"
                >
                    <table className="w-full">
                        <thead>
                            <tr><td className="h-[20mm]"></td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {/* Static Header Image */}
                                    <header className="mb-6 border-b-2 border-transparent pb-4">
                                        <div className="w-full flex items-center justify-center">
                                            <img src={resumeData.headerImage} alt="Header" className="w-full max-h-40 object-contain" />
                                        </div>
                                    </header>

                                    {/* Name */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 text-lg">
                                            <span className="font-bold whitespace-nowrap">Name:</span>
                                            <Input
                                                isEditing={isEditing}
                                                value={resumeData.name}
                                                onChange={(v) => handleInputChange('root', 'name', v)}
                                                className="font-bold"
                                            />
                                        </div>
                                    </div>

                                    {/* Personal Details Grid */}
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm mb-6 font-sans">
                                        <div className="flex gap-1"><span className="font-bold">Course:</span> <Input isEditing={isEditing} value={resumeData.details.course} onChange={(v) => handleInputChange('details', 'course', v)} /></div>
                                        <div className="flex gap-1"><span className="font-bold">Specialization:</span> <Input isEditing={isEditing} value={resumeData.details.specialization} onChange={(v) => handleInputChange('details', 'specialization', v)} /></div>

                                        <div className="flex gap-1"><span className="font-bold">Date of Birth:</span> <Input isEditing={isEditing} value={resumeData.details.dob} onChange={(v) => handleInputChange('details', 'dob', v)} /></div>
                                        <div className="flex gap-1"><span className="font-bold">Area of Domicile:</span> <Input isEditing={isEditing} value={resumeData.details.domicile} onChange={(v) => handleInputChange('details', 'domicile', v)} /></div>

                                        <div className="flex gap-1"><span className="font-bold">Email:</span> <Input isEditing={isEditing} value={resumeData.details.email} onChange={(v) => handleInputChange('details', 'email', v)} /></div>
                                        <div className="flex gap-1"><span className="font-bold">Mobile:</span> <Input isEditing={isEditing} value={resumeData.details.mobile} onChange={(v) => handleInputChange('details', 'mobile', v)} /></div>

                                        <div className="col-span-2 mt-1 flex gap-1">
                                            <span className="font-bold whitespace-nowrap">Permanent Address:</span> <Input isEditing={isEditing} value={resumeData.details.address} onChange={(v) => handleInputChange('details', 'address', v)} multiline />
                                        </div>
                                    </div>

                                    {/* Career Objective */}
                                    {(isEditing || resumeData.objective) && (<div className="mb-6 group relative">
                                        <SectionTitle title="CAREER OBJECTIVE" />
                                        <div className="text-sm text-justify leading-relaxed font-sans">
                                            <Input isEditing={isEditing} value={resumeData.objective} onChange={(v) => handleInputChange('root', 'objective', v)} multiline />
                                        </div>
                                    </div>)}

                                    {/* Educational Qualification */}
                                    {(isEditing || resumeData.education.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="EDUCATIONAL QUALIFICATION" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('education', { exam: "New", year: "", board: "", marks: "" })} />

                                        <table className="w-full border-collapse text-sm font-sans">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    <th className="border border-black p-2 w-1/6 font-bold">Examination Passed</th>
                                                    <th className="border border-black p-2 w-1/6 font-bold">Year of Passing</th>
                                                    <th className="border border-black p-2 w-1/2 font-bold">Board/ University</th>
                                                    <th className="border border-black p-2 w-1/6 font-bold">% of Marks/SGPA</th>
                                                    {isEditing && <th className="w-8 print:hidden"></th>}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {resumeData.education.map((edu, idx) => (
                                                    <tr key={idx} className="relative group">
                                                        <td className="border border-black p-2 text-center align-top">
                                                            <Input isEditing={isEditing} value={edu.exam} onChange={(v) => handleArrayChange('education', idx, 'exam', v)} />
                                                        </td>
                                                        <td className="border border-black p-2 text-center align-top">
                                                            <Input isEditing={isEditing} value={edu.year} onChange={(v) => handleArrayChange('education', idx, 'year', v)} />
                                                        </td>
                                                        <td className="border border-black p-2 text-center align-top">
                                                            <Input isEditing={isEditing} value={edu.board} onChange={(v) => handleArrayChange('education', idx, 'board', v)} multiline />
                                                        </td>
                                                        <td className="border border-black p-2 text-center align-top">
                                                            <Input isEditing={isEditing} value={edu.marks} onChange={(v) => handleArrayChange('education', idx, 'marks', v)} />
                                                        </td>
                                                        {isEditing && (
                                                            <td className="border-0 p-1 text-center align-middle print:hidden">
                                                                <button onClick={() => removeItem('education', idx)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                                                            </td>
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>)}

                                    {/* Internships */}
                                    {(isEditing || resumeData.internships.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="INTERNSHIPS" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('internships', "New Internship Details")} />
                                        <ul className="list-disc ml-5 text-sm space-y-2 font-sans">
                                            {resumeData.internships.map((intern, idx) => (
                                                <li key={idx} className="pl-2 relative group">
                                                    <Input isEditing={isEditing} value={intern} onChange={(v) => handleArrayChange('internships', idx, null, v)} multiline />
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('internships', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Experience */}
                                    {(isEditing || resumeData.experience.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="EXPERIENCE" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('experience', "New Experience Details")} />
                                        <ul className="list-disc ml-5 text-sm space-y-4 font-sans">
                                            {resumeData.experience.map((exp, idx) => (
                                                <li key={idx} className="pl-2 text-justify relative group">
                                                    <Input isEditing={isEditing} value={exp} onChange={(v) => handleArrayChange('experience', idx, null, v)} multiline />
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('experience', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* College Projects */}
                                    {(isEditing || resumeData.collegeProjects.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="COLLEGE PROJECTS" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('collegeProjects', { title: "New Project", description: "Description" })} />
                                        <ul className="list-disc ml-5 text-sm space-y-4 font-sans">
                                            {resumeData.collegeProjects.map((proj, idx) => (
                                                <li key={idx} className="pl-2 text-justify relative group">
                                                    <div className="flex flex-col">
                                                        <span className="font-bold"><Input isEditing={isEditing} value={proj.title} onChange={(v) => handleArrayChange('collegeProjects', idx, 'title', v)} placeholder="Project Title" /></span>
                                                        <Input isEditing={isEditing} value={proj.description} onChange={(v) => handleArrayChange('collegeProjects', idx, 'description', v)} multiline placeholder="Description" />
                                                    </div>
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('collegeProjects', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Personal Projects */}
                                    {(isEditing || resumeData.personalProjects.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="PERSONAL PROJECTS" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('personalProjects', { title: "New App/Project", description: "Description", link: "" })} />
                                        <ul className="list-disc ml-5 text-sm space-y-4 font-sans">
                                            {resumeData.personalProjects.map((proj, idx) => (
                                                <li key={idx} className="pl-2 text-justify relative group">
                                                    <div className="flex flex-col">
                                                        <span className="font-bold"><Input isEditing={isEditing} value={proj.title} onChange={(v) => handleArrayChange('personalProjects', idx, 'title', v)} placeholder="Project Title" /></span>
                                                        <Input isEditing={isEditing} value={proj.description} onChange={(v) => handleArrayChange('personalProjects', idx, 'description', v)} multiline placeholder="Description" />
                                                        <div className="text-blue-700 underline break-all">
                                                            <Input isEditing={isEditing} value={proj.link} onChange={(v) => handleArrayChange('personalProjects', idx, 'link', v)} placeholder="http://link-to-project.com" />
                                                        </div>
                                                    </div>
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('personalProjects', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}


                                    {/* Certifications */}
                                    {(isEditing || resumeData.certifications.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="CERTIFICATIONS" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('certifications', { title: "Certification", description: "Issuer/Year" })} />
                                        <ul className="list-disc ml-5 text-sm space-y-4 font-sans">
                                            {resumeData.certifications.map((cert, idx) => (
                                                <li key={idx} className="pl-2 text-justify relative group">
                                                    <div className="flex flex-col">
                                                        <span className="font-bold"><Input isEditing={isEditing} value={cert.title} onChange={(v) => handleArrayChange('certifications', idx, 'title', v)} placeholder="Certification Title" /></span>
                                                        <Input isEditing={isEditing} value={cert.description} onChange={(v) => handleArrayChange('certifications', idx, 'description', v)} multiline placeholder="Issuing Authority / Details" />
                                                    </div>
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('certifications', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Technical Skills */}
                                    {(isEditing || resumeData.technicalSkills.col1.length > 0 || resumeData.technicalSkills.col2.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="TECHNICAL SKILLS" />
                                        <div className="grid grid-cols-2 gap-4 text-sm ml-5 font-sans">
                                            <div className="relative group">
                                                <SectionActions isEditing={isEditing} onAdd={() => addTechSkill('col1')} />
                                                <ul className="list-disc pl-2">
                                                    {resumeData.technicalSkills.col1.map((skill, idx) => (
                                                        <li key={idx} className="relative group">
                                                            <Input isEditing={isEditing} value={skill} onChange={(v) => handleTechSkillChange('col1', idx, v)} />
                                                            <DeleteButton isEditing={isEditing} onClick={() => removeTechSkill('col1', idx)} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="relative group">
                                                <SectionActions isEditing={isEditing} onAdd={() => addTechSkill('col2')} />
                                                <ul className="list-disc pl-2">
                                                    {resumeData.technicalSkills.col2.map((skill, idx) => (
                                                        <li key={idx} className="relative group">
                                                            <Input isEditing={isEditing} value={skill} onChange={(v) => handleTechSkillChange('col2', idx, v)} />
                                                            <DeleteButton isEditing={isEditing} onClick={() => removeTechSkill('col2', idx)} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>)}

                                    {/* Soft Skills */}
                                    {(isEditing || resumeData.softSkills.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="SOFT SKILLS" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('softSkills', "New Skill")} />
                                        <ul className="list-disc ml-5 text-sm space-y-1 font-sans">
                                            {resumeData.softSkills.map((skill, idx) => (
                                                <li key={idx} className="pl-2 relative group">
                                                    <Input isEditing={isEditing} value={skill} onChange={(v) => handleArrayChange('softSkills', idx, null, v)} />
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('softSkills', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Extra Curricular */}
                                    {(isEditing || resumeData.activities.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="EXTRA-CURRICULAR ACTIVITIES" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('activities', { title: "New Activity", description: "Details" })} />
                                        <ul className="list-disc ml-5 text-sm space-y-4 font-sans">
                                            {resumeData.activities.map((act, idx) => (
                                                <li key={idx} className="pl-2 text-justify relative group">
                                                    <div className="flex flex-col">
                                                        <span className="font-bold"><Input isEditing={isEditing} value={act.title} onChange={(v) => handleArrayChange('activities', idx, 'title', v)} /></span>
                                                        <Input isEditing={isEditing} value={act.description} onChange={(v) => handleArrayChange('activities', idx, 'description', v)} multiline />
                                                    </div>
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('activities', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Strengths */}
                                    {(isEditing || resumeData.strengths.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="STRENGTHS" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('strengths', "New Strength")} />
                                        <ul className="list-disc ml-5 text-sm space-y-1 font-sans">
                                            {resumeData.strengths.map((str, idx) => (
                                                <li key={idx} className="pl-2 relative group">
                                                    <Input isEditing={isEditing} value={str} onChange={(v) => handleArrayChange('strengths', idx, null, v)} />
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('strengths', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Interests */}
                                    {(isEditing || resumeData.interests.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="INTERESTS" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('interests', "New Interest")} />
                                        <ul className="list-disc ml-5 text-sm space-y-1 font-sans">
                                            {resumeData.interests.map((int, idx) => (
                                                <li key={idx} className="pl-2 relative group">
                                                    <Input isEditing={isEditing} value={int} onChange={(v) => handleArrayChange('interests', idx, null, v)} />
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('interests', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Social Profiles */}
                                    {(isEditing || resumeData.socials.length > 0) && (<div className="mb-6">
                                        <SectionTitle title="SOCIAL PROFILES" />
                                        <SectionActions isEditing={isEditing} onAdd={() => addItem('socials', { platform: "Platform", link: "Link" })} />
                                        <ul className="list-disc ml-5 text-sm space-y-1 font-sans">
                                            {resumeData.socials.map((social, idx) => (
                                                <li key={idx} className="pl-2 relative group flex gap-1 items-center">
                                                    <div className="w-24 shrink-0">
                                                        <Input isEditing={isEditing} value={social.platform} onChange={(v) => handleArrayChange('socials', idx, 'platform', v)} placeholder="Platform" />
                                                    </div>
                                                    <span>:-</span>
                                                    <div className="text-blue-700 underline flex-grow">
                                                        <Input isEditing={isEditing} value={social.link} onChange={(v) => handleArrayChange('socials', idx, 'link', v)} placeholder="Link" />
                                                    </div>
                                                    <DeleteButton isEditing={isEditing} onClick={() => removeItem('socials', idx)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}

                                    {/* Declaration */}
                                    {(isEditing || resumeData.declaration.text) && (<div className="mb-6 mt-10 font-sans">
                                        <SectionTitle title="DECLARATION" />
                                        <p className="text-sm mb-6">
                                            <Input isEditing={isEditing} value={resumeData.declaration.text} onChange={(v) => handleInputChange('declaration', 'text', v)} multiline />
                                        </p>

                                        <div className="text-sm font-bold mb-8 flex gap-1">
                                            Name: <Input isEditing={isEditing} value={resumeData.name} onChange={(v) => handleInputChange('root', 'name', v)} />
                                        </div>

                                        <div className="grid grid-cols-2 text-sm font-bold gap-8">
                                            <div className="flex gap-1">Place: <Input isEditing={isEditing} value={resumeData.declaration.place} onChange={(v) => handleInputChange('declaration', 'place', v)} /></div>
                                            <div className="flex gap-1">Date: <Input isEditing={isEditing} value={resumeData.declaration.date} onChange={(v) => handleInputChange('declaration', 'date', v)} /></div>
                                        </div>
                                    </div>)}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr><td className="h-[20mm]"></td></tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="py-6 text-gray-500 font-medium text-sm print:hidden">
                Built with ❤️ for IMED students.
            </div>
        </div>
    );
};

export default ResumeBuilder;
