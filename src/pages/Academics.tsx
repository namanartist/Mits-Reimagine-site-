import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Microscope, FileText } from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { motion } from 'motion/react';

export const Academics = () => {
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
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-sm">Academic Excellence</p>
            <h1 className="font-serif text-6xl md:text-8xl text-oxford tracking-tight">
              Shaping the <br />
              <span className="italic font-light">Future of Tech.</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-oxford/60 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Our academic programs are designed to challenge, inspire, and prepare students for the complexities of the modern world.
          </motion.p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              title: 'Undergraduate', 
              count: '11 Programs', 
              desc: 'B.Tech programs in core and emerging engineering disciplines.',
              icon: GraduationCap,
              link: '/admissions#ug'
            },
            { 
              title: 'Postgraduate', 
              count: '15 Programs', 
              desc: 'M.Tech, MBA, and MCA programs for specialized expertise.',
              icon: BookOpen,
              link: '/admissions#pg'
            },
            { 
              title: 'Doctoral', 
              count: 'All Depts', 
              desc: 'Ph.D. programs focused on cutting-edge research and innovation.',
              icon: Microscope,
              link: '/admissions#phd'
            },
          ].map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-oxford/5 rounded-[3rem] hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-oxford/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                <program.icon className="w-8 h-8 text-oxford group-hover:text-gold transition-colors" />
              </div>
              <p className="text-gold font-bold text-xs uppercase tracking-widest mb-2">{program.count}</p>
              <h3 className="font-serif text-3xl text-oxford mb-4">{program.title}</h3>
              <p className="text-oxford/60 leading-relaxed mb-8">{program.desc}</p>
              <Link to={program.link} className="text-oxford font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-gold transition-colors">
                Explore Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-oxford text-cream">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl text-gold">Departments</h2>
              <p className="text-cream/60 max-w-md text-lg font-light">
                Our diverse departments are the pillars of our academic excellence, each fostering a unique environment for learning.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10 rounded-[3rem] overflow-hidden">
            {DEPARTMENTS.map((dept, i) => (
              <motion.div 
                key={dept.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-12 bg-oxford hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <Link to={`/department/${dept.id}`}>
                  <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold transition-all">
                    <span className="text-gold group-hover:text-oxford text-xs font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors">{dept.name}</h3>
                  <p className="text-cream/40 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    {dept.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar / Resources */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-oxford/5 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-24 relative z-10">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-serif text-5xl text-oxford">Academic Resources</h2>
                <p className="text-oxford/60 text-lg font-light">
                  Everything you need to navigate your academic journey at MITS.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Academic Calendar', desc: 'Important dates for the current semester.' },
                  { title: 'Syllabus & Curriculum', desc: 'Detailed course structures for all programs.' },
                  { title: 'Examination Portal', desc: 'Access results, schedules, and forms.' },
                ].map((resource, i) => (
                  <div key={i} className="flex items-start gap-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-oxford/5 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <FileText className="w-6 h-6 text-oxford group-hover:text-gold transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-xl text-oxford group-hover:text-gold transition-colors">{resource.title}</h4>
                      <p className="text-sm text-oxford/60">{resource.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-oxford rounded-[3rem] p-12 text-cream space-y-8">
              <h3 className="font-serif text-3xl text-gold">Quick Downloads</h3>
              <div className="space-y-4">
                {[
                  'Holiday List 2024',
                  'Student Handbook',
                  'Research Guidelines',
                  'Library Rules'
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b border-cream/10 hover:bg-white/5 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium">{item}</span>
                    <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                ))}
              </div>
              <button className="w-full py-4 bg-gold text-oxford rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                Visit Resource Center
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
