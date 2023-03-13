import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
function SocialLinks() {

  const links =[
    {
      id: 1,
      child:(
            <>
              Linkedin <FaLinkedin  size={30}/>
            </>
      ),
      href: "https://www.linkedin.com/in/tejasvisjain/",
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child:(
            <>
              Github <FaGithub  size={30}/>
            </>
      ),
      href: "https://www.github.com/TEJASVISJAIN/",
    },
    {
      id: 3,
      child:(
            <>
              Mail <HiOutlineMail  size={30}/>
            </>
      ),
      href: "mailto:tejasvisjain0214@gmail.com"
    },
    {
      id: 4,
      child:(
            <>
              Resume <BsFillPersonLinesFill  size={30}/>
            </>
      ),
      href: "/resume.pdf",
      style: 'rounded-br-md',
      download: true
    }
  ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id,href,child,style,download}) => (
          // eslint-disable-next-line
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 hover:rounded-md ml-[-100px] hover:ml-[-10px] duration-300" + " " + style}>
          <a 
            download={download} 
            target ='_blank'
            rel='noreferrer'
            href={href} 
            className="flex justify-between items-center w-full text-white ">
            {child}
          </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks