import React, { useState } from 'react'

const PriceCalculator = () => {
  const [type, setType] = useState("2")

  const price = type === "2" ? "Rs. 75 Lakhs*" : "Rs. 95 Lakhs*"

  return (
    <div className="bg-surface-lowest border border-secondary/20 rounded p-6 mb-8">

        <label className="block text-[11px] font-medium tracking-widest uppercase text-outline mb-2">
          Select Unit Type
        </label>

      <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-sm text-on-surface mb-6 cursor-pointer"
      >
        <option value="2">2 BHK Apartment</option>
        <option value="3">3 BHK Apartment</option>
      </select>

        <p className="text-[11px] font-medium tracking-widest uppercase text-outline mb-1">Estimated Price</p>
      <p className="font-serif text-3xl font-bold text-primary">{price}</p>

      <p className="text-[11px] text-outline mt-2">
          *Base price. Excludes taxes and registration.
      </p>

    </div>
  )
}

export default PriceCalculator