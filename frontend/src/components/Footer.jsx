import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary w-full py-20 border-t border-primary-container">
      <div className="max-w-7xl mx-auto px-10">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="md:col-span-1 mb-8 md:mb-0">
                <h4 className="font-serif text-xl font-semibold text-white mb-3">
                  Green Valley Residency
                </h4>
              <p className="text-white/70 text-sm">
                  A Sanctuary of Architectural Precision.
              </p>
            </div>
          </div>

        <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/35 text-xs">
              © 2024 Green Valley Residency. A Sanctuary of Architectural Precision.
            </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
