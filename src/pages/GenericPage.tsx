import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, ArrowRight, CheckCircle2, Building, BookOpen, Users, Briefcase, GraduationCap, ShieldAlert, Link as LinkIcon, FileCheck, FileSpreadsheet, FlaskConical, Award, MapPin, Clock } from 'lucide-react';

// Dictionary to hold specific content for generic pages
const PAGE_CONTENT: Record<string, any> = {
  "Training & Placements": {
    icon: Briefcase,
    description: "MITS Gwalior has a stellar placement record with top recruiters from across the globe visiting our campus annually. Our dedicated Training and Placement Cell ensures students are industry-ready.",
    sections: [
      {
        title: "Placement Statistics 2023-24",
        content: "Over 85% of eligible students placed. Highest package: 1.02 CPA. Average package: 7.5 LPA.",
        type: "stats"
      },
      {
        title: "Top Recruiters",
        content: "TCS, Infosys, Wipro, Cognizant, Accenture, IBM, Amazon, Microsoft, L&T, and many more.",
        type: "text"
      }
    ],
    links: [
      { title: "Placement Brochure 2024", url: "#" },
      { title: "Recruiter Registration Form", url: "#" },
      { title: "Placement Policy", url: "#" }
    ]
  },
  "Library": {
    icon: BookOpen,
    description: "The Central Library is the heart of academic and research activities at MITS, offering a vast collection of resources, digital databases, and quiet reading spaces.",
    sections: [
      {
        title: "Resources Available",
        content: "1,00,000+ Books, 500+ e-Journals, Digital Library access, Reading Halls, Reference Section.",
        type: "text"
      },
      {
        title: "Timings",
        content: "Monday to Saturday: 8:00 AM to 8:00 PM. Sunday: 10:00 AM to 4:00 PM.",
        type: "text"
      }
    ],
    links: [
      { title: "Access Digital Library (OPAC)", url: "#" },
      { title: "E-Journals Subscription List", url: "#" },
      { title: "Library Rules & Regulations", url: "#" }
    ]
  },
  "Hostels": {
    icon: Building,
    description: "MITS provides comfortable and secure on-campus accommodation for both boys and girls, fostering a vibrant community life.",
    sections: [
      {
        title: "Facilities",
        content: "Wi-Fi enabled, Mess facility, Recreation rooms, 24/7 Security, Medical assistance.",
        type: "text"
      },
      {
        title: "Hostel Details",
        content: "5 Boys Hostels and 3 Girls Hostels with varying capacities.",
        type: "text"
      }
    ],
    links: [
      { title: "Hostel Fee Structure", url: "#" },
      { title: "Hostel Admission Form", url: "#" },
      { title: "Mess Menu", url: "#" }
    ]
  },
  "Student Portal": {
    icon: Users,
    description: "Access all your academic and administrative needs in one place. The Student Portal connects you to various institutional platforms.",
    sections: [
      {
        title: "Important Notice",
        content: "Please ensure your contact details are updated in the ERP system for timely communication.",
        type: "text"
      }
    ],
    links: [
      { title: "Moodle Learning Management System", url: "http://moodle.mitsweb.in/" },
      { title: "SDMS Portal", url: "https://sdms.mitsgwalior.in/" },
      { title: "IUMS Portal", url: "https://iums.mitsgwalior.in/" },
      { title: "AMS Portal", url: "https://ams.mitsgwalior.in/" }
    ]
  },
  "Anti-Ragging": {
    icon: ShieldAlert,
    description: "MITS has a ZERO TOLERANCE policy towards ragging. We are committed to providing a safe and conducive environment for all students.",
    sections: [
      {
        title: "Helpline Numbers",
        content: "National Anti-Ragging Helpline: 1800-180-5522. Institute Nodal Officer: +91-XXXXXXXXXX.",
        type: "text"
      }
    ],
    links: [
      { title: "UGC Anti-Ragging Regulations", url: "#" },
      { title: "Submit Online Anti-Ragging Affidavit", url: "#" },
      { title: "Anti-Ragging Committee Members", url: "#" }
    ]
  },
  "AICTE": {
    icon: FileCheck,
    description: "Mandatory disclosures and approval letters from the All India Council for Technical Education (AICTE).",
    sections: [
      {
        title: "Approvals",
        content: "MITS is approved by AICTE, New Delhi. All our engineering and management programs are AICTE recognized.",
        type: "text"
      }
    ],
    links: [
      { title: "AICTE Approval Letter 2023-24", url: "#" },
      { title: "Mandatory Disclosure", url: "#" },
      { title: "AICTE Feedback Portal", url: "#" }
    ]
  },
  "NIRF Ranking": {
    icon: Award,
    description: "National Institutional Ranking Framework (NIRF) data and reports submitted by MITS Gwalior.",
    sections: [
      {
        title: "Current Ranking",
        content: "MITS consistently ranks among the top engineering institutions in India.",
        type: "text"
      }
    ],
    links: [
      { title: "NIRF 2024 Data Submitted", url: "#" },
      { title: "NIRF 2023 Report", url: "#" },
      { title: "NIRF 2022 Report", url: "#" }
    ]
  },
  "Tenders": {
    icon: FileSpreadsheet,
    description: "Active tenders, procurement notices, and auction details for Madhav Institute of Technology & Science.",
    sections: [
      {
        title: "Vendor Information",
        content: "All interested vendors must be registered with the institute. Please check the eligibility criteria in the respective tender documents.",
        type: "text"
      }
    ],
    links: [
      { title: "Tender for Lab Equipment (Closing: 15 Apr 2026)", url: "#" },
      { title: "Tender for Campus Wi-Fi Upgradation", url: "#" },
      { title: "Archived Tenders", url: "#" }
    ]
  },
  "Careers": {
    icon: Briefcase,
    description: "Join the MITS family. We are always looking for dedicated faculty and staff to contribute to our mission of excellence.",
    sections: [
      {
        title: "Current Openings",
        content: "Applications are invited for the post of Assistant Professor in CSE, IT, and AI departments.",
        type: "text"
      }
    ],
    links: [
      { title: "Faculty Recruitment Advertisement 2026", url: "#" },
      { title: "Application Form for Teaching Posts", url: "#" },
      { title: "Application Form for Non-Teaching Posts", url: "#" }
    ]
  },
  "Alumni Portal": {
    icon: GraduationCap,
    description: "Connect with the global network of MITS alumni. Stay updated on alumni events, mentorship programs, and networking opportunities.",
    sections: [
      {
        title: "Alumni Association",
        content: "The MITS Alumni Association aims to foster a lifelong bond between the institute and its graduates.",
        type: "text"
      }
    ],
    links: [
      { title: "Register on Alumni Portal", url: "#" },
      { title: "Alumni Meet 2026 Registration", url: "#" },
      { title: "Donate to Alma Mater", url: "#" }
    ]
  },
  "Quick Links": {
    icon: LinkIcon,
    description: "Frequently accessed resources and portals for students, faculty, and visitors.",
    sections: [
      {
        title: "Navigation",
        content: "Find what you need quickly using the links below.",
        type: "text"
      }
    ],
    links: [
      { title: "Academic Calendar", url: "#" },
      { title: "Holiday List 2026", url: "#" },
      { title: "Fee Payment Portal", url: "#" },
      { title: "Grievance Redressal", url: "#" }
    ]
  },
  "Resources": {
    icon: FileText,
    description: "A centralized repository of academic, administrative, and technical resources for the MITS community.",
    sections: [
      {
        title: "Available Resources",
        content: "Access forms, manuals, guidelines, and software resources provided by the institute.",
        type: "text"
      }
    ],
    links: [
      { title: "Download Center", url: "#" },
      { title: "IT Services & Support", url: "#" },
      { title: "Campus Map", url: "#" }
    ]
  },
  "Student Life": {
    icon: Users,
    description: "Experience a vibrant campus life at MITS Gwalior with numerous clubs, cultural events, and sports activities.",
    sections: [
      {
        title: "Extracurricular Activities",
        content: "Join over 20+ student clubs including Robotics, Coding, Drama, Music, and Entrepreneurship cells.",
        type: "text"
      },
      {
        title: "Sports Facilities",
        content: "State-of-the-art sports complex with facilities for Cricket, Basketball, Tennis, and indoor games.",
        type: "text"
      }
    ],
    links: [
      { title: "Student Clubs Directory", url: "#" },
      { title: "Annual Fest - Cygnus", url: "#" },
      { title: "Sports Calendar", url: "#" }
    ]
  },
  "Research & Development": {
    icon: FlaskConical,
    description: "MITS is committed to fostering a culture of innovation and research among faculty and students.",
    sections: [
      {
        title: "R&D Focus Areas",
        content: "Artificial Intelligence, Renewable Energy, Smart Materials, IoT, and Sustainable Engineering.",
        type: "text"
      },
      {
        title: "Sponsored Projects",
        content: "Currently executing 15+ projects funded by DST, AICTE, UGC, and industry partners.",
        type: "text"
      }
    ],
    links: [
      { title: "Research Policy", url: "#" },
      { title: "List of Publications", url: "#" },
      { title: "Ph.D. Guidelines", url: "#" }
    ]
  },
  "UGC Disclosure": {
    icon: FileCheck,
    description: "Mandatory disclosures as per the University Grants Commission (UGC) guidelines.",
    sections: [
      {
        title: "Compliance",
        content: "MITS Gwalior adheres to all regulations and guidelines set forth by the UGC for Deemed Universities.",
        type: "text"
      }
    ],
    links: [
      { title: "UGC Approval Letter", url: "#" },
      { title: "Annual Report 2024-25", url: "#" },
      { title: "Audit Reports", url: "#" }
    ]
  }
};

