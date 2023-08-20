'use client';
import { useState, ChangeEvent } from 'react';

interface ValuesState {
  title: string;
  description: string;
}

export interface FormState {
  values: ValuesState;
  setValues: React.Dispatch<React.SetStateAction<ValuesState>>;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  resetValues: () => void;
}

const useForm = () => {

  const initialValues: ValuesState = {
        title: '',
        description: '',
    };

  const [values, setValues] = useState({
    title: '',
    description: '',
  });

  const resetValues = () => {
    setValues(initialValues);
};

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target;
    const { name, value } = target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    values,
    setValues,
    handleChange,
    resetValues,
  };
};

export default useForm;
