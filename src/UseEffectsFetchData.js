import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectsFetchData = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    console.log('usereffect');
    setUser(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      hello
      {user.map((u) => {
        const { id, login, avatar_url, html_url } = u;
        return (
          <div>
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>link</a>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectsFetchData;
