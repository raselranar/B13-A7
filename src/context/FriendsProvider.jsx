"use client";
import { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext(null);
const FriendsProvider = ({ children }) => {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./friends.json");
        const data = await res.json();
        setFriendsData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ friendsData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useFriendsData = () => {
  return useContext(DataContext);
};

export default FriendsProvider;
