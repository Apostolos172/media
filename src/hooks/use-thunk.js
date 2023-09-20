import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const update = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .then()
      .catch((err) => {
        setError(err);
      })
      .finally(setIsLoading(false));
  }, [dispatch, thunk]);

  return [isLoading, error, update];
};

export { useThunk };
