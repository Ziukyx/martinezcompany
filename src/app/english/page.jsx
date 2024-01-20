'use client'
import GradientDivider from '@/Components/GradientDivider'
import Cta from '@/Components/english/Cta'
import Hero from '@/Components/english/Hero'
import Introduction from '@/Components/english/Introduction'
import Mission from '@/Components/english/Mission'
import OurValues from '@/Components/english/OurValues'
import { Roadmap } from '@/Components/english/Roadmap'
import VerticalNavbar from '@/Components/english/VerticalNavbar'
import React from 'react'

export default function Page() {
    return (
    <div className="bg-white dark:bg-slate-950">
      <VerticalNavbar />
      <Hero />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <Introduction />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <Mission />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <Cta />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <OurValues />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
      <Roadmap />
      <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
    </div>
    )
  }