import React from 'react'

const Servicessection = () => {
  return (
        <section className="w-full  py-16 font2">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 font3">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h4 className="font-semibold font3">Frontend Development</h4>
              <p className="text-sm mt-2 opacity-80">
                Custom-coded responsive websites.
              </p>
            </div>

            <div className="p-4 border rounded">
              <h4 className="font-semibold font3">UI Animations</h4>
              <p className="text-sm mt-2 opacity-80">
                GSAP & Framer Motion smooth interactions.
              </p>
            </div>

            <div className="p-4 border rounded">
              <h4 className="font-semibold font3">Modern UI Design</h4>
              <p className="text-sm mt-2 opacity-80">
                Simple, minimal & fast UI layouts.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Servicessection