import { useState } from 'react'

const useForm = () => {
  const [inputsContent, setInputsContent] = useState({
    name: {
      value: '',
      isValid: true
    },
    email: {
      value: '',
      isValid: true
    },
    'phoneNumber': {
      value: '',
      isValid: true
    },
    type: {
      value: '',
      isValid: true
    },
    'knowFrom': {
      value: '',
      isValid: true
    },
    suggestion: {
      value: '',
      isValid: true
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    updateInputsContent({name, property: 'value'}, value)
    updateInputsContent({name, property: 'isValid'}, !!inputsContent[name].value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isFormValid = checkForm()
    if (!isFormValid) return

    const { name, email, phoneNumber, type, knowFrom, suggestion } = inputsContent
    alert(`
      暱稱: ${name.value}
      電子郵件: ${email.value}
      手機號碼: ${phoneNumber.value}
      報名類型: ${type.value}
      怎麼知道這個活動的: ${knowFrom.value === 'imagination' ? '躺在床上用想像力實作' : '趴在地上滑手機找現成的'}
      ${suggestion.value ? `建議: ${suggestion.value}` : ''}
    `)
  }

  const checkForm = () => {
    let isFormValid = true
    for(const name in inputsContent) {
      if(name === 'suggestion') continue
      updateInputsContent({name, property: 'isValid'}, !!inputsContent[name].value)
      if (!inputsContent[name].isValid) isFormValid = false
    }
    return isFormValid
  }

  const handleBlur = (e) => {
    const { name } = e.target
    if (name === 'suggestion') return
    updateInputsContent({name, property: 'isValid'}, !!inputsContent[name].value)
  }

  const updateInputsContent = ({ name, property }, value) => {
    const newInputsContent = {...inputsContent}
    newInputsContent[name][property] = value
    setInputsContent(newInputsContent)
  }

  return {
    inputsContent,
    handleChange,
    handleSubmit,
    handleBlur
  }
}

export default useForm
