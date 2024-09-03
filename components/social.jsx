import Link from "next/link";
import {FaGithub , FaTwitter , FaInstagram} from "react-icons/fa";

const  socials=[
    {
       icon:<FaGithub />,
       path:"", 
    },
    {
        icon:<FaTwitter />,
        path:"", 
    },
    {
        icon:<FaInstagram />,
        path:"", 
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
