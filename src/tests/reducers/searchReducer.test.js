import { searchReducer } from "../../reducers/searchReducer";
import { types } from "../../types/types";

describe("test in searchReducer", () => {
  const testData = {
    id: 1,
    title: "test",
    snippet: "test snippet",
    url: "www.test.com",
    displayUrl: "www.test.com",
  };
  test("should return data for google", () => {
    const initState = {};
    const action = {
      type: types.google,
      payload: {
        data: [{ ...testData, engine: "by Google" }],
      },
    };

    const state = searchReducer(initState, action);
    expect(state).toEqual([
      {
        ...testData,
        engine: "by Google",
      },
    ]);
  });

  test("should return data for bing", () => {
    const initState = {};
    const action = {
      type: types.bing,
      payload: {
        data: [{ ...testData, engine: "by Bing" }],
      },
    };

    const state = searchReducer(initState, action);
    expect(state).toEqual([
      {
        ...testData,
        engine: "by Bing",
      },
    ]);
  });
});
