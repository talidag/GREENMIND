import LoginButton from "../molecules/LoginButton";
import LogoutButton from "../molecules/LogoutButton";
import ViewProfile from "../molecules/ViewProfile";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isLoading, error } = useAuth0();

  return (
    <main>
      <h1>Auth0 Login</h1>
      {error && <p>Authentification Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <ViewProfile />
          <LogoutButton />
        </>
      )}
    </main>
  );
};

export default Profile;
