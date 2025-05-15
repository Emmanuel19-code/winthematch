import React from 'react'

const ProPlan = () => {
  return (
    <div className="bg-teal-600 rounded-2xl shadow-lg p-6 flex flex-col justify-between transform scale-105 ring-4 ring-teal-400">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Pro</h3>
                  <p className="text-white mb-6">
                    Advanced stats and picks for serious bettors.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Everything in Free</li>
                    <li>✅ Expert predictions</li>
                    <li>✅ Odds alerts</li>
                    <li>❌ Personal account manager</li>
                  </ul>
                </div>
                <button className="mt-6 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-xl">
                  Subscribe - $19/mo
                </button>
              </div>
  )
}

export default ProPlan
