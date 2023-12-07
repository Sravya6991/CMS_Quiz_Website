import './main.css';
import Header from './Components/Header/Header';
import Categorize from './Components/FormBuilder/Categorize/Categorize';
import Comprehension from './Components/FormBuilder/Comprehension/Comprehension';
import Cloze from './Components/FormBuilder/Cloze/Cloze';

function App() {
  const handleForm = (data) => {
    console.log('data from main: ', data)
  }

  return (
    <>
      <Header />
      <div className='my-3'>
        <h1 className='text-center text-sky-900 font-bold text-3xl my-3'>Form Builder for your tests</h1>
        <Categorize />
        <Cloze handleForm={handleForm}/>
        <Comprehension />
      </div>
      
    </>
  );
}

export default App;
