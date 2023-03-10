const thankCard = document.querySelector(".main__card-thank");
const ratingCard = document.querySelector(".main__card-rating");
const submit = document.querySelector(".main__card-submit");
const buttons = document.querySelectorAll(".main__card-review-button");
const span = document.querySelector(".main__card-info-rated");

const handleSubmitButtonClick = () => {
    const selectedRating = parseInt(span.textContent);
    if (isNaN(selectedRating)) {
        alert('Please select a rating before submitting.');
    } else {
        thankCard.classList.add("main__card-thank--active");
        ratingCard.classList.add("main__card-rating--not-active");
    }
}

const handleReviewButtonClick = e => {
    span.textContent = parseInt(e.currentTarget.textContent);
}

submit.addEventListener('click', handleSubmitButtonClick);
buttons.forEach(button => button.addEventListener('click', handleReviewButtonClick));