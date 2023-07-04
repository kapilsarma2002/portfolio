const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-between h-[400px] w-[800px] max-w-[1000px] border border-white/50 rounded-lg">
        <ul className="flex flex-row-reverse gap-8">
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage;