import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  searchBing,
  searchBoth,
  searchGoogle,
  startSearchBing,
  startSearchBoth,
  startSearchGoogle,
} from "../../actions/search";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = mockStore({});
describe("test to the search actions", () => {
  beforeEach(() => {
    store = mockStore({});
  });
  const data = {
    id: 1,
    title: "test",
    snippet: "test snippet",
    url: "www.test.com",
    displayUrl: "www.test.com",
  };
  test("searchGoogle, searchBing & searchBoth should be create the correct action", () => {
    const googleAction = searchGoogle(data);
    const bingAction = searchBing(data);
    const bothAction = searchBoth(data);
    expect(googleAction).toEqual({
      type: types.google,
      payload: {
        data,
      },
    });

    expect(bingAction).toEqual({
      type: types.bing,
      payload: {
        data,
      },
    });

    expect(bothAction).toEqual({
      type: types.both,
      payload: {
        data,
      },
    });
  });
  test("should be start the Search with Google", async () => {
    await store.dispatch(startSearchGoogle());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiStartLoading,
    });
    expect(actions[2]).toEqual({
      type: types.uiFinishLoading,
    });
    expect(actions[1].type).toEqual(types.google);
  });
  test("should be start the Search with Bing", async () => {
    await store.dispatch(startSearchBing());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiStartLoading,
    });
    expect(actions[2]).toEqual({
      type: types.uiFinishLoading,
    });
    expect(actions[1].type).toEqual(types.bing);
  });
  test("should be start the Search with Both", async () => {
    await store.dispatch(startSearchBoth());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiStartLoading,
    });
    expect(actions[2]).toEqual({
      type: types.uiFinishLoading,
    });
    expect(actions[1].type).toEqual(types.both);
  });
});
