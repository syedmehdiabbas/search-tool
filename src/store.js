import create from "zustand";
import websitesData from "./data/websites";
import { persist } from "zustand/middleware";
import produce from "immer";

const useStore = create(
  persist(
    (set) => ({
      websites: websitesData,

      addWebsite: (name, link) =>
        set(
          produce((state) => {
            state.websites[name.toLowerCase()] = {
              name: name,
              address: link,
              selected: false,
            };
          })
        ),

      deleteWebsite: (name) =>
        set(
          produce((state) => {
            delete state.websites[name];
          })
        ),

      changeSelection: (name) =>
        set(
          produce((state) => {
            state.websites[name].selected = !state.websites[name].selected;
          })
        ),
    }),
    {
      name: "websites",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
