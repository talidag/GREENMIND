import { PropsWithChildren, createContext, useState } from "react";
// import useAxiosFetch from "../hooks/useAxiosFetch";

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
  const plants = [
    {
      id: "000001",
      name: "Natural Plants",
      price: 1400,
      img: "https://i.ibb.co/25Jm1Q0/Frame-9.png",
    },
    {
      id: "000002",
      name: "Artificial Plants",
      price: 900,
      img: "https://i.ibb.co/jMcDpQR/Frame-8.png",
    },
    {
      id: "000003",
      name: "Desert Plants",
      price: 3500,
      img: "https://i.ibb.co/KqLG8hG/Frame-7.png",
    },
  ];
  // const [plants, setPlants] = useState<PlantType[]>();
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [shoppingCart, setShoppingCart] = useState({});
  const [likedItems, setLikedItems] = useState<string[]>([]);

  // const { data } = useAxiosFetch("http://localhost:3000/plants");

  // useEffect(() => {
  //   setPlants(data);
  // }, [data]);

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
