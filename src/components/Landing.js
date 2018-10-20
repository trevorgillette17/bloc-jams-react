import React from 'react';
import './Landing.css';

const Landing = () => (
	<section className="landing" >
	<h1 className="hero-title">Turn the music up!</h1>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Spinal_Tap_-_Up_to_Eleven.jpg/330px-Spinal_Tap_-_Up_to_Eleven.jpg" alt="Music dials turned all the way up"/>

<section className="selling-points">
	<h2 className="point-title">Choose your music!</h2>
    <img src="http://cdn2-www.musicfeeds.com.au/assets/uploads/d39daf498d5887ec89c70c85cb5317c02.jpg" width="300" height="200" alt="Ozzy Osbourne"/>
    <img src="https://pmcdeadline2.files.wordpress.com/2014/06/the-beatles-1__140613232022.jpg" width="300" height="200" alt="The Beatles"/>
    <img src="https://images-na.ssl-images-amazon.com/images/I/81cP1M78phL._SY355_.jpg" width="300" height="200" alt="Tom Petty"/>
    <img src="http://cdn.playbuzz.com/cdn/9c81429e-2ca1-4f32-8921-fe0934bbab5f/458641f0-4974-448c-8902-920d21e1f949.jpg" width="300" height="200" alt="Queen"/>
	<p className="point-description">The world is full of music; why should you have to listen to music someone else chose?</p>
	<div className="point">
	<h2 className="point-title">Unlimited, streaming, ad-free</h2>
	<p className="point-description">No arbitrary limits. No distractions.</p>
    <img src="https://comps.canstockphoto.com/unlimited-vector-stamp-vector-clipart_csp22969409.jpg" width="200" height="200" alt="Unlimited"/>
    <img src="https://image.flaticon.com/icons/png/512/518/518486.png" width="200" height="200" alt="No Ads" />
    <img src="https://8tracks.com/images/plus/IlloA.png" width="200" height ="200" alt="girl listening to music" />
	</div>
	<div className="point">
	<h2 className="point-title">Mobile enabled</h2>
	<p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
    <img src="https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/lg/lg-q7-plus/moroccan-blue/LG-Q7_Plus-Moroccan_Blue-1-3x.jpg" width="120" height="200" alt="Generic Cell Phone"/>
    <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg" width="200" height="200" alt="iPhone"/>
    <img src="https://www.apple.com/support/products/images/ipad_hero.jpg" width="200" height="200" alt="iPad"/>
	</div>
	</section>
	</section>
);

export default Landing;
