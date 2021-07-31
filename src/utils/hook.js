import { useEffect, useState } from "react";

const Hook = {
  useAsync: (callback, watches) => {
    const [state, setState] = useState({
      loading: false,
      data: null,
      error: false,
    });

    useEffect(() => {
      const fetch = async () => {
        setState({ ...state, loading: true });

        try {
          const data = await callback();
          setState({ loading: false, data, error: false });
        } catch (e) {
          setState({ ...state, loading: false, error: true });
        }
      };
      fetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, watches);

    return state;
  },
};

export default Hook;
