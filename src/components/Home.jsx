import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const employees = useSelector((state) => state.employee.employees);
  return (
    <div>Home</div>
  )
}

export default Home