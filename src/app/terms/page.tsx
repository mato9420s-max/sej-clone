import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MegaSidebar } from '@/components/layout/MegaSidebar';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our website.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-10 prose prose-lg max-w-none">
            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Search Engine Journal, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                2. Use License
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Search Engine Journal for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under this license you may not: reproduce, distribute, transmit, display, or sell the materials; modify or alter the materials; or use the materials for any public display (commercial or non-commercial).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                3. Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on Search Engine Journal are provided "as is" without any representations or warranties, express or implied. We make no representations or warranties in relation to this website or the information and materials provided.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                4. Limitations of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Search Engine Journal, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                5. User Content
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In these terms and conditions, "User Content" shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying User Content, you grant Search Engine Journal a non-exclusive, worldwide irrevocable license to reproduce, adapt, and publish the User Content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                6. Prohibited Behavior
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You may not access or use the Website for any purpose other than that for which we make the Website available. The Website may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                7. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your access to our Website immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                8. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts located in that area.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic text-gray-900">
                9. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please{' '}
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
