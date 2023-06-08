import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="mx-auto text-center pb-12 md:pb-8">
            <h2 className="h4 mb-4">Backed by</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-3 md:grid-cols-3">

            {/* Item */}
            {/* <div className="flex items-center justify-center py-2 col-span-2 md:col-auto grayscale opacity-60">
              <img src="images/MIT_logo.svg"  width="125" alt="MIT"/>
            </div> */}

            {/* Item */}
            {/* <div className="flex items-center justify-center py-2 col-span-2 md:col-auto grayscale opacity-60">
              <img src="images/pillar-logo.svg"  width="125" alt="Pillar VC"/>
            </div> */}

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto grayscale opacity-60">
              <img src="images/sandbox-logo.png"  width="125" alt="MIT Sandbox"/>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto grayscale opacity-60">
              <img src="images/hilab-logo.png"  width="125" alt="Harvard Innovation Lab"/>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4 grayscale opacity-60">
              <img src="images/aic-logo.png"  width="125" alt="AI Collective"/> 
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}