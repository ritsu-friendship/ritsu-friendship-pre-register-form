"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params.get("name");
  const [email, setEmail] = useState(name ? `${name}@example.com` : "");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("メールアドレスとパスワードを入力してください");
      return;
    }
    router.push(`/thankyou?name=${email.split("@")[0]}`);
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200" />

      {/* 装飾用の丸いぼかし（アニメーション付き） */}
      <div className="absolute w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-30 top-10 left-20 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20 bottom-10 right-20 animate-pulse-slow"></div>

      {/* ログインフォーム */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-3xl w-full max-w-md space-y-5 border border-emerald-100"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-2">
          ログイン
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          登録済みのメールアドレスでログイン
        </p>

        <div className="space-y-3">
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-500 text-white w-full py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-200 shadow-md"
        >
          ログイン
        </button>
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
