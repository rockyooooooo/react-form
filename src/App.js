import styled from 'styled-components'

const Main = styled.main`
  background: white;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  width: 645px;
  margin: 10vh auto;
  padding: 50px 40px 35px;
  border-top: 8px solid #fad312;
`

const Title = styled.h1`
  font-size: 36px;
`

const Info = styled.div`
  margin: 20px 0;
`

const Paragraph = styled.p`
  line-height: 1.5em;
  font-size: 14px;
`

const Span = styled.span`
  color: #e74149;
`

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
      {inputs.map((input) => {
        if (input.id === 'type') {
          const { id, label } = input
          return (
            <InputGroup key={id}>
              <FormLabel>
                {label}
                <Span> *</Span>
              </FormLabel>
              {input.options.map((option) => {
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

        if (input.id === 'suggestion') {
          const { id, label, type, name, placeholder, description } = input
          return (
            <InputGroup key={id}>
            <FormLabel htmlFor={id}>
              {label}
              <Paragraph>{description}</Paragraph>
            </FormLabel>
            <Input type={type} id={id} name={name} placeholder={placeholder} />
          </InputGroup>
          )
        }

        const { id, label, type, name, placeholder } = input
        return (
          <InputGroup key={id}>
            <FormLabel htmlFor={id}>
              {label}
              <Span> *</Span>
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

const Footer = styled.footer`
  background: #000;
  color: #999;
  font-size: 13px;
  text-align: center;

  & p {
    line-height: 60px;
  }
`

const App = () => {
  return (
    <div>
      <Main>
        <Title>
          新拖延運動報名表單
        </Title>
        <Info>
          <Paragraph>活動日期：2020/12/10 ~ 2020/12/11</Paragraph>
          <Paragraph>活動地點：台北市大安區新生南路二段1號</Paragraph>
        </Info>
        <Span>*必填</Span>
        <Form />
      </Main>
      <Footer>
        <Paragraph>
          © 2020 © Copyright. All rights Reserved.
        </Paragraph>
      </Footer>
    </div>
  )
}

export default App
