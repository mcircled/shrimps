import React from 'react'
import BlogCard from '../components/blog-card/BlogCard';
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';
import Newsletter from '../components/newsletter/Newsletter';

type Props = {}

function Blog({ }: Props) {
  return (
    <>
      <Header />
      <div className="c-page">
        <div className="container">
          <div className="c-page-heading">
            <h1 className="c-page-heading__title">Blog</h1>
            <p className="c-page-heading__description">Vonge blog features productivity, tips, inspiration and strategies for massive profits. Find out how to set up a successful blog or how to make yours even better!</p>
          </div>
        </div>

        <div className="container animate">
          <div className="row">
            {
              [1, 2, 3].map((item, index) => {
                return <BlogCard
                  title={'Life shrinks or expands in proportion to one’s courage'}
                  description={'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.'}
                  url={'/post/life-shrinks-or-expands-in-proportion-to-one-s-courage'}
                  image={{
                    src: '/images/post-4.jpg',
                    alt: 'Life'
                  }}
                  date={'05-29-2022'}
                  author={{
                    name: 'Rashid Iqbal',
                    image: '/images/avatar.jpg'
                  }} tags={['tag1', 'tag2', 'tag3']} />
              })
            }

          </div>
        </div>

        <nav className="pagination">
          <div className="container">
            <div className="pagination__inner">

              <div className="pagination__list">


                <span className="pagination__prev disabled"><i className="ion ion-ios-arrow-back"></i> Prev</span>

                <div className="pagination__count">
                  Page <span>1</span>
                  of <span>1</span>
                </div>



                <span className="pagination__next disabled">Next <i className="ion ion-ios-arrow-forward"></i></span>
              </div>

            </div>
          </div>
        </nav>

        <Newsletter title={'Join my mailing list'}
          action={'//frnla.us6.list-manage.com/subscribe/post?u=6314d69a3f315af7ce3fb00a0&amp;id=3038727cc3'}
          button={{
            text: 'Subscribe'
          }} />

        <Footer />

      </div>
    </>
  )
}

export default Blog
