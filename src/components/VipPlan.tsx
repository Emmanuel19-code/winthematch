import React from "react";

const VipPlan = () => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-4">VIP</h3>
        <p className="text-gray-300 mb-6">
          Full access, VIP support & personal insights.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="text-white">✅ Everything in Pro</li>
          <li className="text-white">✅ 1-on-1 betting consultation</li>
          <li className="text-white">✅ VIP-only picks & Discord access</li>
          <li className="text-white">✅ Early access to new features</li>
        </ul>
      </div>
      <button className="mt-6 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-xl">
        Upgrade - $49/mo
      </button>
    </div>
  );
};

export default VipPlan;
