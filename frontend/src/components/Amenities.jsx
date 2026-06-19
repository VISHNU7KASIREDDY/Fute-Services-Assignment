import React, { useState } from 'react'

const Amenities = () => {

  const [amenities, setAmenities] = useState([
      "Swimming Pool", "Club House", "Gym", "Children's Play Area",
    "Landscaped Garden", "24/7 Security", "Parking", "Jogging Track"
  ])
  const [addAmenity, setAddAmenity] = useState("")

  function handleSubmit(e) {
      e.preventDefault()
    const val = addAmenity.trim()
    if (val) {
        setAmenities([...amenities, val])
      setAddAmenity("")
    }
  }

  return (
    <section id="amenities" className="mb-24">

        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-3">
              Curated Amenities
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Spaces designed to elevate your daily routine into a resort-like experience.
          </p>
        </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {amenities.map((item, ix) => (
            <div key={ix} className="flex items-center justify-center py-4 px-3 border border-outline-variant/50 rounded text-sm text-on-surface text-center">
              {item}
            </div>
        ))}
      </div>

        <div className="max-w-md mx-auto border border-outline-variant/50 rounded p-6">
          <span className="block text-xs font-semibold tracking-widest uppercase text-primary text-center mb-4">
              Suggest an Amenity
          </span>

          <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g., Tennis Court"
                value={addAmenity}
                onChange={(e) => setAddAmenity(e.target.value)}
                className="flex-1 bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none px-0 py-2 text-sm text-on-surface placeholder:text-outline transition-colors"
              />
            <button type="submit" className="bg-primary-container text-on-primary text-xs font-semibold tracking-widest uppercase px-4 py-2 hover:bg-primary transition-colors">
                Add
            </button>
          </form>
        </div>

    </section>
  )
}

export default Amenities