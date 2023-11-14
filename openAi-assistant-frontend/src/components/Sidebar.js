import React, { useState, useEffect } from 'react';
import { BASE_URL } from "../config";

const Sidebar = ({ onIPSelect }) => {
  const [ipList, setIPList] = useState([]);

  useEffect(() => {
    // Fetch the list of IPs from your API or database
    const fetchIPList = async () => {
      try {
        const response = await fetch(`${BASE_URL}/chats`);
        if (response.ok) {
          const data = await response.json();
          const uniqueIPs = [...new Set(data.conversations.map((conv) => conv.userIP))];
          setIPList(uniqueIPs);
        }
      } catch (error) {
        console.error('Error fetching IP list:', error.message);
      }
    };

    fetchIPList();
  }, []);
  console.log(ipList);

  return (
<div className="sidebar">
  <h2>IP List</h2>
  <ul>
    {ipList && Array.isArray(ipList) && ipList.length > 0 ? (
      ipList.map((ip) => (
        <li key={ip} onClick={() => onIPSelect(ip)}>
          {ip}
        </li>
      ))
    ) : (
      <li>No IPs available</li>
    )}
  </ul>
</div>
  );
};

export default Sidebar;
