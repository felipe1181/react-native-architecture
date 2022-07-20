import * as React from 'react';
import styled from 'styled-components/native';
import StyledView from '../styled-view';
import {getBottomSpace, getStatusBarHeight} from './hooks/useBottomSpace';

interface Props {
  variant: 'gray-elevated' | 'white-elevated' | 'invisible';
  backgroundColor: string;
  safeBottom: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const STATUS_BAR_HEIGHT = getStatusBarHeight(true);
const BOTTOM_SAFE_AREA = getBottomSpace();

const Container = styled(StyledView)`
  flex: 1;
  overflow: hidden;
`;

export const Wrapper: React.FC<Props> = ({
  children,
  variant,
  backgroundColor,
  safeBottom,
  ...rest
}) => (
  <Container
    pt={variant === 'invisible' ? 0 : STATUS_BAR_HEIGHT + 30}
    pb={safeBottom ? BOTTOM_SAFE_AREA : 0}
    bgColor={backgroundColor}
    {...rest}>
    {children}
  </Container>
);
