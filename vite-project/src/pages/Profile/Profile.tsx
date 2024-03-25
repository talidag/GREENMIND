import LoginButton from "../../components/molecules/LoginButton";
import LogoutButton from "../../components/molecules/LogoutButton";
import ViewProfile from "../../components/molecules/ViewProfile";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.scss";
import plantHero from "../../assets/left-missing (1).jpg";
import plantRight from "../../assets/right-missing (1).jpg";

const Profile = () => {
  const { isLoading, error } = useAuth0();

  return (
    <main className="profile">
      <img
        src={plantHero}
        alt="A hand with a plant"
        className="profile__plantleft"
      />
      <img
        src={plantRight}
        alt="A hand with a plant"
        className="profile__plantright"
      />
      {error && <p>Authentification Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <ViewProfile />
          <LoginButton />
          <LogoutButton />
        </>
      )}
    </main>
  );
};

export default Profile;
