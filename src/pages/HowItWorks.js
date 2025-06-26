import React from "react";
import { ClipboardCheck, FileText, Send, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-white" />,
    title: "Step 1: Free Eligibility Check",
    description: "Fill out a short form and find out if you qualify for a visa.",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
  },
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: "Step 2: Document Preparation",
    description: "We help gather and format all required documents professionally.",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
  },
  {
    icon: <Send className="h-8 w-8 text-white" />,
    title: "Step 3: Application Submission",
    description: "We apply on your behalf with complete accuracy and tracking.",
    bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-700",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-white" />,
    title: "Step 4: Get Your Visa",
    description: "Receive your visa decision and take the next step toward your future.",
    bgColor: "bg-gradient-to-br from-rose-500 to-rose-700",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          📝 How It Works
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} p-6 rounded-2xl text-left shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-white`}
            >
              <div className="mb-4 bg-white/20 p-4 w-fit rounded-full">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
