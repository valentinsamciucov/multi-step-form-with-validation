import React, { useCallback, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { FormProvider } from './context/FormContext';
import FormNavigation from './components/FormNavigation';

function App() {
  const [step, setStep] = useState(1)

  const next = useCallback(() => setStep((s)=> Math.min(s+1, 3)), [])
  const back = useCallback(() => setStep((s)=> Math.max(s-1, 1)), [])

  const CurrentStep = useMemo(()=> {
    switch (step){
      case 1: return <Step1/>
      case 2: return <Step2/>
      case 3: return <Step3/>
      default: return null
    }
  }, [step])

  return (
    <FormProvider>
      <div style={{padding: '2rem'}}>
        {CurrentStep}
        <FormNavigation step={step} next={next} back={back} />
      </div>
    </FormProvider>
  )
}

export default App;
