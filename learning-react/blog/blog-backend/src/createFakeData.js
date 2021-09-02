import Post from "./models/post";

export default function createFakeData() {
	const posts = [...Array(40).keys()].map(i => ({
		title: `포스트 #${i}`,
		body:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dui justo, dapibus porta ultrices at, egestas sed diam. Vivamus dapibus diam at mauris euismod, nec molestie nunc fermentum. Maecenas ut urna consectetur, lobortis est eu, gravida dolor. Proin sed lectus massa. Praesent sed quam sed libero laoreet volutpat tincidunt efficitur sem. Phasellus id egestas massa, a facilisis lectus. Integer nec aliquet ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi posuere sapien ut odio molestie accumsan sed id est.',
		tag: ['가짜', '데이터']
	}));
	Post.insertMany(posts, (err, docs) => {
		console.log(docs);
	});
}
