import { useState } from 'react'

const useInput = () => {
  const [inputsContent, setInputsContent] = useState({
    name: '',
    email: '',
    'phone-number': '',
    'know-from': '',
    suggestion: ''
  })

  const handleChange = (e) => {
    setInputsContent({
      [e.target.id]: e.target.value,
      ...inputsContent
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputsContent)
  }

  return {
    inputsContent,
    handleChange,
    handleSubmit
  }
}

export default useInput
