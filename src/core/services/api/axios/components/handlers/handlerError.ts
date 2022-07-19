import {NotifyProps} from 'core/services/api/notification';

interface Data {
  errors: {message: string[]};
}

export interface ResponseErrorProps {
  response: {
    status: number;
    data: Data;
  };
}

interface ResponseProps {
  status: number;
  data: Data;
}

interface HandlerErrorProps extends NotifyProps {
  response: ResponseProps;
  msgError?: string;
}

const statusError = {
  401: ({notify}: HandlerErrorProps) => {
    notify.error({message: 'Session expired'});
  },
  403: ({notify}: HandlerErrorProps) => {
    notify.error({message: 'Permission denied'});
  },
  400: ({notify, msgError, response}: HandlerErrorProps) => {
    if (msgError) {
      notify.error({message: msgError});
      return;
    }
    const errors = response?.data?.errors;
    if (Array.isArray(errors)) {
      errors.forEach(({message}) => {
        notify.error(message);
      });
      return;
    }
  },
};

export function handlerError({response, notify, msgError}: HandlerErrorProps) {
  try {
    const getError = statusError[response.status as keyof typeof statusError];
    if (getError) {
      getError({response, notify, msgError});
      return;
    }

    notify.error({
      message: 'We are experiencing instability, please try again',
    });
  } catch (error) {
    notify.error({
      message: 'We are experiencing instability, please try again',
    });
  }
}
