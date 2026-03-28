import React from 'react';
import { Bell, Calendar, FileText, ChevronRight, Search, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { UpdatesTabs } from '../components/UpdatesTabs';

const NOTICES = [
  { id: 1, title: 'End Semester Examination Schedule 2026', date: 'March 25, 2026', category: 'Exams', isNew: true },
  { id: 2, title: 'Registration for Summer Internship Program', date: 'March 20, 2026', category: 'Placements', isNew: true },
  { id: 3, title: 'Revised Academic Calendar for Even Semester', date: 'March 15, 2026', category: 'Academics', isNew: false },
  { id: 4, title: 'Notice regarding Hostel Fee Payment', date: 'March 10, 2026', category: 'Hostels', isNew: false },
  { id: 5, title: 'Call for Papers: International Conference on AI', date: 'March 5, 2026', category: 'Research', isNew: false },
];

export const NoticeBoard = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Header */}
      <div className="bg-oxford py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Official Announcements</p>
            <h1 className="font-serif text-6xl md:text-8xl text-cream leading-none">Notice Board</h1>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
            <p className="text-xl text-cream/60 max-w-2xl mx-auto font-light">
              Stay updated with the latest announcements, examination schedules, and important institutional notices.
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
              {['All', 'Exams', 'Academics', 'Placements', 'Hostels', 'Research'].map((filter) => (
                <button 
                  key={filter} 
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === 'All' 
                      ? 'bg-oxford text-cream shadow-lg shadow-oxford/20' 
                      : 'bg-oxford/5 text-oxford/60 hover:bg-oxford/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-oxford/30 group-focus-within:text-gold transition-colors" />
              <input 
                type="text" 
                placeholder="Search notices..." 
                className="w-full pl-12 pr-6 py-3.5 rounded-2xl border border-oxford/5 bg-oxford/5 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:bg-white transition-all text-sm" 
              />
            </div>
          </div>

          {/* Notices List */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {NOTICES.map((notice) => (
              <motion.div 
                variants={item} 
                key={notice.id} 
                className="group flex flex-col md:flex-row gap-8 items-start md:items-center justify-between p-8 rounded-[2.5rem] border border-oxford/5 hover:border-gold/30 hover:bg-gold/5 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-start gap-8 relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-oxford/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <FileText className="w-6 h-6 text-oxford/40 group-hover:text-gold transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-oxford/5 rounded-lg text-oxford/40 group-hover:bg-gold/20 group-hover:text-gold transition-all">
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gold text-oxford rounded-lg animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl text-oxford group-hover:translate-x-1 transition-transform duration-300">
                      {notice.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-oxford/40 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{notice.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 relative z-10">
                  <button className="px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-oxford/40 group-hover:text-gold transition-colors flex items-center gap-2">
                    View Details <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Decorative background element on hover */}
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination/Load More */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <button className="px-10 py-4 border border-oxford/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-oxford/60 hover:bg-oxford hover:text-cream transition-all">
              Load More Notices
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
