import React from 'react';
import { ArrowRight, BookOpen, Clock, Users, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">About Institute</h1>
        <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
          Established in 1957, Madhav Institute of Technology & Science (MITS) has been a beacon of technical education, nurturing minds that shape the future of technology and society.
        </p>
      </motion.div>

      {/* History Timeline */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24 px-4"
      >
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Legacy</span>
          <h2 className="font-serif text-5xl mt-2">Our Journey</h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-200 to-transparent -translate-x-1/2" />
          <div className="space-y-16">
            {[
              { year: '1957', title: 'Foundation', desc: 'Established by His Highness Sir Jiwaji Rao Scindia with a vision to provide quality technical education.' },
              { year: '1974', title: 'PG Programs', desc: 'Introduction of postgraduate programs in engineering, marking a new era of research.' },
              { year: '2017', title: 'Autonomy', desc: 'Granted academic autonomy by UGC, allowing for innovative curriculum design.' },
              { year: '2022', title: 'NAAC A++', desc: 'Accredited with A++ grade by NAAC, reflecting our commitment to excellence.' },
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                key={i} 
                className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-lg -translate-x-1/2 z-10" />
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-12 md:pl-0`}>
                  <div className={`p-8 bg-white border border-black/5 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="font-serif text-3xl text-orange-500 block mb-2 group-hover:scale-110 transition-transform origin-left">{item.year}</span>
                    <h3 className="text-2xl font-bold mb-3 text-oxford">{item.title}</h3>
                    <p className="text-black/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Message */}
      <motion.section 
        id="vc-message"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent -z-10 rounded-[3rem]" />
        <div className="grid md:grid-cols-5 gap-12 items-center p-8 md:p-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 relative group"
          >
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img 
                src="https://web.mitsgwalior.in/images/Director_img.webp" 
                alt="Vice-Chancellor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black/10 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Leadership</span>
              <h2 className="font-serif text-5xl md:text-6xl">Vice-Chancellor's Message</h2>
            </div>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-serif italic relative">
              <span className="absolute -top-8 -left-8 text-8xl text-black/5 font-serif">"</span>
              At MITS, we believe in empowering our students with not just technical knowledge, but the critical thinking and leadership skills required to thrive in a rapidly changing world. Our commitment to excellence in education and research remains unwavering.
              <span className="absolute -bottom-12 -right-4 text-8xl text-black/5 font-serif">"</span>
            </p>
            <div className="pt-4">
              <p className="font-bold text-2xl">Prof. R. K. Pandit</p>
              <p className="text-black/50 font-medium">Vice-Chancellor, MITS Gwalior</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[
          { label: 'Founded', value: '1957' },
          { label: 'Campus Area', value: '47 Acres' },
          { label: 'Students', value: '4,500+' },
          { label: 'Programs', value: '25+' },
        ].map((stat, i) => (
          <div key={i} className="text-center p-8 border border-black/5 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <p className="text-4xl font-serif font-bold text-orange-500 mb-2">{stat.value}</p>
            <p className="text-xs uppercase tracking-widest font-bold text-black/40">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      {/* Policies & Accreditation */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <h2 className="font-serif text-4xl mb-12 text-center">Policies & Accreditation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Code of Conduct', icon: Shield, desc: 'Guidelines for student and staff behavior.' },
            { title: 'UGC Disclosure', icon: FileText, desc: 'Mandatory disclosures as per UGC norms.' },
            { title: 'NAAC Reports', icon: CheckCircle2, desc: 'Self Study Reports and peer team findings.' },
            { title: 'Anti-Ragging Policy', icon: Users, desc: 'Zero tolerance policy towards ragging.' },
            { title: 'Academic SOPs', icon: BookOpen, desc: 'Standard operating procedures for academics.' },
            { title: 'RTI Information', icon: Clock, desc: 'Right to Information act disclosures.' },
          ].map((item, i) => (
            <motion.div variants={item} key={i} className="p-6 border border-black/10 rounded-2xl bg-white hover:shadow-lg transition-shadow group cursor-pointer">
              <item.icon className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-medium text-lg mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
              <p className="text-sm text-black/60 mb-4">{item.desc}</p>
              <span className="text-sm font-medium flex items-center gap-1">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};
