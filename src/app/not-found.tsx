import Link from "next/link";
import { Rocket } from "lucide-react";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-slate-100 min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full text-center space-y-5">
          <div className="text-5xl font-black font-mono text-cyan-400">404</div>
          <h1 className="text-2xl font-bold text-white">
            Lost in Digital Orbit · غير موجود
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The orbital vector you followed drifted beyond known coordinates.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Rocket className="w-4 h-4" />
              <span>Return to Base · العودة للرئيسية</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
