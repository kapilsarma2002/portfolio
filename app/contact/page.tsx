import Navbar from '@/components/Navbar'
import Contactcard from '@/components/Contactcard'

const SocialMediaLinks = [
  {
    title: 'Github',
    icon: 'Github',
    id: 'kapilsarma2002',
    link: 'www.github.com/kapilsarma2002',
    color: 'black',
  },
  {
    title: 'Linkedin',
    icon: 'LinkedIn',
    id: 'kapilsarma2002',
    link: 'www.github.com/kapilsarma2002',
    color: 'black',
  },
  {
    title: 'Github',
    icon: 'Github',
    id: 'kapilsarma2002',
    link: 'www.github.com/kapilsarma2002',
    color: 'black',
  },
]

const Contact = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className='h-[calc(100%-4rem)] w-full flex justify-center items-center'>
        <div className='h-[500px] w-[1000px] border border-white rounded-lg'>
        <Contactcard />
        </div>
      </div>

    </div>
  )
}

export default Contact
