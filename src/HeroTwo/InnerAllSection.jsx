import React from 'react'
import SectionOne from "../pages/Hero/SectionOne"
import SectionTwo from '../pages/Hero/SectionTwo'
import SectionThree from '../pages/Hero/SectionThree'
import SectionFour from '../pages/Hero/SectionFour'
import SectionFive from '../pages/Hero/SectionFive'
import SectionSix from '../pages/Hero/SectionSix'
import SectionSeven from '../pages/Hero/SectionSeven'
import SectionEight from '../pages/Hero/SectionEight'
import InnerSection from './InnerSection'
import InnerSectionTwo from './InnerSectionTwo'



const InnerAllSection = () => {
  return (
    <div>
      <SectionOne/>
      <InnerSection/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
    </div>
  )
}

export default InnerAllSection