import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-nav">
      
      </div>
      <div className='hero'>
        <div className='left'>
          <p>Solution &#x276F; CommerceKit</p>
          <h1>Build Web3 Commerce apps easily</h1>
          <h3>With thirdweb you can now add powerful web3 features to <br /> your Shopify storefront enabling tokengated commerce,<br /> NFT loyalty programs, digital collectible sales, and more.</h3>
          <div className='hero-left-btn'>
            <button className='btn'>
             <span style={{color:"orange"}}> &#x2726; </span>Get started</button>
             
            <button className='btn btn2'>Get In Touch</button>
          </div>
          <p> <i> In partnership with </i> <span> <img src='shopify.png' width={100} height={20} /> </span> </p>
        </div>
        <div className='right'>

        <img srcSet='' src='hero.png' width={350} height={400} />
       
        </div>
        </div>
        <div className='section1'>
        <div className='card'>
          <img src='hero-icon-1.png' width={40} height={40} />
          <h2>Recognize loyal customers with NFTs </h2>
          <p>Distribute NFTs to your most loyal customers and create new customer segments for future campaigns.</p>
        </div>
        <div className='card'>
        <img src='hero-icon-3.png' width={40} height={40} />
          <h2>Reward customers with exclusive access</h2>
          <p>Reward your customers and collab with other brands by tokengating your storefront. Give token holders exclusive access to products, discounts, and more when they connect their wallet to your store.</p>
        </div>
        <div className='card'>
        <img src='hero-icon-2.png' width={40} height={40} />
          <h2>Grow your revenue with NFT sales</h2>
          <p>Create additional revenue streams with NFT sales. Sell NFTs directly through your storefront as a new product category or bundle with a physical product.</p>
        </div>
        </div>
        <hr />
        <div className='section2'>
          <img srcSet='' src='reimagine.png' />
          <h2>Reimagine customer experiences with web3 technologies</h2>
        </div>
        <hr />
        <div className='section3'>
        <div className='card'>
          <img src='build.png' width={40} height={40} />
          <h2>Build </h2>
          <p>Prebuilt contracts or build your own with the Solidity SDK to distribute NFTs through your commerce app.</p>
          <a referrerPolicy='no referrer' target='_blank' href='https://thirdweb.com/explore/commerce'>Learn More &#x2197;</a>
        </div>
        <div className='card'>
        <img src='launch.png' width={40} height={40} />
          <h2>Launch</h2>
          <p>Powerful SDKs enables you to build commerce apps that connects to users' wallets. Easily bootstrap projects with a single command.</p>
          <a referrerPolicy='no referrer' target='_blank' href='https://portal.thirdweb.com/sdk'>Learn More &#x2197;</a>
        </div>
        <div className='card'>
        <img src='manage.png' width={40} height={40} />
          <h2>Manage</h2>
          <p>View and interact with your Shopify store smart contracts directly from a user interface, e.g. view all the NFTs that have been minted to your most loyal customers.</p>
          <a referrerPolicy='no referrer' target='_blank' href='https://portal.thirdweb.com/dashboard'>Learn More &#x2197;</a>
        </div>
        </div>
        <hr />
        <h1 className='section4-title'>Build web3 commerce apps with CommerceKit across multiple use cases</h1>
        <div className='section4'>
        <div className='card'>
          <img src='drum.png' width={40} height={40} />
          <h2>Launch customer loyalty reward programs</h2>
          <p>Distribute membership passes with contracts from Explore or using Solidity SDK. Reward your customers at different stages of their journey, from initial free “drops” to claiming rewards at checkout. </p>
        </div>
        <div className='card'>
        <img src='mask.png' width={40} height={40} />
          <h2>Sell digital collectibles</h2>
        <p>{"Merchants can sell digital collectibles direct from e-commerce store and collect royalties from secondary sales. (e.g. One-of-One’s, Open Editions, Trading packs)"}</p>
        </div>
        <div className='card'>
        <img src='lock.png' width={40} height={40} />
          <h2>Unlock both virtual and real world experiences</h2>
          <p>Sell digital tickets with exclusive access to online and offline events. Enable customers to redeem virtual items for real world items.</p>
        </div>
        <div className='card'>
        <img src='drum-roll.png' width={40} height={40} />
          <h2>Add web3 data to your customer funnel</h2>
          <p>Authenticate web3 users using Auth. Merge data into existing CRM data stores. Get metrics and analytics around transactions and owners of digital assets and collections.</p>
        </div>
        </div>
        <hr />
        <div className='section5-title'>
          <h1>Start building web3 apps on Shopify</h1>
          <p>Check out our comprehensive guides to get you started building on Shopify with thirdweb</p>
        </div>
        <div className='section5'>
          <div className='card'>
          {/* <div> */}
            <img src='shopify-theme.png' srcSet='' />
            {/* </div> */}
            <h2>Create a Shopify theme with thirdweb</h2>
          </div>
          <div className='card'>
          {/* <div> */}
            <img src='token-gated.png' srcSet='' />
            {/* </div> */}
            <h2>How to Create a Token Gated Website on Shopify using thirdweb</h2>
          </div>
          <div className='card'>
            {/* <div> */}
            <img src='sell-nfts.png' srcSet='' />
            {/* </div> */}
            <h2>Distribute NFTs on Shopify Store</h2>
          </div>
        </div>

       <div className='section5-link'>
        <a target='_blank' referrerPolicy='no refferrer' href='#'>See all of our Shopify guides &#x2794;</a> 
       </div>
        <hr />
        <div className='testimony'>
          <h4>"On platforms like Shopify, thirdweb has made building web3 e-commerce features and apps extremely simple and quick. We can now worry less about the development nuances of web3 and focus more on what merchants/users want and find valuable."</h4>
          <h3>-Zain, <a target='_blank' referrerPolicy='no refferrer' href='https://www.lazertechnologies.com/blog/how-to-create-a-token-gated-experience-on-shopify-using-thirdweb'>Lazer Technologies.</a></h3>
        </div>
        <hr />
        <div className='ending'>
          <div className='get-started'>
            <img src='white-logo.png' srcSet=''  width={80} height={80} />
            <h1>Get started with thirdweb</h1>
            <p>Build web3 with ease. Get instant access.</p>
            <div className='border'>
            <a referrerPolicy='no refferrer' href='https://thirdweb.com/dashboard'><span style={{color:"#50045d"}}> &#x2726; </span>Start building for free</a>
            </div>
          </div>
          <div className='newsletter'>
            <div className='join'>
              <span>&#x2709;</span>
              <div>
              <h3>Sign up for our newsletter</h3>
              <h5>Join 70,000+ builders and stay up to date with our latest updates and news</h5>
              </div>
            </div>
            <div className='email'>
            <input type='text' placeholder='Enter your email' />
            <button type='submit'>Sign up</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
