import React from 'react';
import './App.css';
// import { useEffect, useState } from 'react';
// import {fetchNewAlbums, fetchSongs, fetchTopAlbums} from "./api/Api";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Navbar from "./components/Navbar/Navbar";
// import { Outlet } from "react-router-dom";

function App() {
  // const [data, setdata] = useState({});
  // const generateData = (key, source) => {
  //   source().then((data) => {
  //     setdata((prevState) => {
  //       return { ...prevState, [key]: data };
  //     });
  //   });
  // };

  // useEffect(() => {
  //   generateData("topAlbums", fetchTopAlbums);
  //   generateData("newAlbums", fetchNewAlbums);
  //   generateData("songs", fetchSongs);
  // }, []);

  // const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar  />  
        {/* searchData={[...topAlbums, ...newAlbums]} */}
        {/* <Outlet context={{ data: { topAlbums, newAlbums, songs } }} /> */}
      </StyledEngineProvider>
    </>
  );
}
export default App;
