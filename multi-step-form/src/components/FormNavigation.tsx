type Props = {
    step: number
    next: () => void
    back: () => void
}

export default function FormNavigation({step, next, back}: Props){
    return (
        <div>
            {step > 1 && <button onClick={back}>Back</button>}
            {step < 3 && <button onClick={next}>Next</button>}
            {step === 3 && <button onClick={() => alert('Form submitted!')}>Submit</button>}
        </div>
    )
}