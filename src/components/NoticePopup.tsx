import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight, Bell } from 'lucide-react';

interface NoticePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: React.ReactNode;
  link?: { text: string; url: string };
}

export const NoticePopup: React.FC<NoticePopupProps> = ({ 
  isOpen, 
  onClose, 
  title = "Important Notice", 
  message,
  link 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-cream border border-oxford/20 rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-oxford/5 rounded-full blur-3xl" />

            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 p-2 hover:bg-oxford/5 rounded-full transition-colors z-10"
              aria-label="Close notice"
            >
              <X className="w-5 h-5 text-oxford" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-oxford" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-oxford font-semibold tracking-tight">
                    {title}
                  </h3>
                  <div className="h-1 w-12 bg-gold rounded-full mt-1" />
                </div>
              </div>

              <div className="space-y-4 text-oxford/80 leading-relaxed text-base md:text-lg">
                {message || (
                  <>
                    <p>
                      <strong>Admissions 2026:</strong> The first round of counseling for B.Tech programs is now live. Please ensure all documents are uploaded by the deadline.
                    </p>
                    <p>
                      <strong>Scholarship Update:</strong> Applications for the Merit-cum-Means scholarship are open until April 15th, 2026.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onClose}
                  className="flex-1 py-4 px-8 bg-oxford text-cream rounded-full font-medium hover:bg-oxford/90 transition-all shadow-lg shadow-oxford/20 flex items-center justify-center gap-2 group"
                >
                  {link?.text || "View Details"} 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 py-4 px-8 border border-oxford/20 text-oxford rounded-full font-medium hover:bg-oxford/5 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
