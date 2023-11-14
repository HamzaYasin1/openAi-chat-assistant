import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';


const Admin = () => {
    const [selectedIP, setSelectedIP] = useState(null);
  
    const handleIPSelect = (ip) => {
      setSelectedIP(ip);
    };
  
    return (
      <div className="admin-container">
        <Sidebar onIPSelect={handleIPSelect} />
        {selectedIP && <ChatList selectedIP={selectedIP} />}
      </div>
    );
  };
export default Admin;