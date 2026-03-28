import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, Search, Filter, ArrowRight, CheckCircle2, FileCheck } from 'lucide-react';

export const Downloads = () => {
  const categories = ['Academic', 'Admission', 'Examination', 'Tender', 'Miscellaneous'];
  const downloads = [
    { title: 'Academic Calendar 2026 (Even Semester)', category: 'Academic', size: '1.2 MB', date: '25 Mar 2026' },
    { title: 'Admission Brochure 2026-27', category: 'Admission', size: '4.5 MB', date: '20 Mar 2026' },
    { title: 'Examination Form (Regular/Ex)', category: 'Examination', size: '0.8 MB', date: '15 Mar 2026' },
    { title: 'Scholarship Application Form', category: 'Admission', size: '1.5 MB', date: '10 Mar 2026' },
    { title: 'Library Membership Form', category: 'Miscellaneous', size: '0.5 MB', date: '05 Mar 2026' },
    { title: 'Hostel Admission Form', category: 'Admission', size: '1.1 MB', date: '01 Mar 2026' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Downloads Center</h1>
        <p className="text-lg text-black/70 max-w-2xl mx-auto">
          Access all official forms, brochures, and documents in one place. Browse by category or search for specific files.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-grow">
          <input 
            type="text" 
            placeholder="Search documents..."
            className="w-full px-8 py-5 rounded-full border-2 border-black/10 focus:border-black outline-none transition-all text-lg shadow-sm"
          />
          <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-black/40" />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className="px-6 py-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all whitespace-nowrap font-medium text-sm"
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Downloads List */}
        <div className="lg:col-span-3 space-y-4">
          {downloads.map((file, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-white border border-black/10 rounded-3xl hover:shadow-xl transition-all group flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                  <FileCheck className="w-7 h-7 text-black group-hover:text-orange-600 transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-0.5 bg-black/5 rounded text-[10px] font-bold uppercase tracking-wider text-black/60">
                      {file.category}
                    </span>
                    <span className="text-xs text-black/40 font-medium">{file.size}</span>
                  </div>
                  <h3 className="font-medium text-lg leading-tight group-hover:text-orange-600 transition-colors">{file.title}</h3>
                  <p className="text-xs text-black/40 mt-1">Updated on {file.date}</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-orange-600 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" /> Download
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="p-8 bg-[#f2e8e3] rounded-[2rem] border border-black/10">
            <h3 className="font-serif text-2xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Academic Calendar', 'Syllabus', 'Time Table', 'Anti-Ragging Form'].map((link, i) => (
                <li key={i}>
                  <button className="flex items-center justify-between w-full text-left group">
                    <span className="text-sm font-medium group-hover:text-orange-600 transition-colors">{link}</span>
                    <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-black text-white rounded-[2rem] shadow-xl">
            <h3 className="font-serif text-2xl mb-4 text-orange-400">Need a Form?</h3>
            <p className="text-sm text-white/70 mb-6">If you can't find a specific document, please contact the administrative office.</p>
            <button className="w-full py-4 bg-white text-black rounded-full font-bold hover:bg-orange-400 transition-colors">
              Contact Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
