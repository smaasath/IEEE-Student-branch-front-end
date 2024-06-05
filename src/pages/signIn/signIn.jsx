import { Link } from "react-router-dom";
import CommonButton from "../../components/common/commonButton/commonButton";
import AuthLayout from "../../components/layouts/authLayout/authLayout";




export default function SignIN() {
  // const router = useRouter()
  // function login() {
  //   router.push('/dashboard/insights')
  // }
  return (
    <AuthLayout type={'SIGNIN'}>
      <div className='d-flex w-100 justify-content-between align-items-start'>
        <div className='d-flex flex-column '>
          <div>
            <span className='h6'>Welcome to </span><span className='h6 text-cl-primary fw-bold'>IEEE</span>
          </div>
          <div className='mt-4'>
            <h1>Sign in</h1>
          </div>
        </div>
        <div className='d-flex flex-column '>
          <div>
            <span className='p text-secondary'>No Account ?</span>
          </div>
          <div className=''>
            <Link href={`/sign-up`} className="nav-link"><p className='text-cl-primary'>Sign Up</p></Link>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Enter your email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter email" />
        </div>
      </div>

      <div className='mt-3'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Enter your Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
        </div>
      </div>

      <div className='mt-3 w-100 d-flex justify-content-end'>
        <Link href={`/forgot-password/email`} className="nav-link"><h6 className='text-cl-primary'>Forgot Password?</h6></Link>
      </div>
      <div className='mt-5 w-100 mb-3'>
        <CommonButton text={"Sign In"} onClick={() => login()} />
      </div>
    </AuthLayout>

  );
}
