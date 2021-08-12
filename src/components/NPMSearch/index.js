import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";


export const NPMSearch = () => {
  const dispatch = useDispatch();
  const { searchActionCreator } = bindActionCreators(actionCreators, dispatch);
  const { data, error, loading } = useSelector((state) => state.search);

  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    searchActionCreator(term);
  };
  return (
    <>
      <h1>NPM search</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          placeholder="type npm package"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!loading && !error && data.map((item) => <p>{item}</p>)}
    </>
  );
};