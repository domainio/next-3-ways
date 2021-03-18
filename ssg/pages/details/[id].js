import React from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

const Details = ({ user }) => {
  return (
    <div>
      <h1>User Details</h1>
      <div className="card text-center">
        <div className="card-header">
          <h3>{user.name}</h3>
        </div>
        <div className="card-body">
          <img src={user.image} with="100rem" height="100rem" alt="" />
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text">{user.address.zipcode}</p>
          <p className="card-text">{user.address.city}</p>
          <p className="card-text">{user.address.street}</p>
        </div>
        <div className="card-footer text-muted">
          {user.phone}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  // Fetch data from external API
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  const user = data.find(user => user.id.toString() === id);
  user['image'] = `https://api.hello-avatar.com/adorables/${id}`;
  // Pass data to the page via props
  return { props: { user } }
}

export const getStaticPaths = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  const paths = data.map(user => ({ params: { id: user.id.toString() } }))
  return {
    paths,
    fallback: false
  };
}


export default withRouter(Details);