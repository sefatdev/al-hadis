import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#E8F5EE] font-sans">
      {/* Navbar */}
      <nav className="bg-[#0E8A4A] text-white px-10 py-3 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.ibb.co/2sQ3fM4/logo.png"
            alt="logo"
            className="w-10 h-10 rounded-2xl"
          />
          <h1 className="text-2xl font-bold">আল হাদিস</h1>
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="hover:underline cursor-pointer">হোম</li>
          <li className="hover:underline cursor-pointer">হাদিস সমূহ</li>
          <li className="hover:underline cursor-pointer">হাদিস অনুসন্ধান</li>
          <li className="hover:underline cursor-pointer">আমাদের সম্পর্কে</li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-[#0E8A4A] font-semibold px-4 py-2 rounded hover:bg-gray-100">
            সংরক্ষণ করুন ❤️
          </button>
          <button className="bg-[#FF7043] text-white font-semibold px-4 py-2 rounded hover:bg-[#f56a3e]">
            ডাউনলোড করুন
          </button>
        </div>
      </nav>

      {/* Search Section */}
      <div className="bg-[#0E8A4A] py-10 flex flex-col items-center text-center">
        <input
          type="text"
          placeholder="আপনার হাদিস লিখুন..."
          className="w-[70%] max-w-2xl px-6 py-3 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-green-300"
        />
        <button className="mt-4 bg-[#00A36C] text-white px-6 py-2 rounded-full hover:bg-[#0C8C54]">
          Search
        </button>
      </div>

      {/* Banner Section */}
      <section className="bg-white mx-auto mt-10 max-w-5xl rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <img className="mx-10" src="/public/image/Screen [CHANGE ME].svg" alt="" />
          {/* Left Text */}
          <div className="p-8 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-[#0E8A4A]">
              আল হাদিস সাইটে আপনাকে স্বাগতম
            </h2>
            <p className="text-gray-700 mb-4">
              আল হাদিস এখন সহজ ভাষায় সহিহ হাদিস পড়ুন, ফেভারিট করুন, কমেন্ট
              দিন, এবং শেয়ার করুন। সবই এখন এক জায়গায়।
            </p>
            <p className="font-semibold text-gray-800 mb-4">
              ডাউনলোড করুন আল হাদিস মোবাইল অ্যাপ
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="/public/image/Group.svg"
                alt="App Store"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center p-4">
            <img
              src="/public/image/image 4.svg"
              alt="App Preview"
              className="w-[90%] rounded-lg"
            />
          </div>
          <div className="md: w-1/2 flex justify-center p-4">
          <img src="/public/image/image 3.svg" alt="" /></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
