"use client";
import { useState } from "react";
import { questions } from "./data";
import Link from "next/link";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1>Hasil Kuis</h1>
        <p>
          Skor Anda: {score} / {questions.length}
        </p>
        {score === questions.length ? (
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold mt-4">
              Selamat Anda Mendapatkan Hadiah Rp.1.000.000
            </span>
            <span className="text-2xl font-semibold mt-4">
              Rp.1.000.000
            </span>
            <span>Kirim "Saya Menang" Ke Nomor Berikut: 083186369422</span>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-4">
            <span>Maaf Jawaban Belum Tepat</span>
            <Link href="/" className="px-2 rounded text-black bg-white mt-4">
              Ulangi Lagi
            </Link>
          </div>
        )}
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h2>
        Pertanyaan {current + 1} dari {questions.length}
      </h2>
      <h3>{questions[current].question}</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {questions[current].options.map((opt, idx) => (
          <li key={idx} style={{ margin: "10px 0" }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="answer"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
              />{" "}
              {opt}
            </label>
          </li>
        ))}
      </ul>

      <button
        onClick={handleNext}
        disabled={selected === null}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: selected === null ? "#969494ff" : "white",
          color: "black",
          border: "none",
          borderRadius: 8,
          cursor: selected === null ? "not-allowed" : "pointer",
        }}
      >
        {current + 1 === questions.length ? "Selesai" : "Lanjut"}
      </button>
    </main>
  );
}
