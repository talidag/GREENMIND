import { PropsWithChildren, createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

interface PlantType {
  id: string;
  name: string;
  price: number;
  img: string;
}

interface DataContextType {
  plants: PlantType[];
  popupVisible: boolean;
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCart: {};
  setShoppingCart: React.Dispatch<React.SetStateAction<{}>>;
  likedItems: string[];
  setLikedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const DataContext = createContext<DataContextType>({
  plants: [],
  popupVisible: false,
  setPopupVisible: () => {},
  shoppingCart: [],
  setShoppingCart: () => {},
  likedItems: [],
  setLikedItems: () => {},
});

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [plants, setPlants] = useState<PlantType[]>([]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [shoppingCart, setShoppingCart] = useState({});
  const [likedItems, setLikedItems] = useState<string[]>([]);

  const { data } = useAxiosFetch("http://localhost:3000/plants");

  useEffect(() => {
    setPlants(data);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        plants,
        popupVisible,
        setPopupVisible,
        shoppingCart,
        setShoppingCart,
        likedItems,
        setLikedItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
