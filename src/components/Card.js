import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';

const Card = () => {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	// Using 'https://api.quotable.io/random' to make api call for a random quote.
	const getQuotes = async () => {
		const result = await axios.get('https://api.quotable.io/random');
		setQuote(result.data.content);
		setAuthor(`— ${result.data.author}`);
	};

	useEffect(() => {
		getQuotes();
	}, []);

	return (
		<>
			<div className='card'>
				<blockquote className='quote-container'>
					<div className='quote'>
						<p>
							<FontAwesomeIcon icon={faQuoteLeft} className='icon' />
							{quote}
							<FontAwesomeIcon icon={faQuoteRight} className='icon' />
						</p>
					</div>
					<div className='author'>
						<p>{author}</p>
					</div>
				</blockquote>
				<footer className='footer'>
					<button className='btn' onClick={getQuotes}>
						New Quote
					</button>
				</footer>
			</div>
		</>
	);
};

export default Card;
