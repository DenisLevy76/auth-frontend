import { Button } from './styles';

export const ButtonComponent = ({bgcolor='#2D218A', color='#E0E9FC' , textLabel, ...others}) => {
    return <Button bgcolor={bgcolor} color={color} {...others}>{textLabel}</Button>
};
