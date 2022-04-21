import background from "../../../Assets/images/wallpaper.png"
import { 
  IndexWrapper,
  SideA,
  SideB
} from "./styles";
const IndexLayout = () => {

  return (
    <IndexWrapper>
       <SideA wallpaper={background}>1</SideA>
       <SideB>2</SideB>
    </IndexWrapper>
  )
}

export default IndexLayout;