import React from 'react'

export default function NewsItem(props) {

  //Props in rfc
  let { title, description, imageUrl, newsUrl, author, date, source, mode } = props;
  //destructuring the props

  return (
    <div className='my-3'>
      <div className="card" style={{border: "3px solid blue", borderRadius: "7px"}}>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">{source}</span>
        <img src={imageUrl===null ? "./breakingNews.jpg": imageUrl} className="card-img-top" alt="Image" />
        <div className="card-body"
          style={{
            backgroundColor: mode === 'light' ? '#90e0ef' : '#00003e',
            color: mode === 'light' ? 'black' : 'white',
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",

          }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author === null ? "Unknown" : author} on {new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' }) + " IST"}</small></p>
          <a rel='noopener noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}
