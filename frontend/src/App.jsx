import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Amenities from './components/Amenities'
import PriceCalculator from './components/PriceCalculator'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-5 md:px-10 py-20">
        <section id="residences" className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-5">
              The Essence of Green Valley
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Green Valley Residency is a premium residential project located in Whitefield, Bangalore.
              The project offers thoughtfully designed 2 BHK and 3 BHK homes with modern amenities,
              landscaped gardens, and excellent connectivity to IT parks, schools, hospitals, and
              shopping zones. Designed for those who seek tranquility without compromising on urban convenience.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="bg-surface-lowest border border-outline-variant/50 rounded p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-medium text-primary mb-5 pb-4 border-b border-outline-variant/30">
                Project Overview
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[11px] font-medium tracking-widest uppercase text-outline mb-1">Location</p>
                  <p className="text-sm font-medium text-on-surface">Whitefield, Bangalore</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-widest uppercase text-outline mb-1">Property Type</p>
                  <p className="text-sm font-medium text-on-surface">2 BHK &amp; 3 BHK Apartments</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-widest uppercase text-outline mb-1">Starting Price</p>
                  <p className="text-sm font-medium text-on-surface">Rs. 75 Lakhs</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-widest uppercase text-outline mb-1">Possession</p>
                  <p className="text-sm font-medium text-on-surface">December 2027</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[11px] font-medium tracking-widest uppercase text-outline mb-1">Developer</p>
                  <p className="text-sm font-medium text-on-surface">Green Valley Developers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Amenities />

        <section id="enquire" className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-surface-low p-8 md:p-12 rounded-lg mb-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
              Investment Overview
            </h2>
            <p className="text-lg text-on-surface-variant mb-8">
              Select a unit type to view estimated pricing and submit your details for a personalized consultation.
            </p>
            <PriceCalculator />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
