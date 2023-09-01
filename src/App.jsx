import Navbar from "@/Sections/Navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/share.ts"
import Home from "@/Sections/Home/Home"
import Benefits from "@/Sections/Benefits/Benefits"
import ExercisesGYM from "./Sections/Exercise/Exercises"
import ContactUs from "./Sections/ContactUs/ContactUs"


function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home)
  const [isTopPage, setIsTopPage] = useState(true)

  useEffect(() => {
    const scrollHandle = () => {
      window.scrollY === 0 ? { pageSelection: setSelectedPage.home, scrolling: setIsTopPage(true) } : { scrolling: setIsTopPage(false) }
    }
    window.addEventListener('scroll', scrollHandle)
    return () => window.removeEventListener('scroll', scrollHandle)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        isTopPage={isTopPage}
      />
      < Home setSelectedPage={setSelectedPage} />
      < Benefits setSelectedPage={setSelectedPage} />
      <ExercisesGYM setSelectedPage={setSelectedPage} />
      < ContactUs setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
