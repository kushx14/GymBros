import { SignUp } from '@clerk/clerk-react'
import signimg from './darkgym.jpg';
import bgg from './loginimg.jpg';

export default function Signup(){
    return (
        <div 
        className="min-h-screen bg-gray-800 text-gray-900 flex justify-center"
        style={{ backgroundImage: `url(${bgg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        <div className="max-w-screen-xl m-0 sm:m-10 bg-black shadow sm:rounded-lg flex justify-center flex-1" 
        style={{backgroundColor:"#272727"}}>
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex flex-col items-center">
                <div className="w-full flex-1">
                <SignUp signInUrl="/signin" forceRedirectUrl = {"/dash"} />
                </div>
            </div>
            </div>
            <div className="flex-1 text-center hidden lg:flex">
            <div 
                className="m-0 w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${signimg})`, backgroundColor: '#272727' }} 
            >
            </div>
            </div>
        </div>
    </div>

    )
}

/*

<div className='d-flex w-100 mx-auto'>
            <SignUp signInUrl="/signin" forceRedirectUrl = {"/"} />
        </div>



*/