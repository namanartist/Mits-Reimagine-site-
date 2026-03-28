import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, ShieldCheck, Download, Info, ArrowRight, CheckCircle2, Building, GraduationCap } from 'lucide-react';

export const FeeStructure = () => {
  const feeData = [
    { program: 'B.Tech (Core)', tuition: '₹ 45,000', development: '₹ 10,000', other: '₹ 5,000', total: '₹ 60,000' },
    { program: 'B.Tech (IT/AI)', tuition: '₹ 55,000', development: '₹ 12,000', other: '₹ 8,000', total: '₹ 75,000' },
    { program: 'B.Arch', tuition: '₹ 50,000', development: '₹ 10,000', other: '₹ 5,000', total: '₹ 65,000' },
    { program: 'M.Tech', tuition: '₹ 40,000', development: '₹ 8,000', other: '₹ 2,000', total: '₹ 50,000' },
    { program: 'MCA', tuition: '₹ 35,000', development: '₹ 5,000', other: '₹ 5,000', total: '₹ 45,000' },
    { program: 'Ph.D.', tuition: '₹ 25,000', development: '₹ 5,000', other: '₹ 5,000', total: '₹ 35,000' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Fee Structure 2026-27</h1>
        <p className="text-lg text-black/70 max-w-2xl mx-auto">
          Transparent and comprehensive fee details for all academic programs. All fees are as per the guidelines of the State Government and DTE.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Fee Table */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-black/10 rounded-[2.5rem] overflow-hidden shadow-xl">
            <div className="p-8 bg-black text-white flex items-center justify-between">
              <h2 className="font-serif text-3xl text-orange-400">Academic Fees</h2>
              <span className="px-4 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Per Semester</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10 bg-black/5">
                    <th className="py-6 px-8 font-bold text-sm uppercase tracking-wider">Program</th>
                    <th className="py-6 px-8 font-bold text-sm uppercase tracking-wider">Tuition</th>
                    <th className="py-6 px-8 font-bold text-sm uppercase tracking-wider">Dev. Fee</th>
                    <th className="py-6 px-8 font-bold text-sm uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((fee, i) => (
                    <tr key={i} className="border-b border-black/5 hover:bg-black/5 transition-colors group">
                      <td className="py-6 px-8 font-medium text-lg group-hover:text-orange-600 transition-colors">{fee.program}</td>
                      <td className="py-6 px-8 text-black/60">{fee.tuition}</td>
                      <td className="py-6 px-8 text-black/60">{fee.development}</td>
                      <td className="py-6 px-8 font-bold text-lg text-black">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-8 bg-black/5 border-t border-black/10 flex items-center gap-4">
              <Info className="w-6 h-6 text-orange-500 shrink-0" />
              <p className="text-sm text-black/60 italic">
                * Caution money (one-time, refundable) of ₹ 5,000 is applicable for new admissions.
              </p>
            </div>
          </div>

          {/* Hostel Fees */}
          <div className="bg-[#f2e8e3] p-10 rounded-[2.5rem] border border-black/10">
            <h2 className="font-serif text-3xl mb-8 flex items-center gap-4">
              <Building className="w-8 h-8 text-orange-600" />
              Hostel & Mess Charges
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-3xl border border-black/5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Hostel Rent</h3>
                <p className="text-3xl font-serif text-orange-600 mb-2">₹ 12,000</p>
                <p className="text-xs text-black/40 uppercase tracking-widest font-bold">Per Semester</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-black/5 shadow-sm">
                <h3 className="font-bold text-lg mb-2">Mess Charges</h3>
                <p className="text-3xl font-serif text-orange-600 mb-2">₹ 18,000</p>
                <p className="text-xs text-black/40 uppercase tracking-widest font-bold">Per Semester (Approx)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="p-8 bg-black text-white rounded-[2rem] shadow-2xl">
            <h3 className="font-serif text-2xl mb-6 text-orange-400">Payment Options</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Online Portal</h4>
                  <p className="text-sm text-white/60">Pay via Net Banking, UPI, or Credit/Debit Cards through our secure portal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Bank Challan</h4>
                  <p className="text-sm text-white/60">Generate a challan and pay at any branch of Union Bank of India.</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Go to Payment Portal <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8 border border-black/10 rounded-[2rem] bg-white">
            <h3 className="font-serif text-2xl mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-orange-500" />
              Scholarships
            </h3>
            <p className="text-sm text-black/70 mb-6 leading-relaxed">
              Various government and institute-level scholarships are available for meritorious and reserved category students.
            </p>
            <ul className="space-y-3 mb-8">
              {['Post-Metric Scholarship', 'MMJKY Scheme', 'Merit-cum-Means'].map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" /> {s}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
