import Link from "next/link";
import {FaGithub , FaTwitter , FaInstagram} from "react-icons/fa";

const  socials=[
    {
       icon:<FaGithub />,
       path:"https://github.com/KalashThakare", 
    },
    {
        icon:<FaTwitter />,
        path:"", 
    },
    {
        icon:<FaInstagram />,
        path:"https://www.instagram.com/_kalash_t_/", 
    },
];


export const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social;
