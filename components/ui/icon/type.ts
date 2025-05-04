import {ReactNode} from 'react';

export interface IIconProp {
  color?: string;
  size?: number;
  stroke?: number;
}

export type IIcon = (props: IIconProp) => ReactNode;
