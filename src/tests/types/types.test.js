import { types } from "../../types/types";

describe("Test to the types", () => {
  test("should be has all the types necessary", () => {
    expect(types).toEqual({
      google: "[Search] Google",
      bing: "[Search] Bing",
      both: "[Search] Google & Bing",
      uiStartLoading: "[UI] Start Loading",
      uiFinishLoading: "[UI] Finish Loading",
    });
  });
});
