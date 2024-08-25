
import React, {Component} from 'react'
import {navbar_items} from '../navbar/Data'
import {Link} from 'react-router-dom'
import './Footer.css'
import {accounts} from './Data'


class Footer extends Component
{
	display_navbar_items = _ =>
	{
		let items = navbar_items.map(item =>
		{
			return (
				<Link className="implink d-block mb-1 text-muted text-capitalize" to = {`/${item.name === '' ? '': item.name}`} key = {Math.random()}>{item.name === "" ? "home": item.name}</Link>
			)
		})
		return items
	}

	display_accounts = _ =>
	{
		let items = accounts.map((item, index) =>
		{
			return (
				<div className = {`a account-${index} mx-2 px-2 py-1 rounded-circle shadow-lg`}  key = {Math.random()}>
					<a className = 'text-center' href = {item.link} target = '_blank' rel="noreferrer"><i className = {item.icon}></i></a>
				</div>
			)
		})
		return items
	}

	display_page_elements = _ =>
	{
		const elements = ["", "materials", "stats", "testimonials", 'faq']

		let items = elements.map((item, index) =>
		{
			return (
				<a className = 'implink d-block mb-1 text-muted text-capitalize' href = {`#${item}`} key = {index}>{item === "" ? "Hero": item}</a>
			)
		})
		return items
	}

	render()
	{
		return (
			<div className = 'footer py-3 pb-4'>
				<div className = 'container'>
					<div className = 'footer-top py-3 mb-4 d-flex justify-content-center'>
						{this.display_accounts()}
					</div>
					<div className = 'row mb-4'>
						<div className='c col-lg-4 col-md-6 col-12'>
							<div className='s mb-3 mb-md-0'>
								<h6 className='footer-title mb-3'>Amar Foundation Classes</h6>
								<p className='footer-text'>
								Providing exceptional education and support for students in classes 9 to 12, we focus on academic excellence and personal growth across ICSE, CBSE, and ISC boards.
								</p>
								<div className='d-flex flex-column'>
								<h6 className='footer-e-mail text-muted mb-2'>
									<a href="mailto:ashutp10@gmail.com" className='text-decoration-none text-muted'>
									<i className='fas fa-envelope me-2'></i>ashutp10@gmail.com
									</a>
								</h6>
								<h6 className='footer-e-mail text-muted'>
									<a href="tel:+917007258318" className='text-decoration-none text-muted'>
									<i className='fas fa-phone me-2'></i>+91 7007258318
									</a>
								</h6>
								</div>
							</div>
						</div>
						<div className = 'c col-lg-4 col-md-3 col-12'>
							<div className = 's mb-3 mb-md-0 text-md-center text-sm-start'>
								<h6 className = 'link text-capitalize mb-3'>quick links</h6>
								<div className = 'links'>
									{this.display_navbar_items()}
								</div>
							</div>
						</div>
						<div className = 'c col-lg-4 col-md-3 col-12'>
							<div className = 's mb-3 mb-md-0 text-md-center text-sm-start'>
								<h6 className = 'link text-capitalize mb-3'>useful links</h6>
								<div className = 'links'>
									{this.display_page_elements()}
								</div>
							</div>
						</div>
					</div>
					<div className = 'copyrights text-center'>
						<p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link to = "/">Amar Foundation Classes</Link></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer