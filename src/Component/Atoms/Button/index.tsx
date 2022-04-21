import ButtonProps from "./types";

const Button = ({title, url, type, icon}: ButtonProps) =>{

  return (
    <button>
      {title}
      <span>✴️</span>
    </button>
  )
}

export default Button