import { createState, useState } from "@hookstate/core";

const state = createState({
  // initialize your global states here
  applicationName: "My Recharge NG",
  user: { userId: "", fullname: "", emailAddress: "", phoneNumber: "" },
  showAuthModal: false,
  authFormState: "login"
});

export default function useStateManager() {
  return useState(state);
}
