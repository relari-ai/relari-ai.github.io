import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 md:pt-40 md:pb-12">

          {/* Section header */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl leading-tighter tracking-tighter sm:mt-16 md:mt-24 lg:mt-48 mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent relari-gradient">Quality deliverables</span><br></br>10x faster</h1>
            <div className="mx-auto">
              <p className="text-2xl md:text-2xl font-light text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Trusted AI teammate for financial services</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://e193xb1mroy.typeform.com/to/veMUvQNR">Join waitlist</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}