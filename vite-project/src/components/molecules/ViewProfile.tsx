import { useAuth0 } from "@auth0/auth0-react";

const ViewProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        {JSON.stringify(user)}
      </article>
    )
  );
};

export default ViewProfile;
