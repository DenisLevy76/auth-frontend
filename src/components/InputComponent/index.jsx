import { InputComponentContainer, InputComponentStyle, InputHelperText, InputLabel } from './styles';

export const InputComponent = ({id,labelText, variant='light', helperText, ...others}) => (
  <InputComponentContainer>
    <InputLabel htmlFor={id}>{labelText}</InputLabel>
    <InputComponentStyle id={id} variant={variant} {...others}/>
    {helperText && <InputHelperText>{helperText}</InputHelperText>}
  </InputComponentContainer>
)
