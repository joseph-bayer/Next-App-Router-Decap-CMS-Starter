"use client";

import { useEffect, useState } from "react";

interface CopyrightProps {}

export function Copyright({}: CopyrightProps) {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const newCurrentYear = new Date().getFullYear().toString();
    setCurrentYear(newCurrentYear);
  }, []);

  return (
    <div className="flex w-full flex-row justify-end bg-vegeta px-4 py-2 text-offWhite">
      &copy; Copyright {currentYear}, Example Corporation
    </div>
  );
}
