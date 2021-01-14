import { searchData } from "../data/searchData";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startSearchBing,
  startSearchBoth,
  startSearchGoogle,
} from "../actions/search";
import { SearchCard } from "./SearchCard";
import Swal from "sweetalert2";
import { types } from "../types/types";

export const SearchScreen = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state);
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    searchText: "",
    searchOption: "1",
  });

  const { searchText, searchOption } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText) {
      getResults(+searchOption);
    }
  };

  const getResults = (searchOption) => {
    switch (searchOption) {
      case 1:
        dispatch(startSearchGoogle(searchText));
        break;
      case 2:
        dispatch(startSearchBing(searchText));
        break;
      case 3:
        dispatch(startSearchBoth(searchText));
        break;
      default:
        Swal.fire("Error", types.uiErrorMessage, "error");
        break;
    }
  };
  return (
    <div className="m-3">
      <h1>Search </h1>
      <hr />
      <div>
        <form onSubmit={handleSearch} className="row g-3">
          <div className="input-group">
            <div className="col-md-6">
              <input
                autoComplete="off"
                name="searchText"
                className="form-control"
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-3">
              <select
                name="searchOption"
                className="form-control"
                placeholder="Find your hero"
                type="text"
                onChange={handleInputChange}
                value={searchOption}
              >
                {searchData.map((data) => (
                  <option
                    className="dropdown-item"
                    key={data.id}
                    value={data.id}
                  >
                    {data.searchEngine}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-block btn-primary"
                disabled={loading}
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-12 mt-3">
        <h4>Results</h4>
        <hr />
        <div className="card-columns">
          {searchText !== "" &&
            Object.entries(search).length !== 0 &&
            search.map((item) => <SearchCard key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};
