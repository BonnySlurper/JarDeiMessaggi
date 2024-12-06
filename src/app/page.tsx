"use client";

import { useEffect, useState } from "react";
import messages from "../../messages.json";
import { startOfDay, differenceInDays } from "date-fns";

export default function Page() {
  const [message, setMessage] = useState("");
  const [dayNumber, setDayNumber] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const today = startOfDay(new Date());
    const dayIndex = differenceInDays(today, new Date("2024-12-06"));
    setDayNumber(dayIndex + 1); // Giorno corrente
    setMessage(messages[dayIndex % messages.length]); // Ciclo dei messaggi
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-400 via-violet-500 to-pink-400 px-2">
      <h1 className="text-4xl font-extrabold text-white text-center mt-24 mb-20">
        Reminder giornaliero del perchè stiamo insieme da 4 anni
      </h1>
      <p className="text-3xl font-bold text-white mb-4">Giorno {dayNumber}</p>

      {/* Card con animazione flip */}
      <div
        className="relative w-80 h-40 transform-gpu transition-transform duration-500 preserve-3d cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Lato frontale */}
        <div className="absolute inset-0 bg-white shadow-lg rounded-lg flex items-center justify-center backface-hidden">
          <p className="text-gray-500 text-xl font-medium">Clicca per scoprire! ❤️</p>
        </div>

        {/* Lato posteriore */}
        <div
          className="absolute inset-0 bg-white shadow-lg rounded-lg flex items-center justify-center backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-xl font-extrabold text-gray-800 text-center p-4">{message}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 right-4">
        <p className="text-lg italic text-white">fatto con amore da Albertino</p>
      </footer>
    </main>
  );
}
