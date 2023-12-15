import React from "react";
import { plans } from "./plans";
import PlanCard from "./PlanCard";
import Link from "next/link";
export default function MembershipModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-8 rounded-lg max-w-4xl mx-auto space-y-4">
        <h2 className="text-4xl font-serif font-bold mb-6">Membership plans</h2>
        <div className="flex justify-center space-x-4">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
        <Link href="/" className="absolute top-4 right-4 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
