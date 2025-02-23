import './App.css';
import './CountryDetail.css'
import { Outlet } from "react-router";
import Header from "./components/Header";
import {ThemeProvider } from './contexts/ThemeContext';

// In React Router, <Outlet /> is a component used for rendering nested routes inside a parent route. 

export default function App() {
  return (
      <ThemeProvider>
      <Header/>
      <Outlet/>
      </ThemeProvider>
  );
}
