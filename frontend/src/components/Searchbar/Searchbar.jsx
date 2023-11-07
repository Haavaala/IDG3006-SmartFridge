import React from 'react'
import './searchbar.css'



function Searchbar({ searchInput, setSearchInput }) {

  const handleInputChange = (e) => {
    const newSearchInput = e.target.value;
    console.log('Search Input:', newSearchInput);
    setSearchInput(newSearchInput);
  };

  return (
  <div className="search">
    <div className="search-box">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0508 24.4922C5.52344 24.4922 0.0976562 19.0664 0.0976562 12.5391C0.0976562 6 5.51172 0.585938 12.0391 0.585938C18.5781 0.585938 24.0039 6 24.0039 12.5391C24.0039 19.0664 18.5898 24.4922 12.0508 24.4922ZM12.0508 22.5C17.582 22.5 22.0117 18.0703 22.0117 12.5391C22.0117 7.00781 17.5703 2.57812 12.0391 2.57812C6.50781 2.57812 2.10156 7.00781 2.10156 12.5391C2.10156 18.0703 6.51953 22.5 12.0508 22.5ZM10.7734 16.0664C8.08984 16.0664 5.89844 13.8633 5.89844 11.1914C5.89844 8.51953 8.08984 6.31641 10.7734 6.31641C13.457 6.31641 15.6484 8.50781 15.6484 11.1914C15.6484 12.1992 15.332 13.1367 14.8047 13.9102L17.8281 16.9453C18.0156 17.1445 18.1445 17.3906 18.1445 17.6602C18.1445 18.2461 17.7578 18.6562 17.1953 18.6562C16.8555 18.6562 16.5977 18.5508 16.3633 18.3047L13.3633 15.3164C12.6133 15.7852 11.7227 16.0664 10.7734 16.0664ZM10.7734 14.4727C12.5664 14.4727 14.043 12.9844 14.043 11.1914C14.043 9.38672 12.5664 7.91016 10.7734 7.91016C8.98047 7.91016 7.49219 9.39844 7.49219 11.1914C7.49219 12.9844 8.98047 14.4727 10.7734 14.4727Z" fill="black"/>
      </svg>

      <form>
        <input
          className='input-field'
          type="text"
          placeholder="Søk"
          value={searchInput}
          onChange={handleInputChange}
        />
      </form>
    </div>
  </div>
  )
}

export default Searchbar