import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));//calls after then and catch
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, error];
  //have to use useCallback since the items are changing in some way
};
