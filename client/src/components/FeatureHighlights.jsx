import React from "react";
import { Sparkles, Clock, Settings, Zap } from "lucide-react";

const FeatureHighlights = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Why Choose Our CMS?
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
        Designed for creators, developers, and teams who demand more.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Feature 1 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <Sparkles className="w-10 h-10 text-purple-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4 text-gray-800">
            Effortless Content Control
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Create, edit, and organize content with a sleek editor built for
            flow.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <Clock className="w-10 h-10 text-indigo-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4 text-gray-800">
            Smart Publishing Workflow
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Automate approvals, schedule posts, and collaborate like never
            before.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <Zap className="w-10 h-10 text-pink-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4 text-gray-800">
            Lightning Fast Performance
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Built on modern tech stack for blazing speed and zero lag.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
          <Settings className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-semibold mt-4 text-gray-800">
            Customizable Design Freedom
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            From colors to components, make your CMS truly yours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
