import React from 'react';
import { withRouter } from 'next/router';

const Details = ({ router }) => {

  const { user: _user } = router?.query;
  const user = (_user && JSON.parse(_user));

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

export default withRouter(Details);