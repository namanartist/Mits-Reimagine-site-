import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Download, Search, Calendar, ExternalLink, Users, GraduationCap, ArrowRight, Clock, MapPin } from 'lucide-react';
import { UpdatesTabs } from '../components/UpdatesTabs';

const CAREERS_DATA = [
  {
    id: "MITS/Advt/2026/05",
    title: "Assistant Professor in Computer Science & Engineering",
    type: "Teaching",
    department: "Computer Science & Engineering",
    publishedDate: "2026-03-20",
    closingDate: "2026-04-20",
    status: "Open",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/04",
    title: "Associate Professor in Artificial Intelligence",
    type: "Teaching",
    department: "Artificial Intelligence",
    publishedDate: "2026-03-15",
    closingDate: "2026-04-15",
    status: "Open",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/03",
    title: "System Administrator",
    type: "Non-Teaching",
    department: "IT Services",
    publishedDate: "2026-03-10",
    closingDate: "2026-04-10",
    status: "Open",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/02",
    title: "Lab Technician - Civil Engineering",
    type: "Non-Teaching",
    department: "Civil Engineering",
    publishedDate: "2026-02-20",
    closingDate: "2026-03-20",
    status: "Closed",
    documentUrl: "#",
    applyUrl: "#"
  },
  {
    id: "MITS/Advt/2026/01",
    title: "Professor in Mechanical Engineering",
    type: "Teaching",
    department: "Mechanical Engineering",
    publishedDate: "2026-01-15",
    closingDate: "2026-02-15",
    status: "Closed",
    documentUrl: "#",
    applyUrl: "#"
  }
];

export const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCareers = CAREERS_DATA.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || job.type === filter;
    return matchesSearch && matchesFilter;
  });

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
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Join Our Faculty & Staff</p>
            <h1 className="font-serif text-6xl md:text-8xl text-cream leading-none">Careers</h1>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
            <p className="text-xl text-cream/60 max-w-2xl mx-auto font-light">
              We are always looking for dedicated individuals to contribute to our mission of excellence in education and research.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-24">
        <UpdatesTabs />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-oxford/5 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-oxford/5 mt-12"
        >
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Teaching', 'Non-Teaching'].map((f) => (
                <button 
                  key={f} 
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === f 
                      ? 'bg-oxford text-cream shadow-lg shadow-oxford/20' 
                      : 'bg-oxford/5 text-oxford/60 hover:bg-oxford/10'
                  }`}
                >
                  {f} Posts
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-oxford/30 group-focus-within:text-gold transition-colors" />
              <input 
                type="text" 
                placeholder="Search positions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3.5 rounded-2xl border border-oxford/5 bg-oxford/5 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:bg-white transition-all text-sm" 
              />
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredCareers.length > 0 ? (
              filteredCareers.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group p-10 bg-white border border-oxford/5 rounded-[3rem] hover:shadow-xl transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between relative z-10">
                    <div className="space-y-6 flex-grow">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-oxford/30">{job.id}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg flex items-center gap-2 ${
                          job.type === 'Teaching' ? 'bg-gold/10 text-gold' : 'bg-oxford/5 text-oxford/40'
                        }`}>
                          {job.type === 'Teaching' ? <GraduationCap className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                          {job.type}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg ${
                          job.status === 'Open' ? 'bg-green-500/10 text-green-600' : 'bg-oxford/5 text-oxford/40'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-3xl text-oxford group-hover:text-gold transition-colors duration-300">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px]">
                          <MapPin className="w-3 h-3" />
                          <span>Department: {job.department}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-3 text-xs text-oxford/40 font-medium">
                          <Calendar className="w-4 h-4 text-oxford/20" />
                          <span>Published: {job.publishedDate}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                          <Clock className={`w-4 h-4 ${job.status === 'Open' ? 'text-gold' : 'text-oxford/20'}`} />
                          <span className={job.status === 'Open' ? 'text-gold' : 'text-oxford/40'}>
                            Closing: {job.closingDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-4">
                      <a 
                        href={job.documentUrl}
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-oxford/5 text-oxford rounded-full font-medium hover:bg-oxford/10 transition-all group/btn"
                      >
                        <Download className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Details
                      </a>
                      {job.status === 'Open' && (
                        <a 
                          href={job.applyUrl}
                          className="flex items-center justify-center gap-3 px-8 py-4 bg-oxford text-cream rounded-full font-medium hover:bg-oxford/90 transition-all group/btn shadow-lg shadow-oxford/20"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Apply Now
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Decorative background element on hover */}
                  <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))
            ) : (
              <div className="py-32 text-center space-y-8">
                <div className="w-24 h-24 bg-oxford/5 rounded-[2rem] flex items-center justify-center mx-auto">
                  <Briefcase className="w-10 h-10 text-oxford/20" />
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-4xl text-oxford">No Openings Found</h2>
                  <p className="text-oxford/60 max-w-md mx-auto">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
