import React from 'react'

const SearchBar = () => {
    return (
        <section className='searchbar'>
            <div className='dDDZYu search-bar-block'>
                <form action="" className='gXDJCk'>
                    <div className='searchbar-left WgAPW'>
                        <div className='search-city eshrpI'>
                            <div className='bRfViD'>
                                <div className='hheYrZ'>
                                    <svg className="BaseSvg-sc-yh8lnd-0 CompassArrowIcon___StyledBaseSvg-sc-1do14k4-0 hNajXU sc-ttovyh-5 ImlNv" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false"><path d="m3.17 12.12 5.82 2.5.4.4 2.5 5.81 8.7-17.43zM1 11.49 21.97 1 23 2.03 12.51 23l-1.39-.04L8.1 15.9l-7.06-3.02z"></path></svg>
                                    <input type='text' className='gGCSuS' placeholder='City or Postal Code' />
                                </div>
                            </div>
                        </div>
                        <div className='search-date eshrpI'>
                            {/* <button type="button" aria-controls="datePicker" className="sc-j3o02m-5 eBkLTq"><svg viewBox="0 0 24 24" width="1.2em" height="1.2em" aria-hidden="true" focusable="false" className="BaseSvg-sc-yh8lnd-0 CalendarIcon___StyledBaseSvg-sc-1a6y0d6-0 hNajXU"><path d="M8.75 3V1h-1.5v2H1v20h17.03L23 18.1V3h-6.25V1h-1.5v2zm6.5 3.5h1.5v-2h4.75v3.25h-19V4.5h4.75v2h1.5v-2h6.5zm6.25 2.75v7.59h-4.66v4.66h.57H2.5V9.25zm-.7 8.91-2.64 2.6v-2.6zm-16.55-6.9h5.5v5.5h-5.5zm1.5 1.5v2.5h2.5v-2.5z"></path></svg><span aria-hidden="true" className="sc-j3o02m-6 hcQEDl">All Dates</span><span id=":R1nam:--default" className="VisuallyHidden-sc-8buqks-0 lmhoCy">Choose date range</span><svg className="BaseSvg-sc-yh8lnd-0 ChevronIcon___StyledBaseSvg-sc-1y4em6t-0 bwaYRf sc-j3o02m-7 fsPdue" viewBox="0 0 24 24" width="1.5em" height="1.5em" aria-hidden="true" focusable="false"><path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8z"></path></svg></button> */}
                            <input type="date" placeholder='All Dates' />
                        </div>

                    </div>

                    <div className='searchbar-right'>
                        <input type="text" placeholder='Search by Artist or Event' />
                        <div>
                            <button type="submit" className="indexstyles__StyledButton-sc-83qv1q-0 jdbotF sc-j3o02m-11 brqMlp"><span className="indexstyles__FlexWrapper-sc-83qv1q-1 kCQEIv"><span className="indexstyles__Text-sc-83qv1q-2 jHTUWf">Search</span></span></button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SearchBar