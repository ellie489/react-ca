import create from "zustand";

const useCartStore = create((set) => {
  const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const storedTotalQuantity =
    parseInt(localStorage.getItem("totalQuantity")) || 0;

  return {
    items: storedItems,
    totalQuantity: storedTotalQuantity,
    addItem: (item) => {
      set((state) => {
        const existingItemIndex = state.items.findIndex(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItemIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          return {
            items: updatedItems,
            totalQuantity: state.totalQuantity + 1,
          };
        } else {
          return {
            items: [...state.items, { ...item, quantity: 1 }],
            totalQuantity: state.totalQuantity + 1,
          };
        }
      });
    },
    removeItem: (itemId) => {
      set((state) => {
        const updatedItems = state.items.filter((item) => item.id !== itemId);
        const totalQuantity = updatedItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        return { items: updatedItems, totalQuantity };
      });
    },
    clearCart: () => {
      set({ items: [], totalQuantity: 0 });
    },
  };
});

useCartStore.subscribe((state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.items));
  localStorage.setItem("totalQuantity", state.totalQuantity.toString());
});

export default useCartStore;
