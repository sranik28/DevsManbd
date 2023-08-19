import Image from "next/image";
import faqImg from "../../../public/question.png"

const FAQ = () => {

    const data = [
        {

            question: "What services does your web development company offer?",
            ans: " Our web development company offers a comprehensive range of services including custom website design, front-end and back-end development, e-commerce solutions, web application development, CMS integration, and more."
        },
        {

            question: "How experienced is your team in web development?",
            ans: " Our team consists of highly skilled and experienced web developers, each with a proven track record in creating successful websites and applications across various industries."
        },
        {

            question: "Can you build a responsive website that works on mobile devices?",
            ans: "Absolutely! We specialize in creating responsive and mobile-friendly websites that provide an optimal viewing experience on a wide range of devices, from smartphones to tablets and desktops."
        },
        {

            question: "What technologies do you use for web development?",
            ans: " We are proficient in a variety of technologies including HTML5, CSS3, JavaScript, PHP, Python, Ruby on Rails, and more. We choose the appropriate technology stack based on the project's requirements and client preferences. "
        },
        {

            question: " Do you offer e-commerce website development?",
            ans: " Yes, we have extensive experience in developing e-commerce websites. We can create custom online stores, integrate secure payment gateways, manage inventory, and implement user-friendly shopping carts."
        },
        {

            question: "Can you redesign my existing website to give it a modern look?",
            ans: " Certainly! We offer website redesign services to give your existing site a fresh and modern appearance. We'll work closely with you to ensure your website aligns with your current branding and goals."
        },
        {

            question: "How long does it take to develop a website?",
            ans: "  The timeline for website development can vary significantly depending on the complexity of the project, features required, and client feedback. We provide estimated timelines during the initial consultation and strive to meet agreed-upon deadlines."
        },
        {

            question: " Will my website be search engine friendly?",
            ans: "   Yes, we design and develop websites with search engine optimization (SEO) best practices in mind. We ensure that your website's structure, content, and coding are optimized for improved visibility on search engines."
        },

    ]


    return (
        <div className="container my-12">
            <p className="text-center">Common Questions</p>
            <h2 className='mb-5 text-3xl font-medium text-center'>Most Popular<span className='text-primary'> Questions</span></h2>
            <p className="mb-20 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque accusantium laboriosam, iure sunt, harum qui et illum, nobis reprehenderit perspiciatis ea dolorum ullam iusto harum qui et illum, nobis reprehenderit perspiciatis ea dolorum ullam iusto?</p>
            <div className="grid gap-10 md:grid-cols-2">

                {
                    data.map((faq, i) =>
                        <div key={i}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000" className="flex gap-6 py-3 duration-300 border-b-4 rounded-lg hover:border-secondary md:h-[180px]">
                                <Image className="w-14 h-14" src={faqImg}></Image>
                                <div>
                                    <h1 className="mb-3 text-xl font-bold">{faq.question}</h1>
                                    <p>{faq.ans}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
export default FAQ;
