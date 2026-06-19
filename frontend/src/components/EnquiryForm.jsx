import { useState } from "react"

export default function EnquiryForm() {

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", unitType: "", message: "" })
  const [errors, setErrors] = useState({})
  const [successMsg, setSuccessMsg] = useState("")

  function handleChange(e) {
    const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  function validate() {
      let newErrors = {}
    if (!formData.name.trim())  newErrors.name     = "Please enter your name"
    if (!formData.email.trim()) newErrors.email    = "Please enter your email"
    if (!formData.phone.trim()) newErrors.phone    = "Please enter your phone number"
    if (!formData.unitType)     newErrors.unitType = "Please select interested unit type"
      setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
      if (!validate()) return
    console.log(formData)
      setSuccessMsg("Thank you! Our sales team will contact you soon.")
    setFormData({ name: "", email: "", phone: "", unitType: "", message: "" })
  }

  return (
    <div className="bg-surface-lowest border border-outline-variant/30 rounded p-8 shadow-sm">

        <h3 className="font-serif text-2xl font-medium text-primary mb-6">
          Register Your Interest
        </h3>

      {successMsg && (
          <div className="bg-primary-fixed text-primary p-4 rounded mb-6 text-sm">
            {successMsg}
          </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
            <label className="block text-[11px] font-medium tracking-widest uppercase text-outline mb-1">
              Full Name *
            </label>
          <input
              type="text"
            name="name"
            value={formData.name}
              onChange={handleChange}
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-sm text-on-surface transition-colors"
          />
          {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[11px] font-medium tracking-widest uppercase text-outline mb-1">
                  Email Address *
              </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-sm text-on-surface transition-colors"
                />
              {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-[11px] font-medium tracking-widest uppercase text-outline mb-1">
                  Phone Number *
                </label>
              <input
                type="tel"
                  name="phone"
                value={formData.phone}
                onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-sm text-on-surface transition-colors"
              />
              {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

        <div>
          <label className="block text-[11px] font-medium tracking-widest uppercase text-outline mb-1">
              Interested Unit Type *
          </label>
            <select
              name="unitType"
              value={formData.unitType}
                onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-sm text-on-surface transition-colors cursor-pointer"
            >
            <option value="">Select a unit type</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            </select>
          {errors.unitType && <p className="text-error text-xs mt-1">{errors.unitType}</p>}
        </div>

          <div>
            <label className="block text-[11px] font-medium tracking-widest uppercase text-outline mb-1">
              Message (Optional)
            </label>
            <textarea
                name="message"
              rows={3}
              value={formData.message}
                onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 text-sm text-on-surface resize-none transition-colors"
            />
          </div>

        <button
            type="submit"
          className="w-full bg-primary-container text-on-primary text-xs font-semibold tracking-widest uppercase py-4 hover:bg-primary transition-colors mt-2"
        >
            Submit Enquiry
        </button>

      </form>
    </div>
  )
}