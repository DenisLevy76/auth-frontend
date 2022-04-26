import { ContainerWrapper } from './styles';

export const ContainerComponent = ({children, bgColor='#f1f1f1'}) => (
  <ContainerWrapper bgColor={bgColor}>{children}</ContainerWrapper>
)