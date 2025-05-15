import React from 'react'

const FreePlan = () => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Free</h3>
                  <p className="text-gray-300 mb-6">
                    For casual users who want to explore betting insights.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className='text-white'>✅ Daily match previews</li>
                    <li className='text-white'>✅ Community tips</li>
                    <li className='text-white'>❌ Expert predictions</li>
                    <li className='text-white'>❌ Premium odds tracking</li>
                  </ul>
                </div>
                <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-xl">
                  Join Free
                </button>
              </div>
  )
}

export default FreePlan
