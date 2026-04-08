import React from 'react';

const RECOMMENDED_TOURS = [
  {
    title: '從第比利斯出發：姆茨赫塔、十字修道院、哥里及烏普利斯齊赫王朝一日遊',
    url: 'https://www.trip.com/t/pJoQPuLZDU2'
  },
  {
    title: '第比利斯：姆茨赫塔十字市集、喬治亞紀事紀念碑及葡萄酒之旅',
    url: 'https://www.trip.com/t/hIOsasWZDU2'
  },
  {
    title: '從第比利斯出發的魔法卡赫季之旅 – 西格納吉、博德貝與編年史之旅',
    url: 'https://www.trip.com/t/ZQ0oOYYZDU2'
  },
  {
    title: '第比利斯：古多里及卡茲貝吉一日遊（含四驅車）',
    url: 'https://www.trip.com/t/4UzsRFbZDU2'
  },
  {
    title: '第比利斯：卡赫季地區，西格納吉之旅連9次品酒體驗',
    url: 'https://www.trip.com/t/ssPwvDdZDU2'
  },
  {
    title: '西格納吉（愛之城）+女修道院+紅酒體驗+第比利斯海（包車）',
    url: 'https://www.trip.com/t/7p32n1fZDU2'
  },
  {
    title: '慢遊第比利斯海：將日子浸在湖藍與晴空裡的一天【格魯吉亞】',
    url: 'https://www.trip.com/t/8QotX3hZDU2'
  },
  {
    title: '第比利斯高架電車道+格魯吉亞之母雕像+里克公園+第比利斯海',
    url: 'https://www.trip.com/t/sLLlgCjZDU2'
  }
];

export default function RecommendedTours() {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          熱門精選：高加索深度旅行體驗
        </h3>
      </div>
      <div className="p-6">
        <ul className="grid md:grid-cols-2 gap-4">
          {RECOMMENDED_TOURS.map((tour, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <a 
                href={tour.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors hover:underline text-sm md:text-base leading-snug"
              >
                {tour.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}