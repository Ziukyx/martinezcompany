'use client'
import GradientDivider from '@/Components/GradientDivider'
import PoliticaPrivacidad from '@/Components/español/PoliticaPrivacidad'
import VerticalNavbar from '@/Components/español/VerticalNavbar'
import React from 'react'

export default function Page() {
    return (
    <div className="bg-white dark:bg-slate-950">
        <VerticalNavbar />
        <PoliticaPrivacidad />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
    </div>
    )
  }