import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import { Layout } from 'antd';
import Dashboard from './Pages/Dashboard/dashboard';
import Login from "./Pages/Login/login";


const { Header } = Layout;



function App() {

  const navigateToHomePage = () => {
    window.location.href = '/';
  }

  return (
    <>
      <Layout >
        <Header className='header'>
          <h1 style={{padding:0, margin:0}} onClick={navigateToHomePage}>Expense Tracker</h1>
        </Header>
      </Layout>
      <Layout className='content'>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
