import axios from 'core/services/api/axios/axios';
import {NotifyProps} from 'core/services/api/notification';
import {
  handlePromise,
  handlerParams,
  handlerError,
  ResponseErrorProps,
} from './';

export interface RequestProps {
  id: string;
  url: string;
  data?: object;
  msgSuccess?: string;
  msgError?: string;
  params?: object;
}

export async function requestHandler(
  method: 'get' | 'post' | 'put' | 'delete',
  {url, id, params, data, msgSuccess, msgError}: RequestProps,
  {notify}: NotifyProps,
) {
  try {
    const resp = (await handlePromise(
      axios.request({method, url: handlerParams(url, params), data}),
      id,
    )) as {
      data: object;
    };
    if (msgSuccess) {
      notify.success({message: msgSuccess});
    }
    return resp.data;
  } catch (err) {
    handlerError({
      response: (err as ResponseErrorProps).response,
      notify,
      msgError,
    });
    return false;
  }
}
