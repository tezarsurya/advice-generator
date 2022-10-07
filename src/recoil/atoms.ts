import { atom } from "recoil";

export const adviceState = atom({
  key: "adviceState",
  default: {
    id: 0,
    advice: "",
  },
  effects: [
    ({ onSet, setSelf }) => {
      onSet((newValue) => {
        localStorage.setItem("currentAdvice", JSON.stringify(newValue));
      });
    },
  ],
});
