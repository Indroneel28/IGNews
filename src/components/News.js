import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


//News will contain NewsItem Component

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const capitalize = (str) => str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';


  const updateNews = async () => {
    props.setProgress(10);

    setLoading(true); //Loading buffering will show

    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    

    props.setProgress(40);

    let data = await fetch(url);
    

    props.setProgress(60);
    let parsedData = await data.json();

    props.setProgress(80);
    // console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false); //Loading buffering is disabled now

    props.setProgress(100);
  }

  //useEffect hook is used in rfc instead of componentDidMount() in rcc    IMP:- [(both are same kind of)]
  useEffect(() => {
    document.title = `${props.category==='general'? 'Home' : capitalize(props.category)}- IG News`;
    updateNews();
  }, []); // Suppresses all console.warn calls



  // // componentDidMount() will run after the execution of render
  // async componentDidMount() {
  //   updateNews();
  // }

  // handlePrevClick = async () => {
  //   setState((state) => ({ page: state.page - 1 }), updateNews);
  // };

  // handleNextClick = async () => {
  //   setState((state) => ({ page: state.page + 1 }), updateNews);
  // };

  const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    

    //await can be used only under aync
    setPage(page + 1); //Loading buffering will show

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults);
  };



  return (
    <>
      <h1 className='text-center' style={{marginTop: '10vh', marginBottom: '3vh', color: props.mode==='light'?'black':'white',}}>{props.category==="general" ? 'IG News- Top Headlines' : `IG News- Top Headlines from ${capitalize(props.category)} category`}</h1>

      {loading === true && <Spinner />} {/*This is short-circuit... If first condition is false then Spinner component will not execute */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="container">
          <div className="row">


            {articles.map((element) => {
              return <div className="col-md-4" key={element.url} >
                <NewsItem mode={props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
        </div>
      </InfiniteScroll>

      {/*state.loading === false && <div className="container d-flex justify-content-around mb-3">
          <button disabled={state.page <= 1} type='button' className='p-2 btn btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
          <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type='button' className='p-2 btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
        </div>*/}

    </>
  )
}




News.defaultProps = {
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}