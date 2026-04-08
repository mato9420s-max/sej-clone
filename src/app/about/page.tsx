import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Target, Award } from 'lucide-react';
import { MegaSidebar } from '@/components/layout/MegaSidebar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">
            About Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Empowering digital marketers with the latest insights and strategies in search, content, and paid media.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-12">
            {/* Mission */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 italic text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Search Engine Journal is dedicated to helping digital marketers succeed in an ever-changing landscape. Since 2003, we've been at the forefront of SEO, providing breaking news, in-depth analysis, and actionable strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to educate, empower, and inspire marketing professionals to achieve their goals through comprehensive coverage of search, content, and digital marketing trends.
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 italic text-gray-900">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for the highest standards in reporting and analysis.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Community</h3>
                  <p className="text-gray-600">
                    Building a thriving community of marketing professionals.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                  <p className="text-gray-600">
                    Staying ahead of the curve in digital marketing evolution.
                  </p>
                </div>
              </div>
            </section>

            {/* Team */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 italic text-gray-900">
                Our Team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our editorial team consists of seasoned digital marketing experts, journalists, and industry veterans who are passionate about delivering accurate, timely, and actionable insights. With decades of combined experience, we understand the challenges marketers face and provide solutions that matter.
              </p>
            </section>

            {/* CTA */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a Story to Share?</h3>
              <p className="text-gray-600 mb-6">
                Got news tips or want to contribute to Search Engine Journal? We'd love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-[#E65A00] transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <MegaSidebar />
        </div>
      </div>
    </main>
  );
}
