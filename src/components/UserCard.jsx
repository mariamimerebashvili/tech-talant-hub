import AnimateOnScroll from './AnimateOnScroll';

function UserCard({ user, delay = 0 }) {
  return (
    <AnimateOnScroll as="article" className="user-card" delay={delay}>
      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name}
        className="user-card__avatar"
      />
      <h3 className="user-card__name">{user.name}</h3>
      <p className="user-card__username">@{user.username}</p>
      <p className="user-card__location">📍 {user.address.city}</p>
      <p className="user-card__email">{user.email}</p>
      <a href={`mailto:${user.email}`} className="user-card__contact">
        Contact via Email
      </a>
    </AnimateOnScroll>
  );
}

export default UserCard;
