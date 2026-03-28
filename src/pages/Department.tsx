import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Download, FileText, Menu, X, Users, BookOpen, FlaskConical, Award, Briefcase, ChevronDown, Linkedin, Mail, Trophy, ArrowRight, Calendar } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';

const SIDEBAR_GROUPS = [
  {
    title: "About Department",
    items: [
      { id: "about", label: "About Civil Engineering" }, // Will be dynamic
      { id: "programmes", label: "Programmes Offered" },
      { id: "contacts", label: "Contacts" }
    ]
  },
  {
    title: "People",
    items: [
      { id: "faculty", label: "Faculty Profiles" },
      { id: "staff", label: "Supporting Staff" }
    ]
  },
  {
    title: "Academics",
    items: [
      { id: "schemes", label: "Schemes" },
      { id: "syllabus", label: "Syllabus" },
      { id: "timetable", label: "Time Table" },
      { id: "honours", label: "Honour and Minors" },
      { id: "manual", label: "Manual" }
    ]
  },
  {
    title: "Outcome Based Education",
    items: [
      { id: "obe-process", label: "Outcome Based Education (OBE) Process" },
      { id: "pos-peos-psos", label: "POs-PEOs-PSOs" },
      { id: "course-outcomes", label: "Course Outcomes" },
      { id: "co-attained", label: "Course Outcomes Attained" },
      { id: "po-attainment", label: "Attainment of Program Outcomes" }
    ]
  },
  {
    title: "Committees",
    items: [
      { id: "bos", label: "Board of Studies (BoS)" },
      { id: "dept-committees", label: "Departmental Committees" },
      { id: "course-committees", label: "Course Committees" }
    ]
  },
  {
    title: "Research & Development",
    items: [
      { id: "research-areas", label: "Research Areas" },
      { id: "research", label: "Research" },
      { id: "publications", label: "Publications" },
      { id: "rnd-activities", label: "R&D Activities" }
    ]
  },
  {
    title: "Infrastructure",
    items: [
      { id: "laboratories", label: "Laboratories" },
      { id: "gallery", label: "Gallery" }
    ]
  },
  {
    title: "Activities & Achievements",
    items: [
      { id: "events", label: "Departmental Events" },
      { id: "achievements", label: "Achievements" },
      { id: "student-achievers", label: "Student Achievers" },
      { id: "newsletter", label: "Newsletter" }
    ]
  },
  {
    title: "Other",
    items: [
      { id: "downloads", label: "Downloads" },
      { id: "feedback", label: "Feedback" }
    ]
  }
];

