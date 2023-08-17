
const ButtonCustom = ({type = 'button',className,value,eventOnClick}) => {
  return (
    <button type={type} className={`${className} rounded-full w-full`} onClick={eventOnClick}>
        {value}
    </button>
  )
}

export default ButtonCustom