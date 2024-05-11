import React from 'react';

const Stepper = () => {
  const steps = [
    { title: 'Cost-Effective Operation', color: 'green', image: './images/image1.png' , des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse dicta, ex repellendus expedita nam id est odio architecto perferendis  " },
    { title: 'Company details', color: 'green', image: '/path/to/company_details_image.png' },
    { title: 'Subscription plan', color: 'green', image: '/path/to/subscription_plan_image.png' },
    { title: 'Payment details', color: 'green', image: '/path/to/payment_details_image.png' }
  ];

  return (
    <div className='mt-6 font-serif border-2'>
      <div className="flex items-center flex-col justify-center font-[sans-serif] w-max ">
        {steps.map((step, index) => (
          <div className="flex items-center flex-col relative" key={index}>
            <div className="absolute top-0 left-full ml-4 w-max">
              <h6 className="text-lg font-bold text-[#333]">{step.title}</h6>
              <p className='w-[30%] '>{step.des}</p>
            </div>
            <div className={`w-12 h-12 shrink-0 mx-[-1px] border-2 border-${step.color}-500 p- flex items-center justify-center rounded-full`}>
              <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-full" />
            </div>
            {index !== steps.length - 1 && <div className={`w-1 h-16 bg-${step.color}-500`}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
