"use client";

import React, { useEffect, useState } from "react";

const ZirconPage = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [foundSerialNumber, setFoundSerialNumber] = useState("");

  const [serialNumbers, setSerialNumbers] = useState<string[]>([]);
  const [foundSerialNumbers, setFoundSerialNumbers] = useState<string[]>([]);

  useEffect(() => {
    const timeID = setTimeout(() => {
      if (foundSerialNumber === "") return;

      setFoundSerialNumbers((prev) => {
        const newFoundSerialNumbers = [...prev];
        newFoundSerialNumbers.push(foundSerialNumber);
        setFoundSerialNumber("");
        return newFoundSerialNumbers;
      });
    }, 1000);

    return () => {
      clearTimeout(timeID);
    };
  }, [foundSerialNumber]);

  return (
    <div className="flex items-center m-auto justify-center min-h-screen">
      <div className="container mx-auto my-3 bg-white p-5 pb-0 min-h-[813px] grid grid-cols-2 grid-rows-1 gap-4">
        <div className="border-2 border-zircon mb-4">
          <div className="text-white text-center mb-4 p-4 bg-gray-800 text-xl font-semibold">
            Serial Number
          </div>
          <div className="px-3">
            <input
              type="text"
              placeholder="Serial Number..."
              className="border-2 border-gray-300 rounded-md p-3 w-1/2 mb-4"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-6 py-3 ml-4 hover:bg-blue-600 rounded-md"
              onClick={() => {
                setSerialNumbers([...serialNumbers, serialNumber]);
                setSerialNumber("");
              }}
            >
              Add S/N
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4 px-3">
            {serialNumbers.map((sn, index) => {
              if (sn === "") return null;
              if (
                foundSerialNumbers.length > 0 &&
                foundSerialNumbers.includes(sn)
              ) {
                return (
                  <div
                    key={index}
                    className="border-2 border-gray-300 mb-3 p-3 text-white text-xl font-semibold rounded-md bg-zircon flex items-center justify-between"
                  >
                    {sn}{" "}
                    <button
                      className="ml-2"
                      onClick={() => {
                        setSerialNumbers((prev) => {
                          const newSerialNumbers = [...prev];
                          newSerialNumbers.splice(index, 1);
                          return newSerialNumbers;
                        });
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className="border-2 border-gray-300 mb-3 p-3 text-black text-xl font-semibold rounded-md flex items-center justify-between"
                >
                  {sn}{" "}
                  <button
                    className="ml-2"
                    onClick={() => {
                      setSerialNumbers((prev) => {
                        const newSerialNumbers = [...prev];
                        newSerialNumbers.splice(index, 1);
                        return newSerialNumbers;
                      });
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-zircon mb-4">
          <div className="font-zircon text-center mb-4 p-4 bg-gray-200 text-xl font-semibold">
            Found S/N
          </div>
          <div className="px-3">
            <input
              type="text"
              placeholder="Serial Number..."
              className="border-2 border-gray-300 rounded-md p-3 w-full mb-4"
              value={foundSerialNumber}
              onChange={(e) => setFoundSerialNumber(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 px-3">
            {foundSerialNumbers.map((sn, index) => {
              if (sn === "") return null;
              if (serialNumbers.length > 0 && serialNumbers.includes(sn)) {
                return (
                  <div
                    key={index}
                    className="border-2 border-gray-300 mb-3 p-3 text-white text-xl font-semibold rounded-md bg-zircon flex items-center justify-between"
                  >
                    {sn}{" "}
                    <button
                      className="ml-2"
                      onClick={() => {
                        setFoundSerialNumbers((prev) => {
                          const newFoundSerialNumbers = [...prev];
                          newFoundSerialNumbers.splice(index, 1);
                          return newFoundSerialNumbers;
                        });
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="border-2 border-gray-300 mb-3 p-3 text-black text-xl font-semibold rounded-md flex items-center justify-between"
                  >
                    {sn}{" "}
                    <button
                      className="ml-2"
                      onClick={() => {
                        setFoundSerialNumbers((prev) => {
                          const newFoundSerialNumbers = [...prev];
                          newFoundSerialNumbers.splice(index, 1);
                          return newFoundSerialNumbers;
                        });
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZirconPage;
