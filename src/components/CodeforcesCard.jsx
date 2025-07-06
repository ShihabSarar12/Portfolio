/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function CodeforcesCard() {
  return (
    <div className="bg-white mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-24 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Codeforces Problem Solving</h2>
      <div className="w-full h-52 flex items-center justify-center">
        {/* Replace this with a chart or real API data */}
        <p className="text-gray-500 italic text-center">
          [Chart showing solved problems by difficulty will appear here]
        </p>
      </div>
    </div>
  );
}