export const Department = () => {
  const { id } = useParams();
  const department = DEPARTMENTS.find(d => d.id === id) || DEPARTMENTS[0];
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update dynamic labels
  const dynamicGroups = SIDEBAR_GROUPS.map(group => ({
    ...group,
    items: group.items.map(item => {
      if (item.id === 'about') return { ...item, label: `About ${department.name}` };
      return item;
    })
  }));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [activeSection, id]);

  const renderContent = () => {
    const section = dynamicGroups.flatMap(g => g.items).find(i => i.id === activeSection);
    const title = section?.label || 'Section';

    switch (activeSection) {
      case 'about':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="prose max-w-none text-black/80 leading-relaxed">
              <p className="mb-6 text-lg">{department.desc}</p>
              <p className="mb-6">The Department of {department.name} is committed to excellence in teaching, research, and innovation. We offer a comprehensive curriculum designed to meet industry standards and prepare students for global challenges. Our state-of-the-art facilities and experienced faculty ensure a robust learning environment.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-[#f2e8e3]/30 p-6 rounded-2xl border border-[#800000]/10">
                  <h3 className="text-xl font-bold text-[#800000] mb-4 flex items-center gap-2"><Award className="w-5 h-5" /> Vision</h3>
                  <p>To be a center of excellence in {department.name}, imparting quality education, conducting research of global relevance, and producing professionals who are socially responsible and technologically adept.</p>
                </div>
                <div className="bg-[#f2e8e3]/30 p-6 rounded-2xl border border-[#800000]/10">
                  <h3 className="text-xl font-bold text-[#800000] mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5" /> Mission</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To produce highly competent professionals through rigorous academic programs.</li>
                    <li>To foster innovative research and development addressing societal needs.</li>
                    <li>To promote strong industry-institute interaction for practical exposure.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#800000] text-white rounded-full font-medium hover:bg-[#600000] transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Department Brochure
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#800000] text-[#800000] rounded-full font-medium hover:bg-[#f2e8e3] transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Curriculum Handbook
                </a>
              </div>
            </div>
          </div>
        );
      case 'programmes':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="space-y-6">
              <div className="p-6 border border-black/10 rounded-2xl border-l-4 border-l-orange-500 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">B.Tech in {department.name}</h3>
                <p className="text-black/70 mb-4">A 4-year undergraduate program focusing on core principles, modern applications, and hands-on practical experience.</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <span className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full border border-orange-200">Intake: 120</span>
                  <span className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full border border-orange-200">Duration: 4 Years</span>
                </div>
              </div>
              <div className="p-6 border border-black/10 rounded-2xl border-l-4 border-l-blue-500 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">M.Tech in Advanced {department.name.split(' ')[0]}</h3>
                <p className="text-black/70 mb-4">A 2-year postgraduate program designed for specialized research, advanced studies, and industry leadership.</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-200">Intake: 18</span>
                  <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full border border-blue-200">Duration: 2 Years</span>
                </div>
              </div>
              <div className="p-6 border border-black/10 rounded-2xl border-l-4 border-l-green-500 bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Ph.D. Program</h3>
                <p className="text-black/70 mb-4">Doctoral research program in cutting-edge areas of technology, fostering innovation and academic excellence.</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <span className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full border border-green-200">Full-time / Part-time</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'faculty':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex gap-4 p-5 border border-black/10 rounded-2xl bg-white hover:shadow-lg transition-all group">
                  <div className="w-24 h-24 bg-gray-200 rounded-xl shrink-0 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Faculty" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#800000]">Dr. Faculty Name {i}</h4>
                    <p className="text-sm text-orange-600 font-medium mb-1">{i === 1 ? 'Professor & Head' : 'Assistant Professor'}</p>
                    <p className="text-xs text-black/60 mb-2">Ph.D. (IIT Delhi), M.Tech</p>
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-black/80 mb-1">Research Interests:</p>
                      <p className="text-xs text-black/70 line-clamp-2">Advanced computing, sustainable engineering, data analytics, artificial intelligence in structural design.</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex gap-3">
                        <a href="#" className="text-black/40 hover:text-[#0077b5] transition-colors" title="LinkedIn Profile">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-black/40 hover:text-[#ea4335] transition-colors" title="Email">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                      <button className="text-xs font-medium text-[#800000] hover:underline flex items-center gap-1">
                        Profile <ChevronRight className="w-3 h-3"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'laboratories':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-black/10 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gray-200 relative">
                    <img src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400`} alt="Lab" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">Advanced Lab {i}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-black/70 mb-4">Equipped with state-of-the-art instruments and software for practical training and advanced research.</p>
                    <button className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">View Equipment List <ChevronRight className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 p-8 bg-white border border-black/5 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="md:w-1/3 aspect-video md:aspect-square rounded-[2rem] overflow-hidden shrink-0">
                    <img 
                      src={`https://images.unsplash.com/photo-1540575861501-7ce0e220abb1?auto=format&fit=crop&q=80&w=600&h=600`} 
                      alt="Event" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-gold/20 text-oxford rounded-full text-[10px] font-bold uppercase tracking-widest">Workshop</div>
                      <div className="flex items-center gap-2 text-xs text-black/40 font-medium">
                        <Calendar className="w-3 h-3" />
                        <span>March {15 + i}, 2026</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-oxford mb-4 group-hover:text-[#800000] transition-colors leading-tight">National Workshop on {department.name} Innovations</h3>
                    <p className="text-black/60 mb-8 leading-relaxed">
                      A comprehensive workshop featuring industry experts discussing the latest trends and future directions in {department.name.toLowerCase()}.
                    </p>
                    <div className="flex items-center gap-6">
                      <button className="px-6 py-2 bg-oxford text-cream rounded-full text-sm font-medium hover:bg-oxford/90 transition-colors">Register Now</button>
                      <button className="text-sm font-bold text-oxford hover:underline flex items-center gap-1">
                        Details <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'achievements':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <p className="text-black/70 mb-10 text-lg">The Department of {department.name} takes pride in its consistent excellence and remarkable milestones achieved by faculty and students.</p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {department.achievements.map((achievement, idx) => {
                // Simple logic to pick icons based on keywords
                const lowerText = achievement.toLowerCase();
                let Icon = Award;
                let colorClass = "bg-orange-100 text-orange-600";
                
                if (lowerText.includes('grant') || lowerText.includes('funding') || lowerText.includes('₹')) {
                  Icon = Briefcase; // Using Briefcase for funding/grants as it's already imported
                  colorClass = "bg-emerald-100 text-emerald-600";
                } else if (lowerText.includes('prize') || lowerText.includes('won') || lowerText.includes('competition') || lowerText.includes('award')) {
                  Icon = Trophy; // Need to import Trophy
                  colorClass = "bg-amber-100 text-amber-600";
                } else if (lowerText.includes('paper') || lowerText.includes('published') || lowerText.includes('journal') || lowerText.includes('research')) {
                  Icon = BookOpen;
                  colorClass = "bg-blue-100 text-blue-600";
                } else if (lowerText.includes('mou') || lowerText.includes('collaboration') || lowerText.includes('signed')) {
                  Icon = Users;
                  colorClass = "bg-purple-100 text-purple-600";
                }

                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-8 bg-white border border-black/5 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${colorClass.split(' ')[0]}`} />
                    
                    <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-oxford mb-3 leading-tight group-hover:text-[#800000] transition-colors">
                      {achievement.split('.')[0]}
                    </h4>
                    
                    <p className="text-black/60 leading-relaxed italic">
                      {achievement.includes('.') ? achievement.substring(achievement.indexOf('.') + 1).trim() : ''}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-black/30">Achievement</span>
                      <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-16 p-10 bg-oxford text-cream rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Trophy className="w-40 h-40" />
              </div>
              <div className="relative z-10 max-w-xl">
                <h3 className="font-serif text-3xl mb-4">Continuing the Legacy</h3>
                <p className="text-cream/70 mb-8 leading-relaxed">
                  Our department remains dedicated to pushing the boundaries of {department.name.toLowerCase()} through rigorous academic standards and impactful research.
                </p>
                <Link to="/notice-board" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-oxford rounded-full font-bold hover:bg-gold/90 transition-colors">
                  View Latest Updates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        );
      case 'student-achievers':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-serif mb-6 text-[#800000]">{title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/300?img=${i + 20}`} 
                      alt="Student Achiever" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-oxford via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Gold Medalist</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1">Student Name {i}</h4>
                    <p className="text-sm text-white/70 mb-4">Batch of 2025 • CSE</p>
                    <div className="h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 border border-dashed border-black/20 rounded-[2rem] text-center">
              <p className="text-black/50 italic">Showing recent top achievers. To view the complete hall of fame, please visit the central placement cell.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-[#f2e8e3] text-[#800000] rounded-full flex items-center justify-center mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif mb-4 text-[#800000]">{title}</h2>
            <p className="text-black/60 max-w-lg mx-auto mb-8 text-lg">
              Detailed information regarding {title.toLowerCase()} for the {department.name} is currently being updated. Please check back later or contact the department office.
            </p>
            <button className="px-6 py-3 bg-[#800000] text-white rounded-full hover:bg-[#800000]/90 transition-colors flex items-center gap-2 font-medium shadow-lg shadow-[#800000]/20">
              <Download className="w-5 h-5" /> Download Related Document
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Sidebar Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-between w-full bg-white p-4 rounded-2xl shadow-sm border border-black/10 font-medium text-[#800000]"
          >
            <span>Department Menu</span>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Sidebar Navigation */}
          <div className={`lg:w-1/4 shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-6 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
              {dynamicGroups.map((group, idx) => (
                <div key={group.title} className={idx !== 0 ? "mt-8" : ""}>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-black/40 mb-3 px-2">{group.title}</h3>
                  <ul className="space-y-1">
                    {group.items.map(item => (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                            activeSection === item.id 
                              ? 'bg-[#800000] text-white font-medium shadow-md shadow-[#800000]/20' 
                              : 'hover:bg-[#f2e8e3]/50 text-black/70 hover:text-black'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-6 sm:p-8 md:p-12 min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
