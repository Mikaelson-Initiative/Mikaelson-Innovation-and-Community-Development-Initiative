import { HowToPartner } from '@/features/website/components/sponsor/how-to-partner';
import { SponsorHeader } from '@/features/website/components/sponsor/sponsor-header';
import { SponsorshipOptions } from '@/features/website/components/sponsor/sponsor-options';
import { SponsorsShowcase } from '@/features/website/components/sponsor/sponsor-showcase';
import React from 'react'

const SponsorPage = () => {
  return (
    <div className='p-5'>
      <SponsorHeader />
      <SponsorshipOptions />
      <HowToPartner />
      <SponsorsShowcase />
    </div>
  );
}

export default SponsorPage