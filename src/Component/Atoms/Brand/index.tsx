import BrandProps from "./types";
import { BrandIco } from "../../../utils/svgUtils";
import { BrandWapper } from "./styles";
const Brand = ({name}: BrandProps) =>{

  return (
    <BrandWapper>
      <BrandIco/>
      <span>{name}</span>
    </BrandWapper>
  )
}

export default Brand;