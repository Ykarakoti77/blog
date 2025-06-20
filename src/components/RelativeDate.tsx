// app/components/RelativeDate.tsx
"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

interface RelativeDateProps {
  date: string;
}

export default function RelativeDate({ date }: RelativeDateProps) {
  const [secondsAgo, setSecondsAgo] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const then = new Date(date);
      const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000);
      setSecondsAgo(diffInSeconds);
    };

    update();
    const interval = setInterval(update, 1000); // update every second

    return () => clearInterval(interval);
  }, [date]);

  return <span>({secondsAgo} seconds ago)</span>;
  const [relative, setRelative] = useState("");

  useEffect(() => {
    const update = () => {
      const rel = formatDistanceToNow(new Date(date), { addSuffix: true });
      setRelative(rel);
    };

    update();
    const interval = setInterval(update, 60 * 1000); // update every minute

    return () => clearInterval(interval);
  }, [date]);

  return <span>({relative})</span>;
}
