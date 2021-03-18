import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const List = (props) => {

  const [users, setUsers] = useState(props.users);

  // useEffect(() => {
  //   const getAsync = async () => {
  //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  //     setUsers(data);
  //   }
  //   getAsync();
  // }, []);

  const renderItem = (_item) => {
    const item = {
      ..._item,
      image: `https://api.hello-avatar.com/adorables/${_item.id}`,
    }
    return (
      <div
        className="media"
        key={item.id}
        style={{
          marginBottom: '10px',
          alignItems: 'center'
        }}>
        <img
          src={item.image}
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
          <Link href={`/details/${item.id}`}>
            <a>Details</a>
          </Link>
        </button>

      </div >
    )
  }

  return (
    <div className="App">
      <h1>List of Users</h1>
      {users.map(user => renderItem(user))}
    </div>
  );
}

// List.getInitialProps = async () => {
//   console.log('getInitialProps')
//   // if (typeof window === 'undefined') {
//     // console.log('server side');
//   // }
//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
//   return { users: data };
// }

export const getServerSideProps = async (ctx) => {
  // Fetch data from external API
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  // Pass data to the page via props
  return { props: { users: data } }
}

export default List;
