import React from 'react';

const data = {
	velopert: {
		name: '이거니',
		description: '가즈아ㅏㅏㅏ'
	},
	kunlee: {
		name: 'kunlee',
		description: '42seoul'
	}
};

const Profile = ({ match }) => {
	const { username } = match.params;
	const profile = data[username];

	if (!profile){
		return <div>no user</div>
	}

	return (
		<div>
			<h3>
				{username}({profile.name})
			</h3>
			<p>{profile.description}</p>
		</div>
	)
}

export default Profile;
