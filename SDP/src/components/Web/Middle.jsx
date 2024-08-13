import React from 'react'
import './Midd.css'

const Middle = () => {
  const cardsData = [
    { title: 'Diligord', image: 'https://unsplash.it/500/500/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
    { title: 'Rocogged', image: 'https://unsplash.it/511/511/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
    { title: 'Strizzes', image: 'https://unsplash.it/502/502/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
    { title: 'Clossyo', image: 'https://unsplash.it/503/503/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
    { title: 'Rendann', image: 'https://unsplash.it/504/504/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
    { title: 'Reflupper', image: 'https://unsplash.it/505/505/', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.' },
  ];
  return (
 <div className='homepage'>

<body>
  
    {/* <!-- home --> */}
    
    <div class="home">
      <div class="containerhome">
        <div class="founder-text">
          <h1 class="f-title">Get higher conversion rates on fashion styles</h1>
          <p class="f-descr">We help you get more leads by offering and managing high performing clothing systems.</p>
          <a class="cta" href="#">Get help with Flyrobe</a>
        </div>
        <div class="founder"></div>
      </div>
    </div>



   <div>  

   <div className="CSSgal">
      {/* Slide Targets */}
      <div id="s1"></div>
      <div id="s2"></div>
      <div id="s3"></div>
      <div id="s4"></div>

      {/* Slider */}
      <div className="slider">
        <div style={{ background: '#5b8' }}>
          <h2>PURE <b>CSS</b> SLIDESHOW</h2>
          <p>Responsive Slideshow Gallery created using CSS only<br />by Roko</p>
        </div>
        <div style={{ background: '#85b' }}>
          <h2>Slide 2</h2>
        </div>
        <div style={{ background: '#e95' }}>
          <h2>Slide 3</h2>
        </div>
        <div style={{ background: '#e59' }}>
          <h2>Slide 4</h2>
        </div>
      </div>

      {/* Prev/Next Navigation */}
      <div className="prevNext">
        <div>
          <a href="#s4"></a><a href="#s2"></a>
        </div>
        <div>
          <a href="#s1"></a><a href="#s3"></a>
        </div>
        <div>
          <a href="#s2"></a><a href="#s4"></a>
        </div>
        <div>
          <a href="#s3"></a><a href="#s1"></a>
        </div>
      </div>

      {/* Bullets Navigation */}
      <div className="bullets">
        <a href="#s1">1</a>
        <a href="#s2">2</a>
        <a href="#s3">3</a>
        <a href="#s4">4</a>
      </div>
    </div>





   </div>


    {/* <!-- process --> */}
    <div class="process box">
      <div class="container">
        <h2 class="title">Our process – Conversion Rate Optimization</h2>
        <div class="process-item clearfix">
          {/* <!--process item 1--> */}
          <div class="process-icon-1 column">
            <h3 class="item-title">1<br />Define Goal</h3>
            <p class="item-descr"><b>Step 1</b> is to define your goal. It could be to get leads, subscriber signups and more. We use increase vs your current conversion rate as a baseline to define success.</p>
          </div>
          {/* <!--process item 2 --> */}
          <div class="process-icon-2 column">
            <h2 class="item-title">2<br />Design & Build</h2>
            <p class="item-descr"><b>Step 2</b> is to create the external landing page. We design your page, write the copy, code and implement. All you need to focus on is managing your new leads.</p>
          </div>
          {/* <!--process item 3 --> */}
          <div class="process-icon-3 column">
            <h2 class="item-title">3<br />Test & Improve</h2>
            <p class="item-descr"><b>Step 3</b> is where the magic happens. We always launch two versions of your landing page to run A/B split tests to find the best performer. Once we do we create a new challenger.</p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- results --> */}

    
    <div class="results box">
    
    <div className="wrapper">
      <h1>Parallax Flipping Cards</h1>
      <div className="cols">
        {cardsData.map((card, index) => (
          <div key={index} className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="containerab">
              <div className="front" style={{ backgroundImage: `url(${card.image})` }}>
                <div className="inner">
                  <p>{card.title}</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

   
    {/* <!-- help --> */}
    <div class="help box">
      <div class="container">
        <h2 class="item-title">Get higher conversion rates on landing pages</h2>
        <p class="item-descr">We help you get more leads by creating and managing high performing landing pages.
        </p>
        <a class="cta" href="#">i want help now</a>
      </div>
    </div>
    {/* <!--screen-size--> */}
   
       <div className="message">
        Sorry, your browser does not support CSS Grid. 😅
      </div>
      <section className="sectionbox">
       
        <div className="grid">
          <div className="item">
            <div className="item__details">jelly-o brownie sweet</div>
          </div>
          <div className="item item--large">
            <div className="item__details">Muffin jelly gingerbread</div>
          </div>
          <div className="item item--medium">
            <div className="item__details">sesame snaps chocolate</div>
          </div>
          <div className="item item--large">
            <div className="item__details">Oat cake</div>
          </div>
          <div className="item item--full">
            <div className="item__details">jujubes cheesecake</div>
          </div>
          <div className="item item--medium">
            <div className="item__details">Dragée pudding brownie</div>
          </div>
          <div className="item item--large">
            <div className="item__details">Oat cake</div>
          </div>
          <div className="item">
            <div className="item__details">powder toffee</div>
          </div>
          <div className="item item--medium">
            <div className="item__details">pudding cheesecake</div>
          </div>
          <div className="item item--large">
            <div className="item__details">toffee bear claw</div>
          </div>
          <div className="item">
            <div className="item__details">cake cookie croissant</div>
          </div>
          <div className="item item--medium">
            <div className="item__details">liquorice sweet roll</div>
          </div>
          <div className="item">
            <div className="item__details">chocolate marzipan</div>
          </div>
         
        </div>
      </section>
    
    {/* <!--testing--> */}
    <div class="testing box">
      <div class="container">
        <h2 class="title">A/B testing built on a solid hypothesis</h2>
        <p class="descr">Campaign Monitor is one of the worlds leading Email Marketing software providers, and they partnered up with us at ConversionLab to get higher conversion rates. They had been using landing pages with great success, and variant A below was their current champion. With A/B testing, also called split testing, we were be able find a better performing formula. We created a challenger that added more emotion and conversion centered design that proved quite powerful.</p>
        <div class="testing-img-1"></div>
        <div class="testing-img-2"></div>
        <div class="testing-img-arrow"></div>
        <p class="rate"><span>61%</span><br />Increase in Conversion Rate</p>
      </div>
    </div>
    {/* <!--review --> */}
    <div class="review box">
      <div class="container">
        <div class="review-text">
          <p class="descr"><q>ConversionLab has helped Campaign Monitor grow our business by optimizing our landing pages and improving our calls to action. We’ve increased conversion rates by 260% and seen a significant reduction in customer acquisition cost. We are very happy with the results and look forward to testing more optimization strategies.</q></p>
          <h4 class="title">Shamita Jayakumar, Senior Marketing Manager</h4>
          <div class="review-img"></div>
        </div>
      </div>
    </div>
    {/* <!--effect--> */}
  
    {/* <!--customers--> */}
    <div class="customers box">
      <div class="container">
        <h2 class="title">Customers we have worked with</h2>
        <p class="descr">We work with companies of all sizes. Here are some of our happy customers that we have increased conversion rates for.
        </p>
        <div class="customer-wall-1 clearfix">
          <div class="customer-img-1"></div>
          <div class="customer-img-2"></div>
          <div class="customer-img-3"></div>
          <div class="customer-img-4"></div>
        </div>
        <div class="customer-wall-2 clearfix">
          <div class="customer-img-5"></div>
          <div class="customer-img-6"></div>
          <div class="customer-img-7"></div>
        </div>
      </div>
    </div>
    {/* <!--partner--> */}
    <div class="partner box">
      <div class="container">
        <h2 class="title">Proud Partner of Unbounce</h2>
        <p class="descr">Every superhero needs his cape – Unbounce is ours!</p>
        <div class="partner-img"></div>
      </div>
    </div>
 
    <footer>
      <div class="footer box">
        <div class="container">
          <div class="column-1 clearfix">
            <h5 class="title">Newsletter</h5>
            <p class="descr">Sign up for latest news, tips and learnings from ConversionLab.</p>
            <a class="cta" href="#">sign up for newsletter</a>
          </div>
          <div class="column-2 clearfix">
            <h5 class="title">Follow us</h5>
            <div class="social">
              <a class="fb-icon" href="#"></a>
              <a class="tw-icon" href="#"></a>
              <a class="g-icon" href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <div class="container">
        <span>Copyright &copy</span>
        <p>Say hello:<a href="mailto:example@example.us"/> example@example.us</p>
      </div>
    </div>
  </div>
</body>


 </div>


  )
}

export default Middle