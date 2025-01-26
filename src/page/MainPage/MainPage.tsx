import { CustomForm } from '@/widgets/CustomForm';

const MainPage = () => {  
  return (
    <main className='flex flex-col gap-3 justify-center items-center h-screen'>
      <h1>Для продолжения заполните, пожалуйста, форму</h1>
      <CustomForm />
    </main>
  );
};

export default MainPage;