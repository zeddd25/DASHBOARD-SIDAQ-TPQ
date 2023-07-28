import { useNavigate } from 'react-router-dom'
import { ButtonCustom, InputCustom } from '../../components/ui'
import { CiLock } from 'react-icons/ci'

const PassReset = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='bg-[#008C74] h-[50vh] lg:h-[100vh] lg:-mt-[380px] lg:-skew-y-[30deg] w-full'></div>
        <section className='absolute top-0 flex flex-col lg:flex-row items-center justify-evenly bottom-0 h-[80vh] lg:h-screen left-0 right-0'>
          <div className='w-full lg:mb-20 lg:w-fit'>
              <h1 className='text-[30px] md:text-[40px] lg:text-[50px] font-[700] mb-5 mt-2 text-[#008C74] animate-pulse border-r-4 border-gray-4ZZ00 bg-gradient-to-l from-white to-white-100 w-fit mx-auto p-3'>Reset Password</h1>
          </div>
          <div className='w-[90%] md:w-[70%] lg:w-1/2'>
            <form className='p-5 bg-white rounded-xl text-center shadow-[0px_0px_9px_rgba(0,0,0,0.3)]' onSubmit={(e)=>e.preventDefault()}>
                <h1 className='text-[20px] md:text-[30px] font-[700] mb-5 mt-2 text-[#008C74]'>Masukan Kata Sandi Baru</h1>
              <InputCustom type={'password'} placeholder={'Kata sandi baru'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<CiLock className='text-xl md:text-[28px] text-[#999]'/>}/>
              <InputCustom type={'password'} placeholder={'Konfirmasi kata sandi baru'} className={'md:text-[26px] focus:ring-0 border-none outline-none w-full md:w-[90%] py-3 px-4'} classNameDiv={'border-b-[1.7px] border-[#999]'} icon={<CiLock className='text-xl md:text-[28px] text-[#999]'/>}/>
              <ButtonCustom value={'Submit'} className={'border-[#008C74] border-2 bg-white rounded-[20px] text-[15px] md:text-[20px] lg:text-[23px] text-[#008C74] font-[700] my-5 py-2 px-3 md:py-3 duration-400 hover:bg-[#008C74] hover:text-white'} eventOnClick={()=> navigate(-1)}/>
            </form>
          </div>
        </section>
    </>
  )
}

export default PassReset