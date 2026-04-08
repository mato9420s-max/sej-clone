import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MegaSidebar } from '@/components/layout/MegaSidebar';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-10 prose prose-lg max-w-none">
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us, such as when you subscribe to our newsletter, create an account, or contact us. This may include your name, email address, and other information you choose to share.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We also automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, pages visited, and the time and date of your visit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, send you newsletters and updates, respond to your inquiries, and personalize your experience on our website.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We may also use your information to analyze usage patterns and improve our website's functionality and content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                3. Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                4. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                5. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, update, or delete your personal information at any time. You can also opt-out of receiving promotional emails by following the instructions in those emails.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                6. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please{' '}
                <Link href="/contact" className="text-[#FF6B00] font-bold hover:underline">
                  contact us
                </Link>
                .
              </p>
            </section>

            {/* Last Updated */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-12">
              <p className="text-sm text-gray-600">
                <span className="font-bold">Last Updated:</span> April 7, 2026
              </p>
            </div>
          </div>

          <MegaSidebar />
        </div>
      </div>
    </main>
  );
}
