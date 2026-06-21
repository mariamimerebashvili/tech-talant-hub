import { useEffect, useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';
import UserCard from '../components/UserCard';

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
    );
  });

  return (
    <main className="users-page">
      <div className="users-page__inner container">
        <AnimateOnScroll>
          <header className="users-page__header">
            <h1 className="users-page__title">Our Tech Experts</h1>
            <p className="users-page__subtitle">
              Browse verified professionals ready to join your team.
            </p>
          </header>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="search-bar">
            <input
              type="search"
              className="search-bar__input"
              placeholder="Search by name or username..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search experts by name or username"
            />
          </div>
        </AnimateOnScroll>

        {loading && (
          <div className="users-page__status users-page__loading">
            <span className="spinner" aria-hidden="true" />
            <p>Loading experts...</p>
          </div>
        )}
        {error && (
          <p className="users-page__status users-page__status--error">{error}</p>
        )}

        {!loading && !error && (
          <>
            {filteredUsers.length === 0 ? (
              <p className="users-page__status animate-in animate-in--fade">
                No experts found matching your search.
              </p>
            ) : (
              <div className="users-grid">
                {filteredUsers.map((user, index) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    delay={(index % 6) * 80}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Users;
