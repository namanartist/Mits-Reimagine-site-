import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Search, Calendar, FileSpreadsheet, ExternalLink, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { UpdatesTabs } from '../components/UpdatesTabs';

const TENDERS_DATA = [
  {
    id: "MITS/Tender/2026/04",
    title: "Supply and Installation of Desktop Computers for AI Lab",
    publishedDate: "2026-03-25",
    closingDate: "2026-04-15",
    status: "Active",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2026/03",
    title: "Campus Wi-Fi Network Upgradation and Maintenance",
    publishedDate: "2026-03-20",
    closingDate: "2026-04-10",
    status: "Active",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2026/02",
    title: "Renovation of Central Library Reading Hall",
    publishedDate: "2026-03-15",
    closingDate: "2026-04-05",
    status: "Active",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2026/01",
    title: "Procurement of Sports Equipment for Annual Fest",
    publishedDate: "2026-02-10",
    closingDate: "2026-03-01",
    status: "Closed",
    documentUrl: "#"
  },
  {
    id: "MITS/Tender/2025/45",
    title: "Empanelment of Agencies for Security Services",
    publishedDate: "2025-12-05",
    closingDate: "2025-12-25",
    status: "Closed",
    documentUrl: "#"
  }
];

export const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTenders = TENDERS_DATA.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) || tender.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || tender.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Header */}
      <div className="bg-oxford py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Procurement & Contracts</p>
            <h1 className="font-serif text-6xl md:text-8xl text-cream leading-none">Tenders</h1>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full" />
            <p className="text-xl text-cream/60 max-w-2xl mx-auto font-light">
              Official procurement notices, active tenders, and archived auction details for the Institute.
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
              {['All', 'Active', 'Closed'].map((f) => (
                <button 
                  key={f} 
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === f 
                      ? 'bg-oxford text-cream shadow-lg shadow-oxford/20' 
                      : 'bg-oxford/5 text-oxford/60 hover:bg-oxford/10'
                  }`}
                >
                  {f} Tenders
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-oxford/30 group-focus-within:text-gold transition-colors" />
              <input 
                type="text" 
                placeholder="Search tenders..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3.5 rounded-2xl border border-oxford/5 bg-oxford/5 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:bg-white transition-all text-sm" 
              />
            </div>
          </div>

          {/* Tenders List */}
          <div className="space-y-6">
            {filteredTenders.length > 0 ? (
              filteredTenders.map((tender, index) => (
                <motion.div 
                  key={tender.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group p-10 bg-white border border-oxford/5 rounded-[3rem] hover:shadow-xl transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between relative z-10">
                    <div className="space-y-6 flex-grow">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-oxford/30">{tender.id}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg ${
                          tender.status === 'Active' ? 'bg-gold/10 text-gold' : 'bg-oxford/5 text-oxford/40'
                        }`}>
                          {tender.status}
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl text-oxford group-hover:text-gold transition-colors duration-300">
                        {tender.title}
                      </h3>
                      <div className="flex flex-wrap gap-8">
                        <div className="flex items-center gap-3 text-xs text-oxford/40 font-medium">
                          <Calendar className="w-4 h-4 text-oxford/20" />
                          <span>Published: {tender.publishedDate}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                          <Clock className={`w-4 h-4 ${tender.status === 'Active' ? 'text-gold' : 'text-oxford/20'}`} />
                          <span className={tender.status === 'Active' ? 'text-gold' : 'text-oxford/40'}>
                            Closing: {tender.closingDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="shrink-0 w-full md:w-auto">
                      <a 
                        href={tender.documentUrl}
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-oxford text-cream rounded-full font-medium hover:bg-oxford/90 transition-all group/btn"
                      >
                        <Download className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Download PDF
                      </a>
                    </div>
                  </div>

                  {/* Decorative background element on hover */}
                  <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))
            ) : (
              <div className="py-32 text-center space-y-8">
                <div className="w-24 h-24 bg-oxford/5 rounded-[2rem] flex items-center justify-center mx-auto">
                  <FileText className="w-10 h-10 text-oxford/20" />
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-4xl text-oxford">No Tenders Found</h2>
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
