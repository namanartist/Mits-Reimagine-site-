import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NoticePopup } from '../components/NoticePopup';
import { ArrowRight, ArrowDown, GraduationCap, BookOpen, Users, Building, FileText, MapPin, Calendar, Sparkles, Trophy, Briefcase, Award, Download, FileCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-oxford/5 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold font-bold uppercase tracking-[0.3em] text-sm"
            >
              Established 1957
            </motion.p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-oxford">
              Shaping the <br />
              <span className="italic font-light text-gold">Future</span> of <br />
              Innovation.
            </h1>
          </div>
          
          <p className="max-w-xl text-oxford/70 leading-relaxed text-lg md:text-xl font-light">
            Madhav Institute of Technology & Science (MITS), Gwalior is a premier engineering institute dedicated to technical excellence and holistic development.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link to="/admissions" className="px-10 py-5 bg-oxford text-cream rounded-full font-medium hover:bg-oxford/90 transition-all shadow-xl shadow-oxford/20 flex items-center gap-3 group">
              Apply for 2026 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="px-10 py-5 border border-oxford/20 text-oxford rounded-full font-medium hover:bg-oxford/5 transition-all">
              Explore Campus
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-8 border-t border-oxford/10">
            <div>
              <p className="font-serif text-4xl text-oxford">A++</p>
              <p className="text-xs uppercase tracking-widest text-oxford/40 font-bold mt-1">NAAC Grade</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-oxford">65+</p>
              <p className="text-xs uppercase tracking-widest text-oxford/40 font-bold mt-1">Years Legacy</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-oxford">25k+</p>
              <p className="text-xs uppercase tracking-widest text-oxford/40 font-bold mt-1">Global Alumni</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://www.collegebatch.com/static/clg-gallery/madhav-institute-of-technology-science-gwalior-300708.webp" 
              alt="MITS Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oxford/40 to-transparent" />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 md:-left-16 bg-cream p-8 rounded-[2.5rem] shadow-2xl border border-oxford/5 max-w-[240px]"
          >
            <Trophy className="w-10 h-10 text-gold mb-4" />
            <h4 className="font-serif text-xl text-oxford leading-tight mb-2">Top Engineering Institute</h4>
            <p className="text-xs text-oxford/60 leading-relaxed">Consistently ranked among the best in Central India by NIRF.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-6 border-y border-oxford/10 overflow-hidden flex items-center bg-white/50 backdrop-blur-sm">
      <motion.div 
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="flex whitespace-nowrap items-center gap-12"
      >
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-serif text-2xl italic text-oxford/80">Excellence in Technical Education since 1957</span>
            <div className="w-2 h-2 rounded-full bg-oxford/20" />
            <span className="font-sans text-sm uppercase tracking-[0.3em] font-bold text-oxford/40">Admissions Open 2026</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Highlights = () => {
  const highlights = [
    {
      icon: Briefcase,
      stat: "95%",
      label: "Placement Rate",
      desc: "Top recruiters including TCS, Infosys, and Wipro visit annually."
    },
    {
      icon: Award,
      stat: "A++",
      label: "NAAC Grade",
      desc: "Recognized for excellence in teaching and research methodologies."
    },
    {
      icon: Users,
      stat: "250+",
      label: "Expert Faculty",
      desc: "Distinguished professors with extensive industry experience."
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-16">
        {highlights.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="space-y-6 group"
          >
            <div className="w-16 h-16 bg-oxford/5 rounded-2xl flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              <item.icon className="w-8 h-8 text-oxford group-hover:text-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-5xl text-oxford">{item.stat}</h3>
              <p className="font-bold text-sm uppercase tracking-widest text-gold">{item.label}</p>
            </div>
            <p className="text-oxford/60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const QuickLinks = () => {
  const links = [
    { title: 'Admissions 2026', icon: GraduationCap, path: '/admissions' },
    { title: 'Fee Structure', icon: FileText, path: '/admissions#fees' },
    { title: 'Exam Results', icon: CheckCircle2, path: '/academics' },
    { title: 'Downloads', icon: Download, path: '/student-life' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl mb-6">Quick Links</h2>
          <p className="text-black/70 mb-8 max-w-md">
            Access essential resources, portals, and information quickly. Everything you need is just a click away.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {links.map((link, i) => (
              <Link 
                key={i} 
                to={link.path}
                className="p-6 border border-black rounded-3xl hover:bg-[#f2e8e3] transition-colors group flex flex-col items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <link.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{link.title}</span>
              </Link>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/40 backdrop-blur-sm border border-black/10 rounded-[2rem] p-8 shadow-lg"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
            <h3 className="font-serif text-2xl">Notice Board</h3>
            <Link to="/about" className="text-sm font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-6">
            {[
              { date: '28 Mar', title: 'Revised Academic Calendar for Even Semester 2026', type: 'Academic' },
              { date: '25 Mar', title: 'Tender Notice for Procurement of Lab Equipment', type: 'Tender' },
              { date: '20 Mar', title: 'Schedule for Mid-Term Examinations', type: 'Exam' },
              { date: '15 Mar', title: 'Call for Papers: International Conference on AI', type: 'Event' },
            ].map((notice, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer">
                <div className="w-16 shrink-0 text-center">
                  <span className="block text-sm font-bold text-orange-500">{notice.date.split(' ')[0]}</span>
                  <span className="block text-xs uppercase tracking-wider text-black/60">{notice.date.split(' ')[1]}</span>
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-black/5 rounded text-[10px] font-medium uppercase tracking-wider mb-1">
                    {notice.type}
                  </span>
                  <p className="text-sm font-medium group-hover:text-orange-600 transition-colors line-clamp-2">
                    {notice.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VisionMission = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-5xl mb-8 text-orange-400">Our Vision</h2>
          <p className="text-xl leading-relaxed font-light text-white/80">
            "To create a center for imparting technical education of international standards and conduct research at the cutting edge of technology to meet the current and future challenges of technological development."
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl mb-8 text-orange-400">Our Mission</h2>
          <ul className="space-y-6 text-lg font-light text-white/80">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
              <p>To create an environment of excellence in teaching and learning.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
              <p>To promote research and development activities.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
              <p>To produce competent professionals with high ethical values.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const News = () => {
  const news = [
    {
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
      title: "Tech Symposium 2026",
      date: "15 Mar 2026",
      featured: false
    },
    {
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
      title: "Alumni Meet & Networking Event",
      date: "10 Mar 2026",
      featured: true
    },
    {
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
      title: "New AI Research Lab Inauguration",
      date: "05 Mar 2026",
      featured: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-5xl mb-6">Events & News</h2>
        <p className="max-w-2xl mx-auto text-black/70 mb-16">
          Stay updated with the latest announcements, events, and achievements from the MITS community.
        </p>
      </motion.div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 items-end"
      >
        {news.map((newsItem, i) => (
          <motion.div variants={item} key={i} className={`border border-black rounded-[2rem] p-4 bg-white/40 backdrop-blur-sm text-left flex flex-col ${newsItem.featured ? 'md:-translate-y-8' : ''}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
              <img src={newsItem.img} alt={newsItem.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {newsItem.date}
              </div>
            </div>
            <div className="flex items-end justify-between gap-4 mt-auto">
              <h3 className="font-medium text-lg leading-tight">{newsItem.title}</h3>
              <button className="w-10 h-10 shrink-0 rounded-full border border-black flex items-center justify-center hover:bg-[#f2e8e3] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 px-6 py-3 border border-black rounded-full hover:bg-[#f2e8e3] transition-colors font-medium inline-flex items-center gap-2"
      >
        View All Events <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};

export const Home = () => {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem('hasSeenNotice');
    if (!hasSeenNotice) {
      const timer = setTimeout(() => {
        setIsNoticeOpen(true);
        sessionStorage.setItem('hasSeenNotice', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <NoticePopup isOpen={isNoticeOpen} onClose={() => setIsNoticeOpen(false)} />
      <Hero />
      <Marquee />
      <Highlights />
      <QuickLinks />
      <VisionMission />
      <News />
    </>
  );
};
