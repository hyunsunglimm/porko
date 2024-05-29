'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupInputsValues, defaultValues, signupSchema } from '../../schema/signupSchema';
import { Form } from '@/components/ui/form';

const SignUpFormProvider = ({ children }: { children: React.ReactNode }) => {
  const form = useForm<SignupInputsValues>({
    resolver: zodResolver(signupSchema),
    defaultValues,
    mode: 'all'
  });

  const { handleSubmit } = form;

  const onSubmit = (formValues: SignupInputsValues) => {
    console.log(formValues);
    // alert(JSON.stringify(formValues));

    // 회원가입 성공 후 입력정보 파기
    sessionStorage.removeItem('signup-storage');
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className='px-20'>
        {children}
      </form>
    </Form>
  );
};
export default SignUpFormProvider;
