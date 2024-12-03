import React from 'react'
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'
import Kindergarden from '@/assets/icons/kindergarden'
import Book from '@/assets/icons/book'
import Blocks from '@/assets/icons/blocks'
import Chalkboard from '@/assets/icons/chalkboard'
import CardOne from './cardOne'
import SectionDescription from '@/components/ui/sectionDescription'

const SuccessProjectOne = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">

                    <div className="lg:max-w-[600px] mt-4">
                        <SectionName className={"text-primary-foreground"}>Our</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] pb-5"}>Academics</Title>
                        <SectionDescription> A Dream is the unprecedented architect of life. With this in perspective, Ascent High School focuses on student centric learning approach for holistic growth in nurturing every student who can have insight, critical thinking and responsive attitude to the things around, in a decisive and logical manner.</SectionDescription>
                        <Button asChild variant="outline" className="mt-10">
                            <Link to={"/contact-us"}>Contact Us</Link>
                        </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                        <CardOne icon={<Kindergarden />} color={"bg-primary"} number={"Pre Primary"} title={"KG Classes"} />
                        <CardOne icon={<Book />} color={"bg-destructive"} number={"Primary School"} title={"1-5 Classes"} />
                        <CardOne icon={<Blocks />} color={"bg-green"} number={"Middle School"} title={"6-8 Classes"} />
                        <CardOne icon={<Chalkboard />} color={"bg-secondary"} number={"High School"} title={"9-10 Classes"} />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SuccessProjectOne

