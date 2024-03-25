import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import FavouritesCard from "./FavouritesCard";

interface BestSellingCardProps {
  id: string;
  name: string;
  price: number;
  img: string;
}

const ViewProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  const { plants, likedItems } = useContext(DataContext);

  const likedPlants = likedItems.map((item) =>
    plants.find((plant) => plant.id === item)
  );

  return isAuthenticated ? (
    <article className="profile__user">
      <h1>Hi there, {user?.name}</h1>
      {user?.picture && (
        <img
          src={user.picture}
          alt={user?.name}
          className="profile__user__picture"
        />
      )}
      <div className="profile__user__welcome">
        <p>Welcome to your profile page!</p>
        <p>
          Here, you can view all your personal information and your favorite
          items.
        </p>
      </div>
      <div className="favourites">
        {likedItems.length === 0 ? (
          <p>Your favorites list is currently empty.</p>
        ) : (
          likedPlants.map((item) => <FavouritesCard key={item?.id} {...item} />)
        )}
      </div>
    </article>
  ) : (
    <div className="profile__stranger">
      <h1>
        Welcome to <span>GREENMIND</span>!
      </h1>
      <p>To access your favorites, please sign in to your account.</p>
      <p>
        However, you can still add items to your cart and proceed with payment
        as a guest.
      </p>
    </div>
  );
};

export default ViewProfile;
