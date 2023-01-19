import { useState } from 'react';
import SectionHead from './SectionHead';
import { AiFillAmazonCircle } from 'react-icons/ai';

import Card from '../UI/Card';
import { testimonials } from '../data';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);
    
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className='testimonials'>
      <div className='container testimonials__container'>
        <SectionHead
          icon={<AiFillAmazonCircle />}
          title='Testimonials'
          className='testimonials__head'
        />
        <Card className='testimonial'>
          <div className='testimonial__avatar'>
            <img src={avatar} alt={name} />
            {name}
          </div>
          <p className='testimonial__quote'>{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card>
        <div className='testimonials__btn-container'>
          <button
            className='testimonials__btn-container'
            onClick={prevTestimonialHandler}
          >
            <AiFillAmazonCircle />
          </button>
          <button
            className='testimonials__btn-container'
            onClick={nextTestimonialHandler}
          >
            <AiFillAmazonCircle />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
