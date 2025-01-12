import { create } from 'zustand';

const useStore = create((set) => ({
    count: 0,
    selectedSeats: [],
    addSeat: (seat) =>
      set((state) => ({
        count: state.count + 1,
        selectedSeats: [...state.selectedSeats, seat], 
      })),
}));

export default useStore;