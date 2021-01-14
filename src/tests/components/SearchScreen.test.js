import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { SearchScreen } from "../../components/SearchScreen";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  ui: {
    loading: false,
  },
};
let store = mockStore(initState);
const wrapper = mount(
  <Provider store={store}>
    <SearchScreen />
  </Provider>
);
describe("test for <SearchScreen />", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("should be show the default values", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
