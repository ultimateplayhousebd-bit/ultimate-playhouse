import React from 'react';
import { X, FileCode, ExternalLink, Sparkles, Image, Trophy } from 'lucide-react';

interface EditGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
}

export const EditGuideModal: React.FC<EditGuideModalProps> = ({ isOpen, onClose, formUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="bg-[#0a0a0a] border border-yellow-600/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-white">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] text-gray-400 hover:text-white transition-colors"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-yellow-600/10 border border-yellow-600/30 text-[#D4AF37]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Beginner's <span className="text-[#D4AF37]">Edit Guide</span>
            </h3>
            <p className="text-xs text-gray-400">
              How to edit tournament details, links, images, and Hall of Fame champions
            </p>
          </div>
        </div>

        {/* Guide Steps */}
        <div className="space-y-5 text-xs sm:text-sm text-gray-300">
          
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-[#111111] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#D4AF37] uppercase text-xs tracking-wider">
              <FileCode className="w-4 h-4" />
              <span>1. Main Content File</span>
            </div>
            <p className="leading-relaxed text-gray-300">
              All website text, dates, fees, prize pools, and player names are saved in one simple configuration file:
            </p>
            <div className="p-2.5 rounded-lg bg-[#050505] border border-white/10 font-mono text-[#D4AF37] text-xs font-bold">
              src/data/communityData.ts
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-[#111111] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#D4AF37] uppercase text-xs tracking-wider">
              <ExternalLink className="w-4 h-4" />
              <span>2. How to set your Google Form link</span>
            </div>
            <p className="leading-relaxed text-gray-300">
              Open <code className="text-[#D4AF37] font-mono">src/data/communityData.ts</code> and find:
            </p>
            <pre className="p-3 rounded-lg bg-[#050505] border border-white/10 font-mono text-xs text-gray-200 overflow-x-auto whitespace-pre-wrap">
{`registrationFormUrl: "https://YOUR_GOOGLE_FORM_LINK_HERE"`}
            </pre>
            <p className="text-gray-400 text-xs">
              Replace <code className="text-[#D4AF37] font-mono">https://YOUR_GOOGLE_FORM_LINK_HERE</code> with your actual Google Form URL! When users click "REGISTER NOW", it will open your form in a new tab.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-[#111111] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#D4AF37] uppercase text-xs tracking-wider">
              <Image className="w-4 h-4" />
              <span>3. How to replace Poster & Player Photos</span>
            </div>
            <p className="leading-relaxed text-gray-300">
              In <code className="text-[#D4AF37] font-mono">communityData.ts</code>, paste any image web URL or file path into <code className="text-[#D4AF37] font-mono">posterUrl</code> or <code className="text-[#D4AF37] font-mono">avatar</code> fields:
            </p>
            <pre className="p-3 rounded-lg bg-[#050505] border border-white/10 font-mono text-xs text-gray-200 overflow-x-auto whitespace-pre-wrap">
{`posterUrl: "https://your-domain.com/my-poster.png",
avatar: "https://your-domain.com/champion-photo.jpg"`}
            </pre>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-xl bg-[#111111] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#D4AF37] uppercase text-xs tracking-wider">
              <Trophy className="w-4 h-4" />
              <span>4. How to add new Hall of Fame seasons</span>
            </div>
            <p className="leading-relaxed text-gray-300">
              Inside <code className="text-[#D4AF37] font-mono">hallOfFame: [...]</code> array in <code className="text-[#D4AF37] font-mono">communityData.ts</code>, copy one season block and paste it at the top with your new champion, runner-up, golden boot, and MVP details!
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-yellow-400 text-black font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Got It!
          </button>
        </div>

      </div>

    </div>
  );
};
