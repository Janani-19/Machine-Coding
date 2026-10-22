import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Cards from "/Cards.js";

import "./styles.css";
const DEFAULT_PAGE_SIZE = 10;
function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  //const[pageSize,setPageSize] = useState(10);//drop down state

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const dataJson = await response.json();
      setFetchedData(dataJson.products);
    } catch (e) {
      console.log("Error", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const totalProduct = fetchedData.length;
  const noOfPage = Math.ceil(totalProduct / DEFAULT_PAGE_SIZE);
  const startIndex = currentPage * DEFAULT_PAGE_SIZE;
  const lastIndex = startIndex + DEFAULT_PAGE_SIZE;
  // drop down pagination
  // const noOfPage = Math.ceil(totalProduct/pageSize);
  // const startIndex = currentPage*pageSize;
  // const lastIndex = startIndex + pageSize;
  console.log("startIndex", startIndex);
  console.log("lastIndex", lastIndex);

  return (
    <div className="App">
      <h1>Pagination</h1>
      <div className="cards">
        {!fetchedData.length ? (
          <p>No Data Found</p>
        ) : (
          fetchedData
            .slice(startIndex, lastIndex)
            .map((item) => (
              <Cards
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
              />
            ))
        )}
      </div>

      {/* 
          Drop down Pagination
          <div>
              <select value={pageSize} onChange={(e)=>setPageSize(e.target.value)}>
                  <option value=""></option>
                  <option value="10">10</option>
                   <option value="20">20</option>
                   <option value="30">30</option>
              </select>
          
          </div> */}
    </div>
  );
}
