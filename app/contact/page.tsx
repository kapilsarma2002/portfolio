import Navbar from '@/components/Navbar'
import Contactcard from '@/components/Contactcard'

const Profiles = [
  {
    title: 'Github',
    icon: 'Github',
    id: '@kapilsarma2002',
    link: 'https://www.github.com/kapilsarma2002',
    iconLink: '/../public/github.png',
    color: 'black',
  },
  {
    title: 'Linkedin',
    icon: 'LinkedIn',
    id: 'Kapil Sarma',
    link: 'https://www.linkedin.com/in/kapil-sarma-5bb174184/',
    iconLink: '/../public/linkedin.png',
    color: 'blue',
  },
  {
    title: 'Twitter',
    icon: 'Twitter',
    id: '@kapil_sarma_17',
    link: 'https://www.twitter.com/kapil_sarma_17',
    iconLink: '/../public/twitter.png',
    color: 'blue',
  },
  {
    title: 'Email',
    icon: 'Email',
    id: 'sarmakapil1817@gmail.com',
    link: 'mailto:sarmakapil1817@gmail.com',
    iconLink: '/../public/mail.png',
    color: 'red',
  },
  {
    title: 'Instagram',
    icon: 'Insta',
    id: '_kapilsarma_',
    link: 'https://www.instagram.com/_kapilsarma_/?next=%2F',
    iconLink: '/../public/insta.webp',
    color: 'pink',
  },
]

const Contact = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[calc(100%-4rem)] w-full flex justify-center items-center">
        <div
          className="
            h-[800px]
            w-[1800px] 
            p-12
            rounded-lg 
            flex 
            flex-row
            justify-center 
            items-center 
            gap-12
            overflow-auto
            "
        >
          {Profiles.map((profile) => (
            <Contactcard key={profile.id} props={profile} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
