'use client'
import GradientDivider from '@/Components/GradientDivider'
import AvisoLegal from '@/Components/español/AvisoLegal'
import VerticalNavbar from '@/Components/español/VerticalNavbar'
import React from 'react'

export default function Page() {
    return (
    <div className="bg-white dark:bg-slate-950">
        <VerticalNavbar />
        <AvisoLegal />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
    </div>
    )
  }