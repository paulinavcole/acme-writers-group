import React from 'react';


const Users = ({ users, userId })=> {
  return (
    <ul>
      <li className={ !userId ? 'selected': ''}>
        <a href='#'>Users</a>
      </li>
      {
        users.map( user => {
          return (
            <li className={ user.id === userId*1 ? 'selected': ''} key={ user.id }>
              <a href={`#${user.id}`}>
                { user.name }
              </a>
              <button>X</button>
            </li>
          );
        })
      }
      <button>Add User</button>
    </ul>
  );
}

export default Users;


