
import './App.css'

import QuoteBox from './components/QuoteBox'
import * as cornReport from './quotes/quotes.json'

function App() {

  return (
    <>
      <main className="relative h-screen w-screen overflow-y-auto bg-amber-100">
        <div className="absolute inset-0 bg-[url('/corn.svg')] bg-no-repeat bg-center bg-[length:90%] md:bg-[length:40%] opacity-40"></div>

        <div className="relative z-10 w-full flex flex-col items-center h-full">
        <div className=' md:max-w-4/5'>
          <h1 className="text-4xl text-center font-bold p-2 mb-3">
            Brammer Corn Report
          </h1>
          <div>
            <h2 className='text-center text-2xl font-semibold'>
              Year: 2025
            </h2>
          </div>
          <div className='w-full px-2'>
            <QuoteBox imageSrc='/fp-corn.jpg' imageAlt='FP is cornfused why you would not love corn'text={cornReport.data['year-2025'].fp}/>
            <QuoteBox imageSrc='/mumsy-corn.jpg' imageAlt='Mumsy magically affecting the corn taste' align='right'text={cornReport.data['year-2025'].mumsy}/>
            <QuoteBox imageSrc='/kittx-corn.jpg' imageAlt='Kitty believes in lush life corn' text={cornReport.data['year-2025'].kittx}/>
            <QuoteBox imageSrc='/sachi-corn.jpg' imageAlt='Sachi surprised about corn' align='right'text={cornReport.data['year-2025'].sachi}/>
            <QuoteBox imageSrc='/hap-corn.jpg' imageAlt='Hap being an oriole traitor talking about corn' text={cornReport.data['year-2025'].hap}/>
            <QuoteBox imageSrc='/william-corn.jpg' imageAlt='William with corn' align='right' text={cornReport.data['year-2025'].william}/>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}

export default App
