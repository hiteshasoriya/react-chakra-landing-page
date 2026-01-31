import { Box } from '@chakra-ui/react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import SocialProof from './components/sections/SocialProof'
import CTASection from './components/sections/CTASection'

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Box as="main">
        <Hero />
        <Features />
        <SocialProof />
        <CTASection />
      </Box>
    </Box>
  )
}

export default App