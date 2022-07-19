import Toast from 'react-native-toast-message';

export interface NotifyToastProps {
  title?: string;
  message?: string;
}
export interface NotifyProps {
  notify: {
    success: (props: NotifyToastProps) => void;
    error: (props: Omit<NotifyToastProps, 'title'>) => void;
    info: (props: NotifyToastProps) => void;
  };
}

const notify = () => ({
  success({title, message}: NotifyToastProps) {
    if (message) {
      return Toast.show({
        type: 'success',
        text1: title,
        text2: message,
      });
    }
  },
  info({title, message}: NotifyToastProps) {
    if (message) {
      return Toast.show({
        type: 'info',
        text1: title,
        text2: message,
      });
    }
  },
  error({message}: Omit<NotifyToastProps, 'title'>) {
    if (message) {
      return Toast.show({
        type: 'error',
        text1: 'Nao conseguimos realizar a solicitação',
        text2: message,
      });
    }
  },
});

export default notify();
