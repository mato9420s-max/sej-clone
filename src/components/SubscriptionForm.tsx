'use client';

import React, { useState } from 'react';
import { Check, AlertCircle, Loader, ArrowRight, X } from 'lucide-react';

// Add animations
const animationStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessPopup(true);
        setEmail('');
      } else {
        setErrorMessage(data.message || data.error);
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <>
      <style>{animationStyles}</style>
      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={loading}
            required
            className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !email}
            className="px-8 py-4 bg-[#FF6B00] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-[#E65A00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Error Message Display */}
        {errorMessage && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-950/30 border border-red-700 text-red-300">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium">{errorMessage}</span>
          </div>
        )}
      </div>

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            style={{ animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closePopup}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center text-center px-6 pb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight italic">
                Thank You!
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                You've been successfully subscribed to our newsletter. Check your inbox for the latest SEO insights!
              </p>

              <button
                onClick={closePopup}
                className="bg-[#FF6B00] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-[#E65A00] transition-colors w-full"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
