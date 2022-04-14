import { createState, useState } from "@hookstate/core";

const state = createState({
  // initialize your global states here
  applicationName: "My Recharge NG",
  user: { fullname: "", emailAddress: "", phoneNumber: "" },
});

export default function useStateManager() {
  return useState(state);
}
