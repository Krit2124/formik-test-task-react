import { CustomForm } from '@/widgets/CustomForm';

const MainPage = () => {  
  return (
    <main className='flex flex-col gap-3 justify-center items-center !my-[5vh]'>
      <h1>Для продолжения, пожалуйста, заполните форму</h1>
      <CustomForm />
    </main>
  );
};

export default MainPage;