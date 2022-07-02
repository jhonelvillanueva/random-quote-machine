import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';

const Card = () => {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');
	const [color, setColor] = useState('');

	// Using 'https://api.quotable.io/random' to make api call for a random quote.
	const getQuotes = async () => {
		const colors = [
			'#316B83',
			'#6D8299',
			'#354259',
			'#85586F',
			'#1572A1',
			'#316B83',
			'#11324D',
			'#3A6351',
			'#046582',
			'#763857',
			'#6155A6',
			'#056676',
			'#30475E',
			'#5D5B6A',
			'#305F72',
		];

		const result = await axios.get('https://api.quotable.io/random');
		setQuote(result.data.content);
		setAuthor(`— ${result.data.author}`);
		setColor(colors[Math.floor(Math.random() * (colors.length - 1))]);
	};

	useEffect(() => {
		getQuotes();
	}, []);

	return (
		<div
			className='card-container'
			style={{ backgroundColor: color, transition: 'linear 0.5s' }}>
			<div className='card'>
				<blockquote className='quote-container' style={{ color: color }}>
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
					<button
						className='btn'
						onClick={getQuotes}
						style={{ backgroundColor: color }}>
						New Quote
					</button>
				</footer>
			</div>
			<p className='coder'>by: jon</p>
		</div>
	);
};

export default Card;
