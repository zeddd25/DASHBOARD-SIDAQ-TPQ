import { ButtonCustom, InputCustom } from '../../components/ui'
import { CiLock, CiMail } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div className='bg-[#008C74] h-[50vh] lg:h-[100vh] lg:-mt-[380px] lg:-skew-y-[30deg] w-full'></div>
        <section className='absolute top-0 flex flex-col lg:flex-row lg:gap-x-20 items-center justify-evenly bottom-0 mt-5 gap-y-5  left-0 right-0'>
          <div className='w-1/4 lg:mb-20'>
            {/* <img src='' alt="Your Logo" /> */}
          </div>
          <div className='max-w-[98%] md:w-[70%] lg:w-[40%]'>
            <form className='p-5 bg-white rounded-xl text-center shadow-[0px_0px_9px_rgba(0,0,0,0.3)]'>
              <h1 className='text-2xl md:text-[40px] font-[700] mb-5 mt-2 text-[#008C74]'>Sign In</h1>
              <InputCustom type='email' placeholder={'Email'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<CiMail className='text-xl md:text-[28px] text-[#999]'/>}/>
              <InputCustom type='password' placeholder={'Kata Sandi'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<CiLock className='text-xl md:text-[28px] text-[#999]'/>}/>
              <div className='flex justify-between items-center mt-14'>
              <span className='flex items-center gap-x-2 text-[12px] md:text-[17px] font-[600] text-[#008C74] ml-1'>
              <InputCustom type={'checkbox'} className={'rounded-full'} id={'remember'}/>
              <label htmlFor="remember">Remember Me</label></span>
              <span className='text-[13px] md:text-[21px] text-[#008C74] mr-1'>
                <Link to={'reset-password'}>Forgot Password?</Link>
              </span></div>
              <Link to={'main'}><ButtonCustom value={'Sign In'} className={'bg-[#008C74] rounded-[20px] text-[15px] md:text-[20px] lg:text-[23px] text-white font-[700] my-5 py-2 px-3 md:py-3'}/></Link>
              <div className='h-[1.7px] w-full flex justify-center relative bg-[#008C74] before:absolute before:content-["OR"] before:bg-white before:text-[12px] before:w-10 before:-top-[10px] before:font-[600]'></div>
            <Link to={'/register'}><ButtonCustom value={'Sign Up'} className={'border-[#008C74] border-2 text-[15px] md:text-[20px] lg:text-[23px] bg-white rounded-[20px] text-[#008C74] font-[700] my-5 py-2 px-3 md:py-3'}/></Link>
            </form>
          </div>
        </section>
    </>
  )
}

export default SignIn