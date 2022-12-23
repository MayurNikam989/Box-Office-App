import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import Cast from "../components/Shows/Cast";
import Details from "../components/Shows/Details";
import Seasons from "../components/Shows/Seasons";
import ShowMainData from "../components/Shows/ShowMainData";
import { api_get } from "../misc/config";

//all states' initial values
const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    //dispatch when fetchsuccese
    case "FETCH_SUCCESS":
      //changes the initial state to following object
      return { show: action.show, isLoading: false, error: null };

    case "FETCH_FAILED":
      //changes the initial state to following object
      return { ...prevState, isLoading: false, error: action.error };

    default:
      return prevState;
  }
};

const Show = () => {
  const { id } = useParams();
  //all states are managed by single reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //using useState
  //   const [show, setShow] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    api_get(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          setTimeout(() => {
            //dispatched when fetch succes
            dispatch({ type: "FETCH_SUCCESS", show: results });
            // setShow(results);
            // setIsLoading(false);
          }, 3000);
        }
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED", error: err.message });
        // setError(err.messege);
        // setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  //   consoles how show state is changed
  console.log(state.show);

  if (state.isLoading) return <div>Data is Loading</div>;
  if (state.error) return <div>Error Occured:{state.error}</div>;

  return (
    <div>
      <ShowMainData
        image={state.show.image}
        name={state.show.name}
        rating={state.show.rating}
        summary={state.show.summary}
        tags={state.show.genres}
      />
      <div>
        <h2>Details</h2>
        <Details
          status={state.show.status}
          network={state.show.network}
          premiered={state.show.premiered}
        />
      </div>
      <div>
        <h2>Seasons</h2>
        <Seasons seasons={state.show._embedded.seasons} />
      </div>
      <div>
        <h2>Cast</h2>
        <Cast cast={state.show._embedded.cast} />
      </div>
    </div>
  );
};

export default Show;
