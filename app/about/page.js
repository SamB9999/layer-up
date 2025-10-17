import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-blue-600 mb-8 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Layer Up</h1>
          <p className="text-xl text-gray-600">
            Bringing your ideas to life, one layer at a time
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 mb-12">
          {/* Story Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Layer Up was born from a passion for transforming digital designs into tangible reality. 
                What started as a hobby in a small workshop has grown into a professional 3D printing service 
                dedicated to helping creators, entrepreneurs, and innovators bring their ideas to life.
              </p>
              <p>
                Founded by an enthusiast who discovered the magic of 3D printing, Layer Up has always been 
                about more than just printing objects—it's about empowering people to prototype, create, 
                and innovate without the barriers of traditional manufacturing. Every project we take on 
                is an opportunity to learn, grow, and push the boundaries of what's possible with modern 
                additive manufacturing technology.
              </p>
              <p>
                Whether you're a designer creating your first prototype, an engineer testing a new concept, 
                or someone who simply has a great idea they want to see in physical form, we're here to help 
                you succeed. Our commitment is to deliver high-quality prints, fast turnaround times, and 
                exceptional customer service—every single time.
              </p>
            </div>
          </div>

          {/* Passion Section */}
          <div className="mb-12 bg-gray-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">The Passion Behind the Prints</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              My brother's journey with 3D printing began with a simple curiosity: "What if I could 
              make anything I can imagine?" That question led to countless late nights fine-tuning settings, 
              experimenting with different materials, and perfecting the craft of 3D printing. What drives 
              him every day is the excitement of seeing a digital model transform into a physical object, 
              and the satisfaction of knowing that each print serves a purpose—whether it's a functional 
              prototype, a replacement part, or a cherished gift. This dedication to quality and innovation 
              is what makes Layer Up different. Every project is treated with care, precision, and genuine 
              enthusiasm for the possibilities of 3D printing technology.
            </p>
          </div>

          {/* Setup Section */}
          <div>
            <div className="flex items-center mb-6">
              <svg
                className="w-8 h-8 text-primary mr-3"
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
              <h2 className="text-2xl font-bold text-gray-900">Our Setup</h2>
            </div>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Our printing facility is equipped with professional-grade 3D printers capable of producing 
                high-quality prints with excellent detail and dimensional accuracy. We work with a variety 
                of materials including PLA, PETG, ABS, and specialty filaments to meet the specific needs 
                of each project.
              </p>
              <p>
                Every printer in our setup has been carefully calibrated and maintained to ensure consistent, 
                reliable results. We use industry-standard slicing software and quality control processes to 
                verify that each print meets our high standards before it leaves our workshop.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-6">
            Let's turn your ideas into reality. Upload your design and get a free quote today.
          </p>
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
      </div>
    </main>
  )
}

