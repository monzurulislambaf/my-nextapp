"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-strapi-project-client.onrender.com/api/contents');
        const result = await response.json();
        console.log(result);
        setData(result.data || []); // Ensure data is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 font-sans bg-white md:p-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-sm text-center text-gray-600">WHY CHOOSE US</h2>
        <h1 className="mb-6 text-4xl font-bold text-center md:text-5xl">
          {data.length > 0 ? data[0]?.title : 'Loading...'}
        </h1>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
          {data.length > 0 ? data[0]?.description : 'Loading...'}
        </p>

        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-red-500 rounded-full"></div>
            <div className="absolute inset-0 overflow-hidden bg-gray-200 rounded-full left-1/4">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Industry expert using laptop"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 overflow-hidden bg-red-500 rounded-full">
              <div className="absolute inset-y-0 left-0 flex items-center justify-center w-1/2 p-6 text-white bg-red-500">
                <div>
                  <h3 className="mb-2 text-xl font-bold">Industry experts</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md space-y-4">
            {[
              'Industry experts',
              'Dedicated Team',
              'Outcome focused',
              'High Quality Service',
              'Cyber Security Expert'
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-full ${index === 0 ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                <span className="mr-4">&lt;</span>
                <span className="flex-grow">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
