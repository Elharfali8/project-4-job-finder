import React from 'react'

const MainSelectInput = ({data, label}: {data:string[], label:string}) => {
  return (
      <div className='grid gap-y-1'>
          <label htmlFor="categories" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{label}</label>
          <select className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' defaultValue='all'>
          <option value="all">All</option>
              {data?.map((item:string, index:number) => {
                  return (
                      <option value={item} key={index} className=' capitalize' >{item}</option>
              )
          })}
    </select>
      </div>
  )
}

export default MainSelectInput