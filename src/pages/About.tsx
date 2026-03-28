import React from 'react';
import { ArrowRight, BookOpen, Clock, Users, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
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
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-sm">Our Legacy</p>
            <h1 className="font-serif text-6xl md:text-8xl text-oxford tracking-tight">
              A Tradition of <br />
              <span className="italic font-light">Excellence.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-oxford/60 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Since 1957, MITS Gwalior has been at the forefront of technical education in India, fostering a culture of innovation and academic rigor.
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Founded', value: '1957' },
            { label: 'Campus Area', value: '44 Acres' },
            { label: 'Departments', value: '15+' },
            { label: 'Research Papers', value: '5000+' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <p className="font-serif text-5xl text-oxford">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-gold font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-oxford text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl text-gold">Our Journey</h2>
              <p className="text-cream/60 max-w-md text-lg font-light">
                From a modest beginning to a premier technical institute, our journey has been defined by constant evolution.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-cream/10 -translate-y-1/2" />
            {[
              { year: '1957', title: 'Foundation', desc: 'Established by His Highness Sir Jiwaji Rao Scindia.' },
              { year: '1974', title: 'PG Programs', desc: 'Introduction of postgraduate programs in engineering.' },
              { year: '2017', title: 'Autonomy', desc: 'Granted academic autonomy by UGC.' },
              { year: '2022', title: 'NAAC A++', desc: 'Accredited with A++ grade by NAAC.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6 relative z-10"
              >
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-serif text-oxford font-bold">
                  {i + 1}
                </div>
                <div className="space-y-2">
                  <p className="text-gold font-serif text-3xl">{item.year}</p>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                alt="Director" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gold/20 rounded-full blur-3xl -z-10" />
          </motion.div>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl text-oxford">Director's <br /><span className="italic font-light">Message</span></h2>
              <div className="h-1 w-24 bg-gold rounded-full" />
            </div>
            
            <p className="text-2xl text-oxford/80 font-light leading-relaxed italic">
              "At MITS, we believe in empowering our students with not just technical knowledge, but the critical thinking and leadership skills required to thrive in a rapidly changing world."
            </p>
            
            <div className="space-y-1">
              <p className="text-xl font-bold text-oxford">Dr. R. K. Pandit</p>
              <p className="text-gold font-medium uppercase tracking-widest text-xs">Director, MITS Gwalior</p>
            </div>

            <button className="px-8 py-4 bg-oxford text-cream rounded-full font-medium hover:bg-oxford/90 transition-all flex items-center gap-2 group">
              Read Full Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white/50 border-t border-oxford/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-5xl text-oxford">Policies & Compliance</h2>
            <p className="text-oxford/60 max-w-xl mx-auto">
              We maintain the highest standards of transparency and institutional governance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Code of Conduct', icon: Shield, desc: 'Guidelines for student and staff behavior.' },
              { title: 'UGC Disclosure', icon: FileText, desc: 'Mandatory disclosures as per UGC norms.' },
              { title: 'NAAC Reports', icon: CheckCircle2, desc: 'Self Study Reports and peer team findings.' },
              { title: 'Anti-Ragging Policy', icon: Users, desc: 'Zero tolerance policy towards ragging.' },
              { title: 'Academic SOPs', icon: BookOpen, desc: 'Standard operating procedures for academics.' },
              { title: 'RTI Information', icon: Clock, desc: 'Right to Information act disclosures.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-oxford/5 rounded-[2rem] hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-oxford/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <item.icon className="w-6 h-6 text-oxford group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-serif text-2xl text-oxford mb-2">{item.title}</h3>
                <p className="text-sm text-oxford/60 leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-oxford group-hover:text-gold transition-colors">
                  View Document <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
