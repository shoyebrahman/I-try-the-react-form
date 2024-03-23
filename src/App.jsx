
import './App.css'
import ReusableForm from './Component/ReusableForm/ReusableForm'
//import Hookform from './Component/Hookform/Hookform'
//import Refform from './Component/Refform/Refform'
//import SimpleFrom from './Component/SimpleFrom/SimpleFrom'
//import StatefulFrom from './Component/StatefulFrom/StatefulFrom'

function App() {

  const handleSignUpSubmit = data =>{
   console.log('sign up data', data);
  }

  const handleUpdateProfile = data =>{
   console.log('update profile', data);
  }


  return (
    <>
     {/* <SimpleFrom></SimpleFrom> */}
     {/* <StatefulFrom></StatefulFrom> */}
     {/* <Refform></Refform> */}
     {/* <Hookform></Hookform> */}
     <ReusableForm formTitle={'sign up'} handleSubmit={handleSignUpSubmit}></ReusableForm>
     <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'></ReusableForm>
    </>
  )
}

export default App
