import PropTypes from 'prop-types'
import { InputGroup, FormLabel, Span, Input } from "../utils"

export default function InputRadio ({ input }) {
  const { id, label, options } = input
    return (
      <InputGroup key={id}>
        <FormLabel>
          {label}
          <Span> *</Span>
        </FormLabel>
        {options.map((option) => {
          const { id, name, value, label } = option
          return (
            <div key={id}>
              <Input type={input.type} name={name} id={id} value={value} />
              <label htmlFor={id}>{label}</label>
            </div>
          )
        })}
      </InputGroup>
    )
}

InputRadio.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    options:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
  })
}
