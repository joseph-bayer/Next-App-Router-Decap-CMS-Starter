"use client";

export default function BypassBlock() {
  return (
    <button
      tabIndex={0}
      className="absolute left-0 top-0 z-[-1] w-full border-2 border-dotted border-black bg-offWhite p-2 text-center text-blue-700 underline focus:z-[100]"
      onClick={() => {
        document.getElementById("main-content")?.focus();
      }}
    >
      Skip to main content
    </button>
  );
}
