import React from 'react'

type JobTypes = {
    id: number;
    title: string;
    company_name: string;
    publication_date: string;
};

type JobTypesProps = {
    data: JobTypes[];
};

const RecentActivity = ({ data }: JobTypesProps) => {
    const lastSixJobs = data
        .sort((a, b) => new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime())
        .slice(0, 6);

    // Split into two columns
    const firstColumn = lastSixJobs.slice(0, 3);
    const secondColumn = lastSixJobs.slice(3, 6);

    return (
        <div className='grid lg:grid-cols-2 gap-4 p-4'>
            <ul className='flex flex-col gap-y-2'>
                {firstColumn.map((item) => (
                    <li key={item.id} className='p-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow-md'>
                        <p className='font-bold'>{item.title} @ {item.company_name}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{item.publication_date}</p>
                    </li>
                ))}
            </ul>
            <ul className='flex flex-col gap-y-2'>
                {secondColumn.map((item) => (
                    <li key={item.id} className='p-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg shadow-md'>
                        <p className='font-bold'>{item.title} @ {item.company_name}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{item.publication_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivity;
