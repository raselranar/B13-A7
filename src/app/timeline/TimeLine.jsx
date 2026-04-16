"use client";
import { useFriendsData } from "@/context/FriendsProvider";
import Image from "next/image";
import HistoryList from "./HistoryList";
import { useState } from "react";

const Timeline = () => {
  const { timeLines } = useFriendsData();
  const [filterQuery, setFilterQuery] = useState("");

  const handleSelectChange = (e) => {
    setFilterQuery(e.target.value);
  };
  return (
    <section className="space-x-6 flex-1 flex flex-col">
      <h2 className="text-5xl/normal font-bold">Timeline</h2>
      {/* filter */}
      <select
        onChange={handleSelectChange}
        value={filterQuery}
        className="select text-lg text-gray-500">
        <option value="" disabled={true}>
          Filter timeline
        </option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
      {/*  history of all interactions */}
      <ul className="list rounded-box shadow-none mt-6 gap-4 flex-1">
        {<HistoryList timeLines={timeLines} filterQuery={filterQuery} />}
      </ul>
    </section>
  );
};
export default Timeline;
