import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Layer Up
            </h1>
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          </div>

          {/* Hero Text */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Custom 3D Printing — Upload your design for a free quote
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Transform your ideas into reality with professional 3D printing services. 
            Fast turnaround, high quality, competitive pricing.
          </p>

          {/* CTA Button */}
          <Link
            href="/upload"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Your File
          </Link>
        </div>
      </section>

      {/* Example Prints Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Example Prints
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example Print 1 - Prototypes */}
            <Link href="/services/prototypes" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-colors duration-300">
                  <svg
                    className="w-20 h-20 text-primary group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">Prototypes</h4>
                  <p className="text-sm text-gray-600 mb-2">High-precision prototypes for product development</p>
                  <span className="text-sm text-primary font-semibold">Learn more →</span>
                </div>
              </div>
            </Link>

            {/* Example Print 2 - Custom Parts */}
            <Link href="/services/custom-parts" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-colors duration-300">
                  <svg
                    className="w-20 h-20 text-purple-600 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Custom Parts</h4>
                  <p className="text-sm text-gray-600 mb-2">Replacement parts and custom components</p>
                  <span className="text-sm text-purple-600 font-semibold">Learn more →</span>
                </div>
              </div>
            </Link>

            {/* Example Print 3 - Art & Decor */}
            <Link href="/services/art-decor" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center group-hover:from-pink-200 group-hover:to-pink-300 transition-colors duration-300">
                  <svg
                    className="w-20 h-20 text-pink-600 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">Art & Decor</h4>
                  <p className="text-sm text-gray-600 mb-2">Unique decorative pieces and artistic creations</p>
                  <span className="text-sm text-pink-600 font-semibold">Learn more →</span>
                </div>
              </div>
            </Link>

            {/* Example Print 4 - Custom Gifts */}
            <Link href="/services/custom-gifts" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-colors duration-300">
                  <svg
                    className="w-20 h-20 text-green-600 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Custom Gifts</h4>
                  <p className="text-sm text-gray-600 mb-2">Personalized gifts and special occasion items</p>
                  <span className="text-sm text-green-600 font-semibold">Learn more →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Upload */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white mb-6 shadow-lg">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Upload</h4>
              <p className="text-gray-600">
                Upload your 3D design file (.stl, .obj) or images and tell us what you need
              </p>
            </div>

            {/* Step 2: Print */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white mb-6 shadow-lg">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Print</h4>
              <p className="text-gray-600">
                We review your design, provide a quote, and print your model with precision
              </p>
            </div>

            {/* Step 3: Delivered */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white mb-6 shadow-lg">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Delivered</h4>
              <p className="text-gray-600">
                Your finished print is carefully packaged and delivered to your door
              </p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center text-primary hover:text-blue-600 font-semibold transition-colors duration-200"
            >
              Learn more about us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

