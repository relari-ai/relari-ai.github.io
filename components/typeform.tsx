"use client"; // This is a client component

import { Widget } from '@typeform/embed-react'

export default function Typeform() {
  return (

    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="relative bg-gray-900 rounded-lg py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
            {/* CTA content */}
            <div className="text-center lg:text-left lg:max-w-xl">
              <h3 className="h3 text-white">Want to know more?</h3>
              <p className="text-gray-300 text-lg pb-12">Fill the form to be contacted for a demo.</p>
            </div>
            <Widget id="veMUvQNR" style={{ height: '500px', width: '100%' }} />
            <p className="text-sm text-gray-400 mt-3">No spam, we promise.</p>
          </div>
        </div>
      </div>
    </section>

  )
}