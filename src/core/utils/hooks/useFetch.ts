import {api} from 'core/services/api/axios';
import {RequestProps} from 'core/services/api/axios/components/handlers';
import {useEffect, useState} from 'react';

interface UseFetchProps<ENTITY> {
  isLoading: boolean;
  data: ENTITY | null;
}

function useFetch<ENTITY>(props: RequestProps) {
  const [handlerFetch, setHandlerFetch] = useState<UseFetchProps<ENTITY>>({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    async function startApi() {
      if (!props.url) {
        return;
      }
      setHandlerFetch(oldState => ({...oldState, isLoading: true}));
      const response = await api.get(props);
      setHandlerFetch(oldState => ({
        ...oldState,
        isLoading: false,
        data: response as unknown as ENTITY,
      }));
    }
    startApi();
  }, [props]);

  return handlerFetch;
}

export default useFetch;
