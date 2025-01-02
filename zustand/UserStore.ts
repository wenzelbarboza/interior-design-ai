import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";

export type User = {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  credits: number;
};

type userState = {
  loading: boolean;
  user: User | null;
};

type userAction = {
  setLoading: (isLoading: boolean) => void;
  setUser: (userState: User | null) => void;
};

// TODO implement loading in homepage
//initially loading should be false
export const useUserStore = create<userState & userAction>()(
  devtools((set) => ({
    setLoading: (newState) => set(() => ({ loading: newState })),
    setUser: (user) =>
      set(
        produce((state: userState & userAction) => {
          state.user = user;
        })
      ),
  }))
);
