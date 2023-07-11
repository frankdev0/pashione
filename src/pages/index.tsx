import React, { useState, useEffect } from 'react';
import styles from '../components/nav.module.css'
import Image from 'next/image'
import AppNav from '@/components/AppNav';


const Home = () => {

  const testimonials = [
    {
      id: 1,
      image: '/one.png',
      text: `Joining Pashione has been a game-changer for my business. The platform's wide customer reach and powerful marketing tools have significantly boosted sales for my brand, Stellar Fashion. I'm impressed by the user-friendly interface and dedicated seller support. Highly recommended!`,
      name: '- Jane Thompson, Stellar Fashion',
    }, 
    {
      id: 2,
      image: '/two.png',
      text: `"Selling on Pashione has exceeded my expectations for my brand, Glow Beauty. The personalized recommendations have helped me connect with the right customers, resulting in higher conversions. The secure transaction system gives me peace of mind, and the prompt seller support has been outstanding. It's the best platform for sellers!" `,
      name: '- Sarah Evans, Glow Beauty',
    }, 
    {
      id: 3,
      image: '/three.png',
      text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
      name: '-  - Michael Johnson, HomeStyle Decor',
    }, 
    {
      id: 4,
      image: '/four.png',
      text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
      name: ' - Michael Johnson, HomeStyle Decor',
    }, 
    {
      id: 5,
      image: '/four.png',
      text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
      name: '- Jane Thompson, Stellar Fashion',
    }, 
  ]

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const faqData = [
    {
      question: 'What is MoMo Credit?',
      answer:
        'MoMo Credit is a loan app that allows you apply for a short term loan through the MoMo Credit app.',
    },
    {
      question: 'Why should I use MoMo Credit app?',
      answer:
        'MoMo Credit gives you access to soft loan, business loan and education loan. With Momo Credit you are just a click away from accessing that urgent funds to finance your urgent needs.',
    },
    {
      question: 'Is there interest or any charges on using the MoMo Credit loan?',
      answer:
        'MoMo Credit loan is an interest free loan, but there is a service fee charge for the usage of the platform.',
    },
    {
      question: 'Who can apply for loan on MoMo Credit app?',
      answer:
        'Only salary earners with proof of their monthly salaries can apply for loans on MoMo Credit app. MoMo Credit is strictly for salary earners',
    },
    {
      question: 'Who can stand as a guarantor?',
      answer:
        'A guarantor must be a salary earner.',
    },
    {
      question: 'How much can I apply as a first time customer?',
      answer:
        'First time customers can apply for a loan from N10,000 to N50,000',
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState<number>(-1);

    const toggleAccordion = (index: number) => {
      if (activeIndex === index) {
        setActiveIndex(-1);
      } else {
        setActiveIndex(index);
      }
    };

  return (
    <div className={styles.body} >
      <div>
      <AppNav/>
      </div>
      
      <section className={styles.centralize}>
        {/* <button className='btn btn-success'>done</button> */}
        <div className={`${styles.secondsection} row`}>
          <div className={`${styles.herotexts} col-12 col-lg-6`}>
            <div className={styles.textbody}>
              <div className={styles.toptexts}>
              <div className={styles.sidetext}>
              <h3><span className={styles.primarytext}>Supercharge </span><span className={styles.semitext}>Your Sales With</span>  <span className={styles.secondary}>Pashione</span></h3>
              </div>
            <div className={styles.subtexts}>
            <p className='mb-2'>Reach More Customers, Expand Your Business.</p>
            </div>
            </div>
            
            <div>
            <div className={styles.herobuttons}>
            <div><button className={styles.getstartedbutton}>Get Started</button></div>
          <div><button className={styles.loginbutton}>Login</button></div>
          
        </div>
            </div>
            </div>
          </div>
          <div className={`${styles.heroimg} col-12 col-lg-6`}>
            <Image src='/heroimage.png' width={500} height={500} alt='heroimage' className={`img-fluid ${styles.imageWidth} `}/>
          </div>
        </div>
      </section>
      {/* <main>
        <div className={styles.challenges}>
          <div className={styles.innerbox}>
            <div className={styles.headertext}>
                <div>
                  <div className={styles.headerwidth}>
                    <h3 className={styles.innerboxheader}>Overcome Selling Challenges, Unleash Your Potential.</h3>
                  </div>
                  <div className={styles.textwidth}>
                    <p className={styles.innerboxtexts}>Are you struggling to reach a wider customer base and boost your sales? Do you find it challenging to navigate the complex world of e-commerce? We understand your pain points and are here to help.</p>
                  </div>    
                </div>
            </div>
          </div>
        </div>
      </main> */}
      <main>
        <div className='row'>
          <div className={`${styles.challenges} col-12`}>
            <div className={`${styles.innerbox}`}>
              <h3 className={styles.innerboxheader}>Overcome Selling Challenges, Unleash Your Potential.</h3>
              <p className={styles.innerboxtexts}>Are you struggling to reach a wider customer base and boost your sales? Do you find it challenging to navigate the complex world of e-commerce? We understand your pain points and are here to help.</p>
            </div>
          </div>

        </div>
      </main>
      <main>
        <div className={`row ${styles.thirdsection}`}>
          <div className={`col-12 col-lg-6 ${styles.thirdparagraph}`}>
            <div className={styles.ecommercetexts}>
            <h3 className={styles.innerecommerce}>The Ultimate E-commerce Solution for Sellers.</h3>
            <p className={styles.paragrapghs}>At  Pashione, we provide you with the tools and resources to overcome obstacles and thrive in the online marketplace. From maximizing your product visibility to streamlining your operations, we have you covered.</p>
            <div className={`${styles.paragrapghs} mt-2`}>
            <button className={styles.getstartedbutton}>Get Started</button>
            </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-md-2 mt-sm-5">
        <Image src="/ecommerce.png" width={500} height={500} alt="ecommerce pic" className={`img-fluid ${styles.solutionimg}`} />
      </div>
        </div>
      </main>
      <main>
        <div className={`row ${styles.sectionfour}`}>
          <div className={`${styles.fourheader} my-md-4 `}>
          <h3 className={styles.innerecommerce}>Why Choose Pashione for Your Business?</h3>
          </div>
          
          <div className='col-12 my-md-5'>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Wide Customer Base</h6>
              <p className={styles.description}>Access millions of active shoppers, expanding your potential customer reach.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>User-Friendly Setup</h6>
              <p className={styles.description}>Easily create and manage your product listings with our intuitive interface.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Marketing Tools</h6>
              <p className={styles.description}>Leverage powerful marketing tools to promote your products and boost sales.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Seamless Order Management</h6>
              <p className={styles.description}>Effortlessly track orders, manage inventory, and fulfill customer needs.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Secure Transactions</h6>
              <p className={styles.description}>Ensure safe and secure transactions with our trusted payment gateway.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Insights and Analytics</h6>
              <p className={styles.description}>Gain valuable business insights through comprehensive analytics and reports.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Dedicated Seller Support</h6>
              <p className={styles.description}>Rely on our responsive seller support team for assistance whenever you need it.</p>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div>
          <div className={`${styles.fiveheader} row mx-auto`}>
            <div className='col-12 mx-auto'>
            <h3 className={styles.innerecommerce}>Trusted by Successful Sellers.</h3>
            <div className='mx-auto d-flex justify-content-center'>
            <p className={styles.description}>Join a community of thriving sellers who have achieved remarkable growth and success on our platform. Benefit from our trusted reputation and industry expertise.</p>
            </div>
           
            </div>
          </div>
          <div className={`${styles.sellerimg} row`}>
            <Image src='/seller.png' width={500} height={500} alt='seller' className={`img-fluid ${styles.seller}`}/>
          </div>
        </div>
      </main>
      <main>
        <div>
          <div className={` ${styles.fiveheader} mb-5`}>
          <h3 className={styles.innerecommerce}>Hear from Our Successful Sellers</h3>
          </div>
        
       <div className={styles.container}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${currentSlide * 424}px)`, // Adjusted to include the slide width and gap
          transition: 'transform 0.3s ease-in-out',
        }}
      >
         {testimonials.map((testimonial, index) => {
          let slideIndex = index - currentSlide;
          if (slideIndex < 0) {
            slideIndex += testimonials.length;
          }
          return (
          <div
            key={testimonial.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
            style={{
              transform: `translateX(${slideIndex * 424}px)`, // Adjusted to include the slide width and gap
            }}
          >
            <div>
          <p className={styles.text}>{testimonial.text}</p>
          <div className={styles.content}>
          <Image className={styles.image} width={30} height={30} src={testimonial.image} alt="Testimonial" />
            <p className={styles.name}>{testimonial.name}</p>
          </div>
          </div>
          </div>
         );
        })}
      </div>
     
    </div>
    <div className={styles.testimonialbtn}>
      <div className={styles.minus} onClick={prevSlide}>-</div>
      <div className={styles.minus} onClick={nextSlide}>+</div>
    </div>
        </div>
      </main>
      {/* FREQUENTLY ASKED QUESTIONS */}
      <main>
      <div className={`${styles.fiveheader} row mb-4`}>
        <div>
        <h3 className={`${styles.innerecommerce} col-12`}>Frequently Asked Questions</h3>
        </div>
          
          </div>
          <div className={styles.faqcontainer}>
      {faqData.map((faq, index) => (
        <div key={index} className={styles.faq}>
          <div className={styles.questions}>
            <p className={styles.question}>{faq.question}</p>
            <div className={styles.togglefaq} onClick={() => toggleAccordion(index)}>
              <p>{activeIndex === index ? '-' : '+'}</p>
            </div>
          </div>
          {activeIndex === index && (
            <div className={styles.answerbody}>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
          
      </main>
      {/* BANNER */}
      {/* <main className={styles.bannercontainer}>
        <div className={`${styles.banner} row`}>
         
          <div className={`${styles.bannerleft} col-12 col-lg-6`}>
            <div className={styles.bannerheader}>
              <h3>Start Growing Your Business Today</h3>
            </div>
            <div className={styles.bannertexts}>
              <p>Join Pashione and take your business to new heights. Embrace the opportunities, tap into our resources, and become a part of our vibrant community of successful sellers.</p>
            </div>
            <button className={styles.bannerbutton}>Get Started</button>
          </div>
          <div className='col-6'>
            <Image src='/banner.png' width={500} height={500} alt='banner' className={styles.bannerimg} />
          </div>
        </div>
      </main> */}
     <main className='px-3'>
  <div className={`${styles.bannercontainer} row`}>
    <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
      <div className={`${styles.bannerr} text-center text-md-start px-4 py-4`}>
        <div>
          <h3 className={`${styles.bannerheaderr}`}>Start Growing Your Business Today</h3>
        </div>
        <div className={styles.bannertexts}>
          <p>Join Pashione and take your business to new heights. Embrace the opportunities, tap into our resources, and become a part of our vibrant community of successful sellers.</p>
        </div>
        <button className={`${styles.bannerbutton} btn btn-primary btn-lg mt-1`}>Get Started</button>
      </div>
    </div>
    <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
      <div className={styles.bannerimg}>
        <Image src="/banner.png" width={350} height={350} alt="banner" />
      </div>
    </div>
  </div>
</main>

      {/* Footer Section */}
      <div className={styles.mainfooter}>
        <div className={styles.footer}>
          <div>
            <div className={styles.footerlogo}>
            <Image src='/pashionelogo.png' width={100} height={30} alt='pashione logo'/>
            </div>
         
          <div className={styles.socialicons}>
          <Image src='/facebook.png' width={20} height={20} alt='facebook logo'/> 
          <Image src='/instagram.png' width={20} height={20} alt='instagram logo'/> 
          <Image src='/twitter.png' width={20} height={20} alt='twitter logo'/> 
          <Image src='/youtube.png' width={20} height={20} alt='youtube logo'/> 
          <Image src='/linkedin.png' width={20} height={20} alt='linkedin logo'/> 
          </div>
          <div className={styles.reserved}>
            <p className={styles.copyright}>© 2023, Pashione All rights reserved</p>
          </div>
          </div>
          <div className={styles.submenus}>
            <div>
              <div className={styles.submenuheading}>Company</div>
              <p className={styles.submenutext}>About-Us</p>
              <p className={styles.submenutext}>Media</p>
              <p className={styles.submenutext}>Privacy Policy</p>
            </div>
            <div>
              <div className={styles.submenuheading}>Resources</div>
              <p className={styles.submenutext}>FAQs</p>
              <p className={styles.submenutext}>Blog</p>
              <p className={styles.submenutext}>Pashione University</p>
            </div>
            <div>
              <div className={styles.submenuheading}>Support</div>
              <p className={styles.submenutext}>Seller help</p>
              <p className={styles.submenutext}>Contact-Us</p>
              <p className={styles.submenutext}>Payments</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home;