export const GenericPage = ({ title }: { title: string }) => {
  // Fetch specific content or fallback to generic
  const data = PAGE_CONTENT[title] || {
    icon: FileText,
    description: `Welcome to the ${title} section. This page contains all relevant information, documents, and updates regarding ${title}.`,
    sections: [
      { title: "Overview", content: "Detailed information is currently being updated by the administration.", type: "text" }
    ],
    links: [
      { title: `Download ${title} Guidelines`, url: "#" },
      { title: "Contact Department", url: "#" }
    ]
  };

  const Icon = data.icon;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Header */}
      <div className="bg-oxford py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Information Portal</p>
            <h1 className="font-serif text-6xl md:text-8xl text-cream leading-none">{title}</h1>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
            <p className="text-xl text-cream/60 max-w-2xl mx-auto font-light">
              {data.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {data.sections.map((section: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-oxford/5 rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-oxford/5"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-oxford/5 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="font-serif text-4xl text-oxford">{section.title}</h2>
                </div>
                
                {section.type === 'stats' ? (
                  <div className="bg-oxford/5 border-l-4 border-gold p-8 rounded-2xl">
                    <p className="text-xl text-oxford font-medium leading-relaxed italic">
                      "{section.content}"
                    </p>
                  </div>
                ) : (
                  <p className="text-oxford/70 leading-relaxed text-lg">
                    {section.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-oxford rounded-[3rem] p-10 sticky top-24 shadow-2xl shadow-oxford/20"
            >
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-cream">Resources</h3>
                  <p className="text-cream/40 text-sm">Download important documents and access relevant portals.</p>
                </div>

                <div className="space-y-4">
                  {data.links.map((link: any, index: number) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:border-gold transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-oxford/20 transition-colors">
                          {link.url.startsWith('http') ? (
                            <ExternalLink className="w-4 h-4 text-cream group-hover:text-oxford" />
                          ) : (
                            <FileText className="w-4 h-4 text-cream group-hover:text-oxford" />
                          )}
                        </div>
                        <span className="text-sm font-bold text-cream group-hover:text-oxford transition-colors uppercase tracking-widest">
                          {link.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gold group-hover:text-oxford transition-all group-hover:translate-x-1" />
                    </motion.a>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4 text-cream/60">
                    <Clock className="w-5 h-5 text-gold" />
                    <div className="text-xs">
                      <p className="font-bold uppercase tracking-widest text-cream">Office Hours</p>
                      <p>Mon - Sat: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
