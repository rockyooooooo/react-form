import PropTypes from 'prop-types'
import { InputGroup, FormLabel, Paragraph, Span, Input } from '../utils'

export default function InputText ({ input, content, onChange }) {
  const { id, label, type, name, placeholder, description } = input
  return (
    <InputGroup>
      <FormLabel htmlFor={id}>
        {label}
        {id === 'suggestion' ? <Paragraph>{description}</Paragraph> : <Span> *</Span>}
      </FormLabel>
      <Input value={content} onChange={onChange} type={type} id={id} name={name} placeholder={placeholder} />
    </InputGroup>
  )
}

InputText.propTypes = {
  input: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func
}
