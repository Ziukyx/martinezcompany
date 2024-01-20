'use client'
import GradientDivider from '@/Components/GradientDivider'
import ScrollProgress from '@/Components/ScrollProgress'
import HeroCat from '@/Components/catala/HeroCat'
import Introduccio from '@/Components/catala/Introduccio'
import Missio from '@/Components/catala/Missio'
import React from 'react'
import CtaCat from '../../Components/catala/CtaCat'
import NostresValors from '@/Components/catala/NostresValors'
import { FullRuta } from '@/Components/catala/FullRuta'
import VerticalNavbarCat from '@/Components/catala/VerticalNavbarCat'

export default function Page() {
    return (
    <div className="bg-white dark:bg-slate-950">
        <HeroCat />
        <VerticalNavbarCat />
        <ScrollProgress />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <Introduccio />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <Missio />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <CtaCat />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <NostresValors />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
        <FullRuta />
        <GradientDivider className="h-px lg:h-[1.5px] dark:h-px"/>
    </div>
    )
  }