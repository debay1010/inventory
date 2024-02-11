const generateInitials = (fullName) => {
	// Split the name into an array of words
	const words = fullName.split(" ");
	// const words = fullName.split(/\s+/);
	// get the first letter of each word and join them
	const initials = words.map((word) => word.charAt(0)).join(" ");

	// ensure the initials are in uppercase
	return initials.toUpperCase();
};

export default generateInitials;

// example usage
// fullname= "Adelowo Adio "
// const initials = generateInitials(fullName)
// console.log(initials)
