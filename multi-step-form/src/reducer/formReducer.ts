export type FormData = {
    name: string
    email: string
    country: string
    city: string
}

export type FormAction = 
| {type: 'SET_NAME'; payload: string}
| {type: 'SET_EMAIL'; payload: string}
| {type: 'SET_COUNTRY'; payload: string}
| {type: 'SET_CITY'; payload: string}
| {type: 'RESET'}

export const initialFormState: FormData = {
    name: '',
    email: '',
    country: '',
    city: '',
}

export function formReducer(state: FormData, action: FormAction): FormData {
    switch (action.type) {
        case 'SET_NAME': return {...state, name: action.payload}
        case 'SET_EMAIL': return {...state, email: action.payload}
        case 'SET_COUNTRY': return {...state, country: action.payload}
        case 'SET_CITY': return {...state, city: action.payload}
        case 'RESET': return initialFormState
        default: return state
    }
}