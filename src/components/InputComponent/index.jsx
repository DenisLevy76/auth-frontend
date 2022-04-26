import { InputComponentContainer, InputComponentStyle, InputHelperText, InputLabel } from './styles';

export const InputComponent = ({id,labelText, variant='light', helperText, required, ...others}) => (
  <InputComponentContainer>
    <InputLabel htmlFor={id}>{labelText}{required ? '*' : ''}</InputLabel>
    <InputComponentStyle id={id} name={id} variant={variant} required={required} {...others}/>
    {helperText && <InputHelperText>{helperText}</InputHelperText>}
  </InputComponentContainer>
)
