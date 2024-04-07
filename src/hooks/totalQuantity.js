import useCartStore from "../zustand/store";

const useTotalQuantity = () => {
  const items = useCartStore((state) => state.items); // Get cart items from Zustand store

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return totalQuantity;
};

export default useTotalQuantity;
