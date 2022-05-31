import React from 'react'

type Props = {}

function PostTop({ }: Props) {
 return (
  <div className="post-top">
   <div className="container">
    <div className="row">


     <div className="col col-6 col-d-12">
      <div className="post-image">
       <img loading="lazy" src="/images/post-4.jpg" alt="Life shrinks or expands in proportion to one’s courage" />
      </div>
     </div>


     <div className="col col-6 col-d-12">
      <div className="post__info">


       <div className="post-tags">

        <a href="/tag/travel" className="post-tags__tag">travel</a>

        <a href="/tag/life" className="post-tags__tag">life</a>

        <a href="/tag/story" className="post-tags__tag">story</a>

       </div>



       <h1 className="post__title">Life shrinks or expands in proportion to one’s courage</h1>

       <div className="post__meta">
        <div className="post__author-image">
         <img loading="lazy" src="/images/avatar.jpg" alt="Rashid Iqbal" />
        </div>

        <div className="post__meta-bottom">
         <div className="post__author">Rashid Iqbal</div>
         <time className="post__date" dateTime="2018-11-08T17:01:35+05:00">08 Nov 2018</time>
        </div>
       </div>

      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default PostTop
