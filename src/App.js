import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from './components/postSlice';
// import Main from './components/MainComponent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import {BrowserRouter} from 'react-router-dom'

function App() {
  const { posts, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return <h2>loading...</h2>
    
  }
  return (
    <div className="App">
      {posts.map((item) => (
        <h2>{item.totalSamplesTested}</h2>
      ))}
      {/* <Main /> */}
      
    </div>
  );
};

export default App;
