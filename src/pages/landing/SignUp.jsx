import { CiLock, CiUser, CiMail } from 'react-icons/ci'
import { PiPhoneLight }  from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'

const SignUp = () => {
  return (
    <>
      <div className='bg-[#008C74] h-[50vh] lg:h-[100vh] lg:-mt-[380px] lg:-skew-y-[30deg] w-full'></div>
        <section className='absolute top-0 bottom-0 left-0 right-0 flex flex-col lg:flex-row lg:gap-x-20 items-center justify-evenly mt-5 gap-y-5'>
          <div className='w-1/4 lg:mb-20'>
            <img src='' alt="Your Logo" />
          </div>
          <div className='max-w-[98%] md:w-[70%] lg:w-[40%]'>
            <form className='p-5 bg-white rounded-xl text-center shadow-[0px_0px_9px_rgba(0,0,0,0.3)]'>
              <h1 className='text-[20px] md:text-[40px] font-[700] mb-5 mt-2 text-[#008C74]'>Sign Up</h1>
              <div className='h-[262px] md:h-[332px] overflow-y-auto '>
              <InputCustom placeholder={'Nama Lengkap'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999] mb-5 md:mb-10'} icon={<CiUser className='text-xl md:text-[28px] text-[#999]'/>}/>
              <InputCustom type='email' placeholder={'Email'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<CiMail className='text-xl md:text-[28px] text-[#999]'/>}/>
              <InputCustom type='number' placeholder={'Nomor Telepon'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4 appearance-none'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<PiPhoneLight className='text-xl md:text-[28px] text-[#999]'/>}/>
              <InputCustom type='password' placeholder={'Kata Sandi'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<CiLock className='text-xl md:text-[28px] text-[#999]'/>}/>
              <InputCustom type='password' placeholder={'Konfirmasi Kata Sandi'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<CiLock className='text-xl md:text-[28px] text-[#999]'/>}/>
              </div>
              <Link to={'/'}><ButtonCustom value={'Sign Up'} className={'bg-[#008C74] rounded-[20px] text-white text-[15px] md:text-[23px] font-[700] my-5 py-2 px-3 md:py-3'}/></Link>
            </form>
          </div>
        </section>
    </>
  )
}

export default SignUp