import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-8">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Thank You Message */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your enquiry has been submitted successfully.
        </p>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Check Your Email</h3>
                <p className="text-gray-600">
                  We've sent a confirmation to your email address. Please check your inbox 
                  (and spam folder, just in case).
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">What Happens Next?</h3>
                <p className="text-gray-600">
                  We'll review your enquiry and get back to you within 24 hours with a detailed 
                  quote and timeline for your project.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Have Questions?</h3>
                <p className="text-gray-600">
                  Feel free to reach out to us at{' '}
                  <a
                    href="mailto:stephen.rx782@gmail.com"
                    className="text-primary hover:text-blue-600 font-semibold"
                  >
                    stephen.rx782@gmail.com
                  </a>
                  {' '}if you have any questions in the meantime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Return to Home
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white border-2 border-primary rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </main>
  )
}

