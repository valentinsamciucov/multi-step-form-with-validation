import { useForm } from '../context/FormContext'

export default function Step2() {
  const { state, dispatch } = useForm()

  return (
    <div>
      <h2>Step 2: Address Info</h2>
      <input
        placeholder="Country"
        value={state.country}
        onChange={(e) => dispatch({ type: 'SET_COUNTRY', payload: e.target.value })}
      />
      <input
        placeholder="City"
        value={state.city}
        onChange={(e) => dispatch({ type: 'SET_CITY', payload: e.target.value })}
      />
    </div>
  )
}
