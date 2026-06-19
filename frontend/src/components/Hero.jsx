import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-150 flex items-center justify-center mt-16">

        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAusmZ1G4U131POUASVdVitfWyGY4Zu74ddF0UxnzRF6vQnouDgxH0sfmpRrjMOV6FGd4GaD_eCgMv4qyNtT4RTHVnkotcBPkI6sdJrStfNWO36OruGGPGHMWy0DXBlklG_c4DkF6l7FK2qATM589JxfJq2Vr9kgNfS-b6NSz10r5tBTlnFSqGyYPym0Aw6-PzmOOmuZfmCsP8DFvVMwFNq923Ho1Gt_eQI6Qx1EnEU_4SDLNPdOpiBHVTs7zozR3C8bWFj3gIWAjc"
            alt="Green Valley Residency Exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 luxury-overlay" />
        </div>

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white leading-tight mb-4">
            Green Valley Residency
          </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-10">
            Premium Homes for Modern Living
        </p>
      </div>

    </section>
  )
}

export default Hero