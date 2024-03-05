import { PropsWithChildren, createContext, useState } from "react";

interface ShoppingCartType {
  name: string;
  price: number;
}

interface DataContextType {
  popupVisible: boolean;
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCart: ShoppingCartType[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartType[]>>;
  handleImgClick: (e: { currentTarget: { id: any } }) => void;
}

const DataContext = createContext<DataContextType>({
  popupVisible: false,
  setPopupVisible: () => {},
  shoppingCart: [],
  setShoppingCart: () => {},
  handleImgClick: () => {},
});

export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartType[]>([]);

  const handleImgClick = (e: { currentTarget: { id: any } }) => {
    setPopupVisible(true);
    const itemToAdd = { name: e.currentTarget.id, price: 200 };
    // TO DO change the price here. make a database of plants
    setShoppingCart((prev) => [...prev, itemToAdd]);

    setTimeout(() => {
      setPopupVisible(false);
    }, 2000);
  };

  return (
    <DataContext.Provider
      value={{
        popupVisible,
        setPopupVisible,
        shoppingCart,
        setShoppingCart,
        handleImgClick,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
