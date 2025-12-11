import React from "react";
import { BookOpen, Grid, Bookmark, Heart } from "lucide-react";
import './Footer.css'

const HadithFooter = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700 text-[15px]">

        {/* আল হাদিস Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Grid className="text-green-600 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-900">আল হাদিস</h2>
          </div>
          <h3 className="text-[17px] font-semibold mb-2">
            হাদিস পড়ুন, শিখুন এবং জানুন
          </h3>
          <p className="leading-relaxed text-gray-600">
            আমাদের লক্ষ্য ও উদ্দেশ্য হলো সর্বোচ্চ উৎস থেকে বিশুদ্ধ হাদিস
            সংগ্রহ করে উপস্থাপন করা। আমরা এই ওয়েবসাইটটি সকলের জন্য উন্মুক্ত
            করেছি যাতে যে কেউ সহজেই হাদিস শিখতে ও জানতে পারে।
          </p>
        </div>

        {/* নেভিগেট Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">আলহামদুলিল্লাহ (الحمد لله)</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-600">হাদিস গ্রন্থসমূহ</a></li>
            <li><a href="#" className="hover:text-green-600">বিষয়ভিত্তিক হাদিস</a></li>
            <li><a href="#" className="hover:text-green-600">প্রিয়তালিকা</a></li>
            <li><a href="#" className="hover:text-green-600">সাপোর্ট করুন</a></li>
          </ul>
        </div>

        {/* আমাদের প্রজেক্টসমূহ Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">আমাদের প্রজেক্টসমূহ</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <BookOpen className="text-green-600 w-4 h-4" />
              <span>আল হাদিস</span>
            </li>
            <li className="flex items-center gap-2">
              <Grid className="text-green-600 w-4 h-4" />
              <span>কুরআন মজিদ</span>
            </li>
            <li className="flex items-center gap-2">
              <Bookmark className="text-green-600 w-4 h-4" />
              <span>দোয়া ও রুকইয়াহ</span>
            </li>
            <li className="flex items-center gap-2">
              <Heart className="text-green-600 w-4 h-4" />
              <span>আইফাতুল ফাউন্ডেশন</span>
            </li>
          </ul>
        </div>

        {/* জনপ্রিয় সাইটসমূহ Section */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">জনপ্রিয় সাইটসমূহ</h3>
          <ul className="space-y-2">
            <li><a href="https://quran.com" target="_blank" rel="noreferrer" className="hover:text-green-600">https://assunnahfoundation.org/</a></li>
            <li><a href="https://sunnah.com" target="_blank" rel="noreferrer" className="hover:text-green-600">https://www.youtube.com/@PeaceTVprogram</a></li>
            <li><a href="https://islamhouse.com" target="_blank" rel="noreferrer" className="hover:text-green-600">https://www.youtube.com/watch?v=h9NfdADUInE</a></li>
            <li><a href="https://response-anti-islam.com" target="_blank" rel="noreferrer" className="hover:text-green-600">response-anti-islam</a></li>
          </ul>
        </div>
      </div>
      <div className="container">
            <marquee behavior="alternate" direction="right">Developer Hojrot Omor (Sefat)</marquee>
        </div>
    </footer>
  );
};

export default HadithFooter;
