import PropTypes from 'prop-types'
import { InputGroup, FormLabel, Paragraph, Span, Input, ErrorMessage } from '../utils'

export default function InputText ({ input, content, onChange, onBlur }) {
  const { id, label, type, name, placeholder, description } = input
  const { value, isValid } = content
  return (
    <InputGroup>
      <FormLabel htmlFor={id}>
        {label}
        {id === 'suggestion' ? <Paragraph>{description}</Paragraph> : <Span> *</Span>}
      </FormLabel>
      <Input value={value} onChange={onChange} onBlur={onBlur} type={type} id={id} name={name} placeholder={placeholder} />
      {!isValid && <ErrorMessage>這裡沒填到辣</ErrorMessage>}
    </InputGroup>
  )
}

InputText.propTypes = {
  input: PropTypes.objectOf(PropTypes.string),
  content: PropTypes.shape({
    value: PropTypes.string,
    isValid: PropTypes.bool
  }),
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}
