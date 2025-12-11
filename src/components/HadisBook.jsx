import React from "react";

const hadisBooks = [
  {
    title: "সহীহ বুখারী",
    count: "হাদীসের সংখ্যা ৭০৫৬",
    image: "/public/image/Rectangle 1 (3).svg",
  },
  {
    title: "সহীহ মুসলিম",
    count: "হাদীসের সংখ্যা ৫৭৫৮",
    image: "/public/image/Rectangle 1 (4).svg",
  },
  {
    title: "সুনানে আবু দাউদ",
    count: "হাদীসের সংখ্যা ৫২৭৪",
    image: "/public/image/Rectangle 1 (5).svg",
  },
  {
    title: "জাল যয়িফ হাদীস সিরিজ",
    count: "হাদীসের সংখ্যা ১০২",
    image: "/public/image/Rectangle 1 (1).svg",
  },
  {
    title: "মুয়াত্তা ইমাম মালিক",
    count: "হাদীসের সংখ্যা ৮৬৩",
    image: "/public/image/Rectangle 1.svg",
  },
  {
    title: "সুনানে ইবনে মাজাহ",
    count: "হাদীসের সংখ্যা ৪৩৪১",
    image: "/public/image/Rectangle 1 (8).svg",
  },
];

const HadisBooks = () => {
  return (
    <section className="py-16 bg-[#F7FAF8] text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0E8A4A] mb-3">
        হাদীসের বইসমূহ
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-10">
        হাদীসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি গুরুত্বপূর্ণ উৎস।
        এই কিতাবগুলো মহানবী মুহাম্মদ ﷺ এর সীরাত (জীবনী) ও দিক-নির্দেশনার প্রতি আলোকপাত করে।
      </p>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {hadisBooks.map((book, index) => (
          <div
            key={index}
            className="bg-[#E8F5EE] border border-[#B9E5CC] rounded-xl p-5 flex items-center space-x-4 hover:shadow-md transition"
          >
            <img src={book.image} alt={book.title} className="w-14 h-14" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-[#0E8A4A]">
                {book.title}
              </h3>
              <p className="text-gray-600 text-sm">{book.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-[#0E8A4A] hover:bg-[#0b6c3b] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
          সকল হাদীস গ্রন্থসমূহ →
        </button>
      </div>
    </section>
  );
};

export default HadisBooks;
