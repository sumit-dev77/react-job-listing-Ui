import React from 'react'
import Cards from './components/Cards'

const App = () => {


   const jobList = [
  {
    brand_logo: "data:image/jpeg;base64,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",
    company_name: "Meta",
    date_posted: "3 days ago",
    job_post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay_per_hour: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brand_logo: "https://www.bing.com/th/id/OIP.YKFZjzosPzcUtBNHe9cAdAHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    company_name: "Amazon",
    date_posted: "1 month ago",
    job_post: "Cloud Support Associate",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay_per_hour: "$115/hr",
    location: "Hyderabad, India"
  },
  {
    brand_logo: "https://th.bing.com/th/id/OIP.3qsMnUTHk9Zs8dA5meZsSwHaEK?w=309&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company_name: "Apple",
    date_posted: "5 days ago",
    job_post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay_per_hour: "$130/hr",
    location: "Bengaluru, India"
  },
  {
    brand_logo: "https://th.bing.com/th/id/OIP.3f-gyLPI4fXP7oofglJNXQHaHa?w=181&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company_name: "Netflix",
    date_posted: "3 weeks ago",
    job_post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay_per_hour: "$140/hr",
    location: "Delhi, India"
  },
  {
    brand_logo: "data:image/webp;base64,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",
    company_name: "Google",
    date_posted: "12 days ago",
    job_post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay_per_hour: "$150/hr",
    location: "Mumbai, India"
  },
  {
    brand_logo: "data:image/webp;base64,UklGRvoEAABXRUJQVlA4IO4EAAAwJACdASrQAOoAPp1Oo0ylrCOiJVMIoYATiWdu4XCBELrR/L+foTyQ+pvxE+ml5gP2Z9Wv/HepH0AOlY9DPphsij3I41jUzgZZullZyFKBikgxSQYpIMUkGKSDFJBikgxSP2dcVkPPur1iBCrBx3bxZftfXdgBfyCfOPGTCktoj/PQnDt6RjuzUL8K+yqHip5XwPiOvqCCAej6rKmTXFzYZRzQDCp04dslZqMeXqTENOzT0s+icQBHChyhLOC0q1EIZPBLndG9ocsK1aiPLchL9oYYMFsOGACh6tH+JbG4FPoDwxQqz72c1rfqjgmYHL4cldUMOcLzvH9ZtV+yujx8B/zg6hfRh5wIavrdLp0JV1MmxAxSQYpIMUkGKSDFJBikgxSQYpIMUj9AAP7+fYAACr+XnX5NRn6WZ+y27mP/FJUjsNg7eH4dfwfrM0FhAG5gFIL29F1cyQTPxlbLXNBMEmlR3VzM43Tfn4w75RFxpGGNgklTFww3vvre4te5E11EsQBaBO8gd7ISxp3ujFhOeutU3yuBVnR541JkNhrPXZ/IqkcNfjHvlFub8jVw58yWh0ooYSba447KrU4WzD/BbzLFggqEIt3kCIM7GArAAc0RAx4nbD312EbY4tD9D0ynwmtXsDNFiSp9SICIm7ZmTVKxtGcds5bk4tfNBOQQB78qXMePDNO/bSpq4hbz/U0mHkTYsdtR0+XBX5zKieZpjkqtfTfxM4VmZG0nIPjPw+OYsYZ/xl3IFbMtj+P4MuLB/hzkx/j8p/NLvqZiz/jneFXdqroNIxPQt5k7ynUGRR83UAzQXGvtlvLhq6+zGUWHTBroLrRx4HcBuw6FGJTApZajZ9X4qWVsZu/xfEoTnz2FsISVEBXY93cPsNZoMP+nQ+g3FN8C7fK2dpH36GN/DqjnRAJ8L7hotxjnhZjH/2r7ofzyX4r/0H4qUZS+OUYs+dyeehmbiAup4tqglhn/jcl+zKT2PoAiAAtTQORyVQNhakk4tkDogC+/C+7jqwDlxYKpzrr4Pf40ezGr8EVpEht9cNB+fUpQzobAturiW1WI/P/z2vNqs1tuw1bRDFd9lfEj8M1msN+CQeNVCjjjHugFfcS42GV62GfgxUYRYDGkT/UsYnNrlb123YCT/UcSMN01bJcZ8Lhc+hP5Lot2OsDiLOH1UFYjIJ7zWMhj/ZXRIikzTJPcPTZIrSxT3Iuqv0bNBTv94c1VJsZD+I3Y+J11YffKE2xcOpsGXZ6Mw+OCyy5wV7oW9jlRjZ8CmEvwYzsHkoXOTFK0bCBal2rAeni+j3QOXCu44fkTRk9+2IXQfONV2ircyGxvcHR5jmGYipbSEoc5hDh6O49SgFzP+IMvRnJLKUwAbRoTI3S4iS5psQ/DsO4e8jvj+/p9aIJjYey8SdczNFrjHvFGOUVfXz4LxzMVHyjOLoxn/JV6Gu+x7SIjDvineEmRRvHVSDayTRub6btngeBNjmu3i5YXTEx9x/Uk9v0sl5LwCRGKoHC1SR4qnLdnXBpQfmRNWiFHnxYr0+70mtacTLzxv6hXBfH4Vt29NNbc4mR+1m796fw74e1yuBWsDjinURAv/vgpHITpoOrIZlQT/3RYxEkGLxd2qLEtZOjCO2MA3PHuVOwBjDJMruWxHP8/BLxhgVCtqKPlc0EGoAAAAAAAAA==",
    company_name: "Microsoft",
    date_posted: "2 months ago",
    job_post: "Product Manager",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay_per_hour: "$125/hr",
    location: "Noida, India"
  },
  {
    brand_logo: "https://th.bing.com/th/id/OIP.zAqniopSixprJzkQvKkSaQHaJj?w=133&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company_name: "Tesla",
    date_posted: "8 days ago",
    job_post: "Software QA Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay_per_hour: "$100/hr",
    location: "Pune, India"
  },
  {
    brand_logo: "https://th.bing.com/th/id/OIP.5lvK2esigr_VFcouzvNhwQHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company_name: "NVIDIA",
    date_posted: "4 weeks ago",
    job_post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay_per_hour: "$160/hr",
    location: "Bengaluru, India"
  }
];


  return (
    <div className='parent'>
{jobList.map(function(elem){
  return <Cards company={elem.company_name} logo={elem.brand_logo} date={elem.date_posted} post={elem.job_post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay_per_hour} 
  location={elem.location} />
})}   

    </div>
  )
}

export default App
