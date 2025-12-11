import React from "react";

const reminders = [
  {
    title: "৪০ হাদিস",
    image: "/public/image/Rectangle 1 (6).svg",
    description:
      "আবু হুরায়রা (রাঃ) বর্ণিত — 'যে ব্যক্তি আমার থেকে চল্লিশ হাদীস মুখস্থ করবে, আল্লাহ তাকে পুনরুত্থানের দিন আলেমদের দলে অন্তর্ভুক্ত করবেন।' (ইবন মাজাহ: ২৩১৩, হাদীস: ৩৬৩১)",
  },
  {
    title: "আজকের দোয়া",
    image: "/public/image/image 14.svg",
    description:
      "প্রভু! আজকের দিনে আমাকে এমন কাজ করার তাওফিক দিন যা তোমার সন্তুষ্টির কারণ হয়। আমাকে গোনাহ থেকে দূরে রাখো। আমিন।",
  },
  {
    title: "আজকের হাদিস",
    image: "/public/image/image 15.svg",
    description:
      "রাসূল ﷺ বলেছেন — 'তোমাদের মধ্যে যে ব্যক্তি কুরআন ও সুন্নাহর আলোকে জীবন যাপন করবে, সে সফল হবে।' (বুখারী, মুসলিম)",
  },
  {
    title: "আল্লাহর ৯৯ নামসমূহ",
    image: "/public/image/image 16.svg",
    description:
      "আস-সালাম — অর্থ: নিরাপত্তা দানকারী, শান্তি দানকারী, ত্রুটিমুক্ত, দোষমুক্ত।",
  },
];

const DailyReminder = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0E8A4A] mb-10">
        ডেইলি রিমাইন্ডার
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {reminders.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-5 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-[#0E8A4A] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="border border-[#0E8A4A] text-[#0E8A4A] px-6 py-2 rounded-lg font-semibold hover:bg-[#0E8A4A] hover:text-white transition">
          আরও দেখুন...
        </button>
      </div>
    </section>
  );
};

export default DailyReminder;
