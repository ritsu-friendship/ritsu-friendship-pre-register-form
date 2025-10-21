"use client";
import { useSearchParams } from "next/navigation";

export default function ThankYouPage() {
  const params = useSearchParams();
  const name = params.get("name");

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200" />

      {/* 装飾用の丸いぼかし（アニメーション付き） */}
      <div className="absolute w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-30 top-10 left-20 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20 bottom-10 right-20 animate-pulse-slow"></div>

      {/* サンクスメッセージ */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {name || "ユーザー"}さん、ありがとうございます！<br />
          スワイプ回数が{" "}
          <span className="text-emerald-600 font-bold">20回</span>付与されました！
        </h1>
      </div>

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
