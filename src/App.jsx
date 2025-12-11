import DailyReminder from './components/DeilyReminder'
import HadisBooks from './components/hadisBook'
import HadithFooter from './components/Footer/HadisFooter'
import HadithPage from './components/HadisPage'
import HomePage from './components/HomePage'
import ScholarsSection from './components/Scholers'

function App() {
  return (
    <>
      <HomePage />
      <HadisBooks />
      <DailyReminder />
      <HadithPage />
      <ScholarsSection />
      <HadithFooter />
    </>
  )
}

export default App
