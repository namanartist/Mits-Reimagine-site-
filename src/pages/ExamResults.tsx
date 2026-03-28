import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, Download, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ExamResults = () => {
  const results = [
    { title: 'B.Tech VII Semester (Regular/Ex) Result Nov-Dec 2025', date: '25 Mar 2026', type: 'Regular' },
    { title: 'M.E./M.Tech III Semester Result Nov-Dec 2025', date: '22 Mar 2026', type: 'Regular' },
    { title: 'B.Arch IX Semester Result Nov-Dec 2025', date: '20 Mar 2026', type: 'Regular' },
    { title: 'B.Tech V Semester (Regular/Ex) Result Nov-Dec 2025', date: '18 Mar 2026', type: 'Regular' },
    { title: 'MCA III Semester Result Nov-Dec 2025', date: '15 Mar 2026', type: 'Regular' },
    { title: 'B.Tech III Semester (Regular/Ex) Result Nov-Dec 2025', date: '12 Mar 2026', type: 'Regular' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Examination Results</h1>
        <p className="text-lg text-black/70 max-w-2xl mx-auto">
          Access your academic performance records. Enter your enrollment number to search for specific results or browse the latest announcements below.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mb-16"
      >
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search by Enrollment Number (e.g., 0901CS211001)"
            className="w-full px-8 py-6 rounded-full border-2 border-black/10 focus:border-black outline-none transition-all text-lg shadow-sm group-hover:shadow-md"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full hover:bg-black/80 transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Latest Results List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-serif text-3xl mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-orange-500" />
            Latest Result Declarations
          </h2>
          <div className="space-y-4">
            {results.map((result, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white border border-black/10 rounded-3xl hover:shadow-xl transition-all group cursor-pointer flex items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg leading-tight group-hover:text-orange-600 transition-colors">{result.title}</h3>
                    <p className="text-sm text-black/50 mt-1">Declared on {result.date} • {result.type}</p>
                  </div>
                </div>
                <button className="p-3 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-all">
                  <Download className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="p-8 bg-black text-white rounded-[2rem] shadow-2xl">
            <h3 className="font-serif text-2xl mb-6 text-orange-400">Important Instructions</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                <span>Results published online are for immediate information only.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                <span>Original marksheets will be issued by the Controller of Examinations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                <span>For any discrepancies, contact the Exam Cell within 7 days.</span>
              </li>
            </ul>
            <button className="w-full mt-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Apply for Revaluation <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8 border border-black/10 rounded-[2rem] bg-[#f2e8e3]">
            <h3 className="font-serif text-2xl mb-4">Old Results Archive</h3>
            <p className="text-sm text-black/70 mb-6">Access results from previous academic years (2015-2024).</p>
            <button className="w-full py-3 border border-black rounded-full font-medium hover:bg-white transition-colors">
              Browse Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
