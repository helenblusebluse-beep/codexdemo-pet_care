"use client";

import { useMemo } from "react";

function getTomorrowMorningValue() {
  const arrival = new Date();
  arrival.setDate(arrival.getDate() + 1);
  arrival.setHours(9, 30, 0, 0);

  const year = arrival.getFullYear();
  const month = String(arrival.getMonth() + 1).padStart(2, "0");
  const day = String(arrival.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T09:30`;
}

export default function ArrivalTimeInput() {
  const defaultArrivalTime = useMemo(() => getTomorrowMorningValue(), []);

  return <input type="datetime-local" name="arrivalTime" defaultValue={defaultArrivalTime} />;
}
