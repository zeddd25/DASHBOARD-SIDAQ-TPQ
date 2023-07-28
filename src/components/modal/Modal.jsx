import { Link } from 'react-router-dom'
import ButtonCustom from '../ui/ButtonCustom'

const Modal = ({title,content,btnCancel,bgClose,classnameBtn,setIsShowPopup,linkTo}) => {
  return (
    <div className='fixed top-0 w-full z-40'>
    <section className='rounded-2xl w-fit h-fit p-10 flex flex-col justify-center items-center gap-y-10 absolute left-0 right-0 top-0 bottom-0 bg-white m-auto z-50 overflow-auto'>
      <h1 className='text-[20px] font-[700]'>{title}</h1>
    <section>
      {content}
    </section>
    <span className='flex gap-x-5'>
    <Link to={linkTo}><ButtonCustom value={'OK'} className={`${classnameBtn} border-[1.9px] border-cyan-700 py-1 md:py-2 px-3 md:px-4 text-[17px] md:text-[24px]`}/></Link>
    {btnCancel && <ButtonCustom value={'Cancel'} className={`${classnameBtn} border-[1.9px] border-cyan-700 py-1 md:py-2 px-3 md:px-4 text-[17px] md:text-[24px]`} eventOnClick={()=>setIsShowPopup(false)} />}
    </span>
    </section>
    {bgClose ? <div className='bg-black opacity-40 h-screen z-40 w-full' onClick={()=>setIsShowPopup(false)}></div> : <div className='bg-black opacity-40 h-screen z-40 w-full'></div>}
</div>
  )
}

export default Modal