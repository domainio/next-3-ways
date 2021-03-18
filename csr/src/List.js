import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const List = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAsync = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data);
    }
    getAsync();
  }, []);

  const renderItem = (item) => {
    return (
      <div
        className="media"
        key={item.id}
        style={{
          marginBottom: '10px',
          alignItems: 'center'
        }}>
        <img
          src={`https://api.hello-avatar.com/adorables/${item.id}`}
          className="mr-3"
          width="30rem"
          height="30rem"
          alt=""
          style={{ borderRadius: '15rem' }}
        />
        <div className="media-body">
          <h5 className="mt-0">{item.name}</h5>
        </div>
        <button type="button" className="btn btn-outline-primary">
          <Link to={{
            pathname: "/details",
            user: { ...item, image: `https://api.hello-avatar.com/adorables/${item.id}` }
          }}>Details</Link>
        </button>

      </div>
    )
  }

  return (
    <div className="App">
      <h1>List of Users</h1>
      {users.map(user => renderItem(user))}
    </div>
  );
}

export default List;
