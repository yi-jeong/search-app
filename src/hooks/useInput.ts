import { useState, useCallback, ChangeEvent } from 'react';

interface formType {
    initialForm : string | number | null | undefined;
}

function useInputs(initialForm:formType) {
    const [form, setForm] = useState(initialForm);

    // change
    const onChange = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      setForm(form => ({ ...form, [name]: value }));
    }, []);

    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
  }
  
  export default useInputs;