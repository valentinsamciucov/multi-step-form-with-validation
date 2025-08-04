import { createContext, useContext, useReducer } from "react"
import { FormAction, FormData, formReducer, initialFormState } from "../reducer/formReducer"

type FormContextType = {
    state: FormData
    dispatch: React.Dispatch<FormAction>
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState)
  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>
}

export const useForm = () => {
    const context = useContext(FormContext)
    if (!context) throw new Error("useForm must be used within FormProvider")
    return context
}