import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className="section-container mb-40 pt-20">
              <img
                  src="/images/logo.svg"
                  alt=""
                  className="mx-auto my-16"
              />
              <h3>
                  A history of everything you copy
              </h3>
              <p className="section-content mb-10 text-2xl">
                    Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
              </p>

              <div
                  className="button-container"
              >
                    <a href="#" className="button-green">Download for iOS</a>
                    <a href="#" className="button-blue">Download for Mac</a>
              </div>
        </div>
    </section>
  )
}

export default HeroSection