import { useForm } from '../context/FormContext'
import { useMemo } from 'react'

export default function Step3() {
  const { state } = useForm()
  const summary = useMemo(() => JSON.stringify(state, null, 2), [state])

  return (
    <div>
      <h2>Step 3: Confirm Info</h2>
      <pre>{summary}</pre>
    </div>
  )
}
