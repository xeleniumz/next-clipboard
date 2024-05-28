import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className="section-container mb-40 px-10 pt-20">
              <img
                  src="/images/logo.svg"
                  alt=""
                  className="mx-auto my-16"
              />
              <h3>
                  A history of everything you copy
              </h3>
              <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
                    Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
              </p>

              <div
                  className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4"
              >
                    <a href="#" className="button-green">Download for iOS</a>
                    <a href="#" className="button-blue">Download for Mac</a>
              </div>
        </div>
    </section>
  )
}

export default HeroSection