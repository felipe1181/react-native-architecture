import * as React from 'react';
import * as SC from './ScreenContainer.styles';
import {StatusBar, StatusBarProps} from 'react-native';
import {useTheme} from 'styled-components';
import {PropsStyledView} from '../styled-view';

interface Props extends PropsStyledView {
  variant?: 'gray-elevated' | 'white-elevated' | 'invisible';
  trigger?: number;
  safeBottom?: boolean;
  statusBarComponent?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

export const ScreenWithContext: React.FC<Props> = ({
  children,
  variant = 'gray-elevated',
  safeBottom = true,
  statusBarComponent,
  ...rest
}) => {
  const {colors} = useTheme();

  const statusBarProps: StatusBarProps = {
    backgroundColor: 'transparent',
    barStyle: 'light-content',
    translucent: true,
  };

  return (
    <SC.Wrapper
      variant={variant}
      backgroundColor={colors.gradient.primary}
      safeBottom={safeBottom}
      {...rest}>
      {React.isValidElement(statusBarComponent) ? (
        React.cloneElement(statusBarComponent, statusBarProps)
      ) : typeof statusBarComponent === 'function' ? (
        React.createElement(
          statusBarComponent as React.FunctionComponent<StatusBarProps>,
          statusBarProps,
        )
      ) : (
        <StatusBar {...statusBarProps} />
      )}
      {children}
    </SC.Wrapper>
  );
};

const ScreenContainer: React.FC<Props> = ({
  children,
  variant = 'gray-elevated',
  safeBottom = true,
  statusBarComponent,
}) => (
  <ScreenWithContext
    variant={variant}
    safeBottom={safeBottom}
    statusBarComponent={statusBarComponent}>
    {children}
  </ScreenWithContext>
);
export default ScreenContainer;
