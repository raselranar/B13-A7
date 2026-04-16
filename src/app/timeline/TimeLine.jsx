"use client";
import { useFriendsData } from "@/context/FriendsProvider";
import Image from "next/image";
import HistoryList from "./HistoryList";
import { useState } from "react";

const Timeline = () => {
  const { timeLines } = useFriendsData();
  const [filterQuery, setFilterQuery] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  let data = [...timeLines];

  // search data
  if (search)
    data = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.type.toLowerCase().includes(search.toLocaleLowerCase()),
    );

  // sort data
  if (sort === "new") data.sort((a, b) => a.date - b.date);
  if (sort === "old") data.sort((a, b) => b.date - a.date);

  return (
    <section className="space-x-6 flex-1 flex flex-col">
      <h2 className="text-5xl/normal font-bold">Timeline</h2>
      {/* filter */}
      <div className="flex gap-2 flex-wrap">
        <select
          onChange={(e) => setFilterQuery(e.target.value)}
          value={filterQuery}
          className="select text-lg text-gray-500">
          <option value="" disabled={true}>
            Filter timeline
          </option>
          <option value="">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
        {/* sort */}
        <select
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          className="select text-lg text-gray-500">
          <option value="" disabled={true}>
            Sort by
          </option>
          <option value="">Default</option>
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
        {/* search */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="text-lg"
            placeholder="Search"
          />
        </label>
      </div>
      {/*  history of all interactions */}
      <ul className="list rounded-box shadow-none mt-6 gap-4 flex-1">
        {<HistoryList data={data} filterQuery={filterQuery} />}
      </ul>
    </section>
  );
};
export default Timeline;
