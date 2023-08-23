
const ButtonCustom = ({type = 'button',className,value,icon,eventOnClick}) => {
  return (
    <button type={type} className={`${className} rounded-full `} onClick={eventOnClick}>
        {icon}
        {value}
    </button>
  )
}

export default ButtonCustom