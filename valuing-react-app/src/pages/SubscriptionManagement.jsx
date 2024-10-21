/** @format */

import Button from "../components/elements/Button";
import { plans } from "../components/constant/Constant";
import Card from "../components/elements/Card";
import Input from "../components/elements/Input";

const SubscriptionManagement = () => {
  return (
    <div className='h-screen px-6'>
      <div className='py-6'>
        <Button
          className='button w-44 flex justify-center bg-lightGreen text-primary border-none shadow-inherit'
          title='Subscription Plans'
        />
      </div>
      <div className='bg-placeholder py-4 px-6'>
        <div className='flex justify-center gap-6 flex-wrap'>
          {plans.map((plan, index) => (
            <Card
              key={index}
              planName={plan.planName}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
        <div className='flex pt-8 pl-6 h-full'>
          <div className=' text-mtextColor font-bold font-satoshi text-sm mb-3 w-96'>
            <Input
              htmlFor=''
              title='Add Promo Code'
              type='text'
              className='rounded  p-2 '
            />
          </div>
          <div className='p-6 mt-0.5'>
            <Button
              className='button shadow-inherit flex justify-center gap-x-3 border-none '
              title='Generate Promo Code'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagement;
