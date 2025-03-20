"use client";
import React, { useEffect, useState } from "react";

const API_KEY = "3ea0587a3a08e712a20ca6e27d903f10";
const PAGE_SIZE = 50; // Fetch 50 monsters per page
const FIRST_MONSTER = 1001;
const TOTAL_MONSTERS = 500; // Set an estimated total count (change if needed)
const TOTAL_PAGES = Math.ceil(TOTAL_MONSTERS / PAGE_SIZE);

const Monster = () => {
  const [monsters, setMonsters] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMonsters = async (startIndex: number) => {
    setLoading(true);
    const urls = Array.from(
      { length: PAGE_SIZE },
      (_, i) =>
        `https://www.divine-pride.net/api/database/Monster/${
          startIndex + i
        }?apiKey=${API_KEY}`
    );

    try {
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const jsonData = await Promise.all(responses.map((res) => res.json()));

      // Filter out invalid responses (null names)
      const validData = jsonData.filter((monster) => monster.name !== null);

      setMonsters(validData);
    } catch (error) {
      console.error("Error fetching monsters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const startIndex = FIRST_MONSTER + (page - 1) * PAGE_SIZE;
    fetchMonsters(startIndex);
  }, [page]);

  // Function to generate page numbers with "..."
  const getPageNumbers = () => {
    const pages = [];
    for (let i = page; i < page + 4 && i <= TOTAL_PAGES; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      <h1>Monster List (Page {page})</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {monsters.map((monster) => (
            <li key={monster.id}>{monster.name}</li>
          ))}
        </ul>
      )}

      {/* Pagination UI */}
      <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
        <button onClick={() => setPage(1)} disabled={page === 1}>First</button>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>{"<"}</button>

        {getPageNumbers().map((num, index) => (
          <button 
            key={index} 
            onClick={() => setPage(num)} 
            style={{ fontWeight: num === page ? "bold" : "normal" }}
          >
            {num}
          </button>
        ))}

        <button onClick={() => setPage(prev => Math.min(prev + 1, TOTAL_PAGES))} disabled={page === TOTAL_PAGES}>{">"}</button>
        <button onClick={() => setPage(TOTAL_PAGES)} disabled={page === TOTAL_PAGES}>Last</button>
      </div>
    </div>
  );
};

export default Monster;
