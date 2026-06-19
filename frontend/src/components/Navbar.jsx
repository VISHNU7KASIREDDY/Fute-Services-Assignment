import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant shadow-sm">
      <div className="flex justify-between items-center px-10 py-3 max-w-7xl mx-auto">

          <a href="#" className="font-serif text-xl font-medium text-primary">
            Green Valley Residency
          </a>

        <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-low transition-colors" title="Toggle Theme" aria-label="Toggle theme">
              <span className="material-symbols-outlined text-on-surface text-[22px]">dark_mode</span>
            </button>

          <a href="#enquire" className="bg-primary-container text-on-primary text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-primary transition-colors">
              Enquire Now
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar