"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from './ui/form';
import { Button } from './ui/button';


const formSchema = z.object({
    place: z.string().optional(),
    date: z.string().optional(),
    search: z.string().optional(),
})

const SearchBar = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            place: '',
            date: '',
            search: '',
        }
    });

    const [dateValue, setDate] = useState<string>("");

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

        setDate(e.target.value);
        form.setValue('date', e.target.value);
    }

    // change to a async function
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }


    return (
        <section className='searchbar'>
            <div className='dDDZYu search-bar-block'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='gXDJCk flex-wrap'>
                        <div className='w-5 searchbar-left WgAPW'>
                            <div className='search-city eshrpI'>
                                <div className='bRfViD'>
                                    <div className='hheYrZ'>
                                        <svg className="BaseSvg-sc-yh8lnd-0 CompassArrowIcon___StyledBaseSvg-sc-1do14k4-0 hNajXU sc-ttovyh-5 ImlNv" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path d="m3.17 12.12 5.82 2.5.4.4 2.5 5.81 8.7-17.43zM1 11.49 21.97 1 23 2.03 12.51 23l-1.39-.04L8.1 15.9l-7.06-3.02z"></path></svg>
                                        <input type='text' className='gGCSuS' placeholder='City' {...form.register('place')} />
                                    </div>
                                </div>
                            </div>
                            <div className='search-date eshrpI'>
                                <input type="date" value={dateValue} onChange={handleDateChange}/>
                                {dateValue === undefined && (<span className="placeholder-text">All Dates</span>)}
                            </div>

                        </div>

                        <div className='searchbar-right'>
                            <input type="text" className='text-gray-500 ml-3' placeholder='Search by Artist or Event' {...form.register('search')} />
                            <div>
                                <Button type="submit" className="indexstyles__StyledButton-sc-83qv1q-0 jdbotF sc-j3o02m-11 brqMlp"><span className="indexstyles__FlexWrapper-sc-83qv1q-1 kCQEIv"><span className="indexstyles__Text-sc-83qv1q-2 jHTUWf">Search</span></span></Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default SearchBar