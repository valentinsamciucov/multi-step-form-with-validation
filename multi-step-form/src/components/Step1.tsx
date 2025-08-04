import { useForm } from "../context/FormContext";

export default function Step1() {
    const { state, dispatch } = useForm()

    return (
        <div>
            <h2>Step 1: Personal Info</h2>
            <input
                placeholder="Name"
                value={state.name}
                onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
            />
            <input
                placeholder="Email"
                value={state.email}
                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
            />
        </div>
    )
}