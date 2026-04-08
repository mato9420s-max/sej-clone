'use client';

import React, { useState } from 'react';
import { SubscribeModal } from './SubscribeModal';

export function SubscribeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#FF6B00] text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#E65A00] transition-colors shadow-lg shadow-orange-500/20"
      >
        Subscribe
      </button>
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
