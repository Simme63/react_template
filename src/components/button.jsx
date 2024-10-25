import React from "react";

const Button = () => {
	return (
		<div className="w-full h-screen flex justify-center flex-col items-center">
			<button className="bg-primary px-2 py-4 rounded border-4 border-pink-500 text-white hover:bg-blue-700">
				Banber button
			</button>
			<h2 className="font-headings">I LOVE...</h2>
			<p className="font-paragraphs">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Doloremque fuga commodi sint assumenda molestias sapiente natus
				dolores sunt culpa pariatur, magni corrupti, aliquam, cupiditate
				dicta minima soluta dolor ab inventore expedita nostrum eius
				repellendus? Pariatur perspiciatis ipsa sit qui quasi, quo fuga
				dicta itaque quaerat ad! Veritatis dolores delectus harum.
			</p>
			<p className="font-othertext">melker melker melker melker</p>
		</div>
	);
};

export default Button;
