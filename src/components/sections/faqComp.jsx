import React from 'react'
import faq_banner from "@/assets/images/faq/banner-1.png"
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import img from "@/assets/images/laptop-girl.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/lib/fackdata/faqData'


const FaqComp = () => {
  return (
    <section className="lg:pb-15 pb-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-7.5">
          <div className="max-w-[528px] lg:max-w-full mx-auto">
            <img src={img} alt="child with laptop" />
          </div>
          <div>
            <div className="lg:max-w-[520px] pb-10">
              <SectionName>Latest Service</SectionName>
              <Title size={"3.5xl"}>Stay Connected with Our School App!</Title>
            </div>
            <Accordion type="single" defaultValue="one" collapsible>
              {
                faqData.map(({ans, id, question}) => {
                  return (
                    <AccordionItem key={id} value={id} className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0">
                      <AccordionTrigger className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline">{question}</AccordionTrigger>
                      <AccordionContent className="text-base text-foreground">
                        {ans}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqComp