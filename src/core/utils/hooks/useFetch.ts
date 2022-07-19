import {api} from 'core/services/api/axios';
import {RequestProps} from 'core/services/api/axios/components/handlers';
import {useEffect, useState} from 'react';

interface UseFetchProps<ENTITY> {
  isLoading: boolean;
  data: ENTITY | null;
}

function useFetch<ENTITY>({
  id,
  url,
  params,
  data,
  msgError,
  msgSuccess,
  noFetch,
}: RequestProps & {noFetch: boolean}) {
  const [handlerFetch, setHandlerFetch] = useState<UseFetchProps<ENTITY>>({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    async function startApi() {
      if (!noFetch) {
        return;
      }
      setHandlerFetch(oldState => ({...oldState, isLoading: true}));
      const response = await api.get({
        id,
        url,
        params,
        data,
        msgError,
        msgSuccess,
      });
      console.log('CALL');
      setHandlerFetch(oldState => ({
        ...oldState,
        isLoading: false,
        data: response as unknown as ENTITY,
      }));
    }
    startApi();
  }, [params]);

  return handlerFetch;
}

export default useFetch;
