import React, {Component} from 'react';
import './Hero.css';
import {Link} from 'react-router-dom';
import about from '../../../images/sections/about.svg';

class Hero extends Component {
	render() {
		return (
			<div className='hero py-2 mb-5'>
				<div className='container'>
					<div className='title pt-1 pb-5 text-center'>
						<h4 className='sub-title text-capitalize'>about <span>us</span></h4>
					</div>
					<div className='row align-items-center'>
						<div className='c col-lg-6 col-12'>
							<div className='left-side mb-lg-0 mb-5 text-lg-start text-center'>
								<h5 className='title text-capitalize mb-3'>we are <span>Amar Foundation Classes</span></h5>
								<p className='desc mb-lg-4 mb-5'>
									Amar Foundation Classes is dedicated to delivering quality education for students in classes 9 to 12, across ICSE, CBSE, and ISC boards. Our mission is to foster young minds with personalized attention and modern teaching methods, creating an environment where students excel both academically and personally.
									<br /><br />
									अमर फाउंडेशन क्लासेस कक्षा 9 से 12 तक के छात्रों के लिए ICSE, CBSE, और ISC बोर्डों के तहत गुणवत्तापूर्ण शिक्षा प्रदान करने के प्रति समर्पित है। हमारा मिशन है कि हम व्यक्तिगत ध्यान और आधुनिक शिक्षण विधियों के साथ युवा मनों को विकसित करें, ताकि छात्र शैक्षिक और व्यक्तिगत रूप से उत्कृष्टता प्राप्त कर सकें।
								</p>

								{/* Add the features and additional information here */}
								<div className='additional-info'>
									<h6>Features:</h6>
									<ul>
										<li>Regular tests</li>
										<li>Modern teaching methods</li>
										<li>Individual attention</li>
										<li>Individual teachers</li>
										<li>Online and offline classes available</li>
									</ul>

									{/* Hindi version */}
									<h6>विशेषताएँ:</h6>
									<ul>
										<li>नियमित परीक्षा</li>
										<li>आधुनिक शिक्षण विधि</li>
										<li>व्यक्तिगत ध्यान</li>
										<li>व्यक्तिगत शिक्षक</li>
										<li>ऑनलाइन और ऑफलाइन कक्षाएँ उपलब्ध</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='c col-lg-6 col-12'>
							<div className='right-side text-lg-end text-center'>
								<img className='w-75 img-fluid mb-5' src={about} alt='about' />
								<div className='mx-auto dc text-center'>
									<Link className='cources text-capitalize' to='/courses'>
										discover our courses <i className='fas fa-arrow-right ms-2'></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
