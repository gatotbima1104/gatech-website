// import { TestiCardProps } from "../components/atom/TestiCard";
import UnknownProfile from "../../../public/unknow_profile.jpg"
import { StaticImageData } from "next/image";

export interface TestiCardProps {
    name: string;
    company?: string;
    review: string;
    image?: string | StaticImageData
}

export const TestiUser: TestiCardProps[] = [
    {
        name: "Petr",
        image: UnknownProfile,
        company: "Hotel Agency",
        review: "He has so much experiences in sitempas building, I love his works !!!"
    },
    {
        name: "Tomas",
        image: UnknownProfile,
        company: "Flexity.ai",
        review: "Muhamad works well, He is helping me for so much automation between our suppliers"
    },
    {
        name: "Chabib",
        image: UnknownProfile,
        company: "Crypto trader",
        review: "He built me a Bot for analitycs crypto transactions and wallet Win rates, Good job"
    },
    {
        name: "Moonsoon",
        image: UnknownProfile,
        company: "Trader",
        review: "Made me a Great Automation Bot for my effiecent work, I really love it"
    },
]