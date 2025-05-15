"use client";
import Footer from "@/components/footer";
import FreePlan from "@/components/FreePlan";
import Header from "@/components/Header";
import ProPlan from "@/components/ProPlan";
import VipPlan from "@/components/VipPlan";
import { ChevronRight } from "lucide-react";
import React from "react";

const VipPage = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-teal-600 p-2">
        <p className="text-white font-medium">3 MAY 2025</p>
      </div>
      <Header />
      <div className="bg-[url('/dice.jpg')] flex flex-col justify-center   bg-cover bg-center p-4 w-full h-64 relative  ">
        <div className="relative z-10 mt-6">
          <h4 className="text-white text-3xl font-medium">CONTACT</h4>
          <div className="flex flex-row items-center space-x-2">
            <h4 className="text-sm text-white">HOME</h4>
            <ChevronRight className="w-4 text-teal-400" />
            <p className="text-sm text-white ">WinTheMatch</p>
            <ChevronRight className="w-4 text-teal-400" />
            <p className="text-sm text-teal-400">SUBSCRIPTION</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full py-12 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <FreePlan />

              {/* Pro Plan */}
              <ProPlan />

              {/* VIP Plan */}
              <VipPlan />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VipPage;
