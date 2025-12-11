import React from "react";

const HadithPage = () => {
  const topics = [
    { name: "আকিদা", count: "৭", icon: "📖" },
    { name: "ঈমান", count: "৫", icon: "🕋" },
    { name: "পরিচ্ছন্নতা", count: "১২", icon: "💧" },
    { name: "হাদীসের গল্প", count: "৩১", icon: "📜" },
    { name: "সালাত", count: "৮৮", icon: "🕌" },
    { name: "দান সদকা", count: "৪৫", icon: "🧴" },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Subscribe Section */}
      <div className="w-full bg-green-50 border border-green-100 mt-6 py-6 rounded-lg flex flex-col md:flex-row items-center justify-between px-6 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="email"
            className="w-16 h-16"
          />
          <p className="text-gray-700 text-lg font-medium">
            প্রতিদিন ইমেইলে হাদিস পেতে আমাদের সাবস্ক্রাইব করুন
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 rounded-md px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          বিষয়ভিত্তিক হাদিস
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ নয়
          বরং বিষয় অনুসারে সাজানো। এর মাধ্যমে ইসলামের নির্দিষ্ট বিষয়গুলোর উপর
          সহজে জ্ঞানার্জন সম্ভব হয়। এই সংগ্রহ আলেমগণ ও শিক্ষকদের সহায়ক হতে পারে
          যারা নির্দিষ্ট বিষয়ের শিক্ষা প্রদান করতে চান।
        </p>
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-16 max-w-5xl px-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="border border-green-200 bg-green-50 rounded-lg px-6 py-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {topic.name}
              </h3>
              <span className="text-3xl">{topic.icon}</span>
            </div>
            <p className="text-gray-600 text-sm">
              হাদীসের রেঞ্জ {topic.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HadithPage;
