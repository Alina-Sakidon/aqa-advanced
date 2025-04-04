const averageGrade = 71;

if (averageGrade < 60) {
	console.log('Unsatisfactorily');
} else if (averageGrade >= 60 && averageGrade <= 70) {
	console.log('Satisfactorily');
} else if (averageGrade >= 71 && averageGrade <= 80) {
	console.log('Good');
} else if (averageGrade >= 81 && averageGrade <= 90) {
	console.log('Very good');
} else if (averageGrade >= 91 && averageGrade <= 100) {
	console.log('Excellent');
} else {
	console.log(
		'For an objective result, the avarage grade should be rounded to the nearest whole number between 0 and 100.',
	);
}
