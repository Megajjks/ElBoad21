import background from "../../../Assets/images/wallpaper.png"
import { Brand } from "../../Atoms";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../../utils/svgUtils";
import { 
  IndexWrapper,
  SideA,
  SideB,
  SocialLinksWrapper,
  SocialLink,
} from "./styles";

const socialNetworks =[
  {
    code:"facebook",
    url:"https://www.facebook.com",
    icon: <FacebookIcon/>
  },
  {
    code:"instagram",
    url:"https://www.instagram.com",
    icon: <InstagramIcon/>
  },
  {
    code:"twitter",
    url:"https://www.twitter.com",
    icon: <TwitterIcon/>
  }
]

const IndexLayout = () => {

  return (
    <IndexWrapper>
       <SideA wallpaper={background}>
         <Brand name="ELBOD21"/>
         <SocialLinks destinationArr={socialNetworks}/>
       </SideA>
       <SideB>2</SideB>
    </IndexWrapper>
  )
}

/* subcomnents */

type DestinyArrays = {
  code : string,
  url: string,
  icon: any,
}
type SocialLinksType = {
  destinationArr : Array<DestinyArrays>,
}
const SocialLinks = ({destinationArr} : SocialLinksType) =>(
  <SocialLinksWrapper>
    {destinationArr.map((obj, idx) =>(
      <SocialLink key={idx} href={obj.url} target="_blank" >
        {obj.icon}
      </SocialLink>  
    ))}
  </SocialLinksWrapper>
)

export default IndexLayout;