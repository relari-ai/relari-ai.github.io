export const metadata = {
  title: 'Relari.ai',
  description: 'Reliable AI for financial services',
}

import Hero from '@/components/hero'
// import Features from '@/components/features'
// import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Typeform from '@/components/typeform'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <FeaturesBlocks /> */}
      <Testimonials />
      {/* <Newsletter /> */}
      <Typeform />
    </>
  )
}
