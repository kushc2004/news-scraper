'use client'

import Image from "next/image";
import Chatbot from '@/components/chatbot';
import GetStartupInsightsModal from '@/components/GetStartupInsights'

export default function Home() {
  return (
    <div className=''>
      <div className='container mt-20'>
      </div>
      <GetStartupInsightsModal
      isOpen={true}
      />
    </div>
  );
}
