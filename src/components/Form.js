import styled from "styled-components"
import { Span, Paragraph } from './utils'

const InputGroup = styled.div`
  margin: 50px 0;
`

const FormLabel = styled.label`
  display: block;
  font-size: 20px;
`

const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #d0d0d0;
  font-size: 16px;
  padding: 2px;
`

const Button = styled.button`
  background-color: #fad312;
  padding: 13px 31px;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  margin-bottom: 20px
`

const Form = () => {
  const inputs = [
    {
      name: 'name',
      id: 'name',
      label: '暱稱',
      type: 'text',
      placeholder: '您的回答'
    },
    {
      name: 'email',
      id: 'email',
      label: '電子郵件',
      type: 'email',
      placeholder: '您的電子郵件'
    },
    {
      name: 'phone-number',
      id: 'phone-number',
      label: '手機號碼',
      type: 'text',
      placeholder: '您的手機號碼'
    },
    {
      id: 'type',
      label: '報名類型',
      type: 'radio',
      options: [
        {
          name: 'type',
          id: 'imagination',
          label: '躺在床上用想像力實作',
          value: 'imagination'
        },
        {
          name: 'type',
          id: 'copycat',
          label: '趴在地上滑手機找現成的',
          value: 'copycat'
        }
      ]
    },
    {
      name: 'know-from',
      id: 'know-from',
      label: '怎麼知道這個活動的？',
      type: 'text',
      placeholder: '您的回答'
    },
    {
      name: 'suggestion',
      id: 'suggestion',
      label: '其他',
      type: 'text',
      placeholder: '您的回答',
      description: '對活動的一些建議'
    },
  ]

  return (
    <form>
      {/* 這邊 input.map 裡面這一大串不知道怎麼改善比較好 */}
      {inputs.map((input) => {
        if (input.id === 'type') {
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

        const { id, label, type, name, placeholder, description } = input
        return (
          <InputGroup key={id}>
            <FormLabel htmlFor={id}>
              {label}
              {input.id === 'suggestion' ? <Paragraph>{description}</Paragraph> : <Span> *</Span>}
            </FormLabel>
            <Input type={type} id={id} name={name} placeholder={placeholder} />
          </InputGroup>
        )
      })}
      <Button type="submit">提交</Button>
      <Paragraph>請勿透過表單送出您的密碼。</Paragraph>
    </form>
  )
}

export default Form
