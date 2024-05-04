import './RatingWithComment.css'
import '../index.css'


function RatingWithComment({ name, image, job, reviewsNumber, score }) {
  return (
    <div className='flex mt-9 justify-center'>
      <div className="wrapper mx-4">
        <div className="img-area">
          <div className="inner-area">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="icon arrow"><i className="fas fa-arrow-left"></i></div>
        <div className="icon dots"><i className="fas fa-ellipsis-v"></i></div>
        <div className="name cardName">{name}</div>
        <div className="about cardAbout">{job}</div>
        <div className="flex items-center">
          <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-2 text-sm font-bold text-customGreen dark:text-white">{score}</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a href="#" className="text-sm font-medium text-customBlue underline hover:no-underline  my-4">{reviewsNumber} recensioni</a>
        </div>
        <div className="buttons">
          <button>Contatta</button>
        </div>
      </div>
    </div>
  )
}

export default RatingWithComment