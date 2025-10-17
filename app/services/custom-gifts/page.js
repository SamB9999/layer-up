import Link from 'next/link'

export default function CustomGifts() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Personalized Custom Gifts
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Give a gift they'll never forget. From personalized keepsakes to custom toys and 
                memorabilia, our 3D printed gifts are thoughtful, unique, and perfectly tailored 
                to your special someone.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
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
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                Design Your Gift
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center h-80">
              <svg
                className="w-48 h-48 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Custom 3D Printed Gifts?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Truly Personal</h3>
              <p className="text-gray-700">
                Add names, dates, messages, or custom designs to make it uniquely theirs.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One of a Kind</h3>
              <p className="text-gray-700">
                Give something no one else has. A gift as unique as the recipient.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Memorable</h3>
              <p className="text-gray-700">
                Create lasting memories with a thoughtful, custom-made gift they'll treasure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Ideas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Gift Ideas for Every Occasion
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From birthdays to weddings, holidays to anniversaries—we've got you covered
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                occasion: 'Weddings & Anniversaries',
                items: 'Cake toppers, ring holders, decorative centerpieces, custom figurines'
              },
              { 
                occasion: 'Birthdays',
                items: 'Personalized toys, miniature models, custom trophy awards'
              },
              { 
                occasion: 'Baby Showers',
                items: 'Name plaques, nursery decor, keepsake boxes, milestone markers'
              },
              { 
                occasion: 'Graduations',
                items: 'School logos, class year memorabilia, achievement awards'
              },
              { 
                occasion: 'Corporate Gifts',
                items: 'Company logos, branded items, employee recognition awards'
              },
              { 
                occasion: 'Holidays',
                items: 'Ornaments, decorations, themed figurines, festive displays'
              },
            ].map((gift, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-3">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1"
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
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{gift.occasion}</h3>
                    <p className="text-sm text-gray-600">{gift.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Creating Your Custom Gift
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Share Your Idea', desc: 'Tell us what you want or upload a design' },
              { step: '2', title: 'We Design', desc: 'We create or refine the 3D model for you' },
              { step: '3', title: 'You Approve', desc: 'Review and approve the design before printing' },
              { step: '4', title: 'We Deliver', desc: 'Receive your custom gift, ready to give' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Give a Gift That Stands Out
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start creating your personalized 3D printed gift today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/upload"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

