"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    age: "",
    grade: "",
    faculty: "",
    gender: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }
    setModalOpen(true);
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200" />

      {/* 装飾用の丸いぼかし（アニメーション付き） */}
      <div className="absolute w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-30 top-10 left-20 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20 bottom-10 right-20 animate-pulse-slow"></div>

      {/* 登録フォーム */}
      <form
        onSubmit={handleRegister}
        className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-3xl w-full max-w-md space-y-6 border border-emerald-100"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-2">
          リツフレ事前登録
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          登録してあなたにぴったりの出会いを見つけよう
        </p>

        <div className="space-y-3">
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="password"
            name="password"
            placeholder="パスワード"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="number"
            name="age"
            placeholder="年齢"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="text"
            name="grade"
            placeholder="回生"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="text"
            name="faculty"
            placeholder="学部"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <select
            name="gender"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="">性別を選択</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-emerald-500 text-white w-full py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-200 shadow-md"
        >
          認証メールを送信
        </button>

        {modalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/40">
            <div className="bg-white rounded-2xl p-8 w-80 text-center space-y-4 shadow-lg border border-green-100">
              <p className="text-emerald-700 font-medium">
                認証メールを送信しました！
              </p>
              <button
                onClick={() =>
                  router.push(`/login?name=${form.email.split("@")[0]}`)
                }
                className="bg-emerald-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-200"
              >
                ログイン画面へ
              </button>
            </div>
          </div>
        )}
      </form>

      {/* カスタムアニメーション用CSS */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
