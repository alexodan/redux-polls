import React from 'react';

const LeaderCard = ({ name, img, polls, answers }) => {
	return (
		<li className="user">
			<img src={img} alt={name} />
			<div>
				<h2>{name}</h2>
				<p>{`${polls} Polls`}</p>
				<p>{`${answers} Answers`}</p>
			</div>
		</li>
	);
};

export default LeaderCard;
