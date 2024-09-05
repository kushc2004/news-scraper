'use client'

import Image from "next/image";
import Chatbot from '@/components/chatbot';
import GetStartupInsightsModal from '@/components/GetStartupInsights'
import GetStartupInsightsModal1 from '@/components/GetStartupInsights1'

export default function Home() {
  return (
    <div className=''>
      <div className='container mt-20'>
      </div>
      <GetStartupInsightsModal1
      isOpen={true}
      />
    </div>
  );
}
