import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";

function SocialLinks(){

const iconStyle="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white hover:bg-purple-600 duration-300";

return(

<div className="flex gap-5">

<a
href="https://github.com/rsumanth25"
target="_blank"
className={iconStyle}
>
<FaGithub/>
</a>

<a
href="https://www.linkedin.com/in/rayeni-sumanth-reddy"
target="_blank"
className={iconStyle}
>
<FaLinkedin/>
</a>



</div>

);

}

export default SocialLinks;