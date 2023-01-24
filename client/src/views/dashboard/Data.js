/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTable() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('https://your-api-url.com/data')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSearch = () => {
    const filtered = data.filter(item => {
      const date = new Date(item.date);
      return date >= startDate && date <= endDate;
    });
    setFilteredData(filtered);
  }

  return (
    <div>
      <input type="date" onChange={e => setStartDate(e.target.value)} />
      <input type="date" onChange={e => setEndDate(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

