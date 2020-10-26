import { ReactNode, FunctionComponent } from 'react';
import { ContainerContent } from '../styles/container';

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <ContainerContent>{children}</ContainerContent>
}

export default Container
