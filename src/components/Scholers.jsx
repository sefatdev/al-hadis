import React from "react";

const scholars = [
     {
        id: 1,
    name: "ডঃ জাকির নায়েক",
    img: "/public/image/jakirnayak.svg",
  },
  {
    id: 2,
    name: "মিজানুর রহমান আজহারী",
    img: "/public/image/mizanur.svg",
  },
   {
    id: 6,
    name: "ড. আবু বকরিয়া",
    img: "/public/image/abu.svg",
  },
   {
    name: "শায়খ আহমাদুল্লাহ",
    img: "/public/image/ahmadullah.svg",
  },
  {
    id: 4,
    name: "মুফতি রাফি ইব্রাহিম",
    img: "/public/image/harun.svg",
  },
  {
    id: 5,
    name: "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর",
    img: "/public/image/jahanggir.svg",
  },
  {
    id: 3,
    name: "শায়খ সাইফুল্লাহ",
    img: "/public/image/saifullah.svg",
  },
];

export default function ScholarsSection() {
  return (
    <div className="bg-green-50 py-10 px-4 rounded-2xl mt-10">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/786/786432.png"
            alt="decor"
            className="w-8 h-8"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/786/786432.png"
            alt="decor"
            className="w-8 h-8"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          বিভিন্ন আলেমদের দ্বারা প্রণীত
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {scholars.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-24 h-24 rounded-full bg-white shadow-md overflow-hidden mb-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}