import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  Info, 
  Download,
  CreditCard,
  UserCheck,
  Calendar
} from 'lucide-react';

export const Admissions = () => {
  const [activeTab, setActiveTab] = useState('ug');

  const tabs = [
    { id: 'ug', label: 'Undergraduate', title: 'B.Tech & B.Arch' },
    { id: 'pg', label: 'Postgraduate', title: 'M.Tech, MBA, MCA' },
    { id: 'phd', label: 'Doctoral', title: 'Ph.D. Programs' },
    { id: 'nri', label: 'NRI/International', title: 'Global Admissions' },
  ];

  const steps = [
    { title: 'Registration', desc: 'Register on the MP DTE portal for counseling.', icon: UserCheck },
    { title: 'Choice Filling', desc: 'Select MITS Gwalior as your preferred choice.', icon: FileText },
    { title: 'Allotment', desc: 'Check allotment status and download letter.', icon: CheckCircle2 },
    { title: 'Reporting', desc: 'Visit campus for document verification.', icon: Calendar },
    { title: 'Fee Payment', desc: 'Complete admission by paying the fees.', icon: CreditCard },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-oxford/5">
        <div className="absolute top-0 left-0 w-full h-full bg-oxford/5 -z-10" />
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-sm">Join Our Community</p>
            <h1 className="font-serif text-6xl md:text-8xl text-oxford tracking-tight">
              Begin Your <br />
              <span className="italic font-light">Legacy Here.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-oxford/60 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Discover a world of opportunities and take the first step towards a rewarding career in engineering and technology.
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-24">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-5xl text-oxford">Admission Process</h2>
            <p className="text-oxford/60 max-w-xl mx-auto">
              A step-by-step guide to securing your place at MITS Gwalior.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-oxford/10 -translate-y-1/2" />
            <div className="grid lg:grid-cols-5 gap-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative space-y-6 text-center"
                >
                  <div className="w-20 h-20 bg-white border border-oxford/5 rounded-full flex items-center justify-center mx-auto relative z-10 shadow-xl group hover:bg-oxford transition-colors">
                    <step.icon className="w-8 h-8 text-oxford group-hover:text-gold transition-colors" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-oxford font-bold text-xs">
                      {i + 1}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-oxford">{step.title}</h3>
                    <p className="text-sm text-oxford/60 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-oxford">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-full font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gold text-oxford' 
                    : 'bg-white/5 text-cream hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[4rem] p-12 md:p-24"
            >
              <div className="grid lg:grid-cols-2 gap-24">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <h2 className="font-serif text-5xl text-oxford">
                      {tabs.find(t => t.id === activeTab)?.title}
                    </h2>
                    <p className="text-oxford/60 text-lg font-light">
                      Comprehensive programs designed for the next generation of innovators.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Eligibility Criteria</h4>
                      <ul className="space-y-4">
                        {[
                          'Minimum 75% in 10+2 (PCM) for General category.',
                          'Valid JEE Main / GATE / CMAT score as applicable.',
                          'Successful completion of counseling process.',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-oxford/80">
                            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-8 bg-oxford/5 rounded-3xl space-y-4">
                      <div className="flex items-center gap-3 text-oxford">
                        <Info className="w-5 h-5 text-gold" />
                        <span className="font-bold uppercase tracking-widest text-xs">Fee Structure</span>
                      </div>
                      <p className="text-oxford/60 text-sm">
                        Approx. ₹85,000 - ₹1,20,000 per annum (subject to change).
                      </p>
                      <button className="text-oxford font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-gold transition-colors">
                        Download Detailed Fee Schedule <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="space-y-4">
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Required Documents</h4>
                    <div className="grid gap-4">
                      {[
                        'JEE Main / GATE Score Card',
                        '10th & 12th Marksheets',
                        'Transfer & Migration Certificate',
                        'Caste Certificate (if applicable)',
                        'Income Certificate',
                        'Domicile Certificate',
                      ].map((doc, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-oxford/5 rounded-2xl hover:bg-oxford/10 transition-colors cursor-default group">
                          <div className="flex items-center gap-4">
                            <FileText className="w-5 h-5 text-oxford/40 group-hover:text-gold transition-colors" />
                            <span className="text-oxford font-medium">{doc}</span>
                          </div>
                          <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gold p-12 rounded-[3rem] text-oxford space-y-6">
                    <div className="flex items-center gap-4">
                      <HelpCircle className="w-8 h-8" />
                      <h3 className="font-serif text-3xl">Need Help?</h3>
                    </div>
                    <p className="font-medium opacity-80">
                      Our admissions team is here to assist you with any queries regarding the process.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-bold">Email: admissions@mitsgwalior.in</p>
                      <p className="text-sm font-bold">Phone: +91 751 2409300</p>
                    </div>
                    <button className="w-full py-4 bg-oxford text-cream rounded-full font-bold uppercase tracking-widest text-xs hover:bg-oxford/90 transition-colors">
                      Contact Admissions Office
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="font-serif text-5xl text-oxford">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is the cutoff for CSE?', a: 'Cutoffs vary each year based on JEE Main ranks. Generally, it is within the top 50,000 ranks.' },
                { q: 'Are there any scholarships?', a: 'Yes, various state and central government scholarships are available for eligible students.' },
                { q: 'Is there a hostel facility?', a: 'MITS provides separate hostel facilities for boys and girls with all modern amenities.' },
              ].map((faq, i) => (
                <div key={i} className="p-8 border border-oxford/5 rounded-3xl space-y-4 hover:border-gold/30 transition-colors cursor-pointer group">
                  <h4 className="font-serif text-xl text-oxford group-hover:text-gold transition-colors">{faq.q}</h4>
                  <p className="text-sm text-oxford/60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1523050853063-bd8012fec3ce?q=80&w=800&auto=format&fit=crop" 
                alt="Campus Life" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-oxford/20 group-hover:bg-oxford/10 transition-colors" />
            </div>
            
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-oxford">Important Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'MP DTE Counseling',
                  'JEE Main Portal',
                  'Fee Refund Policy',
                  'Anti-Ragging Affidavit',
                  'Hostel Application',
                  'Scholarship Portal'
                ].map((link, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-oxford/60 hover:text-gold transition-colors cursor-pointer">
                    <ArrowRight className="w-3 h-3" />
                    <span>{link}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
