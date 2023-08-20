import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/2112629.jpg')",
        height: "90vh",
      }}
    >
      <div className="container py-5">
        <div class="accordion bg-dark" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Bits OF News-News Application.</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Get daily dose of news updates.</strong>This Application
                provides you the daily News updates of almost all formates
                including General, Sports, Business, Entertainment, Health and
                many more. You can sit with just your phone and enjoy the daily
                news with our application.
                Now-a-days we live in age of Information Communication and Technology. We can't think a single moment without technology. From morning to night, we need help of the technology. This is the revolutionary time of computer technology. Most of the works depends on web application. For this reason, anytime, anywhere, anyone can access a website by internet at low cost and we can find our expectable and most update information from website. At present, information is one the most valuable resource of the current world. We have developed our project so that we can make the people aware. The "Bits Of News” has been developed to override the problems prevailing in the practicing manual system. This application is supported to eliminate and in some cases reduce the hardships faced by the existing system. Moreover this application is designed for the particular need of the users to carry out operations in a smooth and effective manner. The application is reduced as much as possible to avoid errors while entering the data. No formal knowledge is needed for the user to use this application. Thus by this, all it proves it is user-friendly. Bits Of News , as described above, can lead to error free, secure, reliable and fast management application. It can assist the user to concentrate on their other activities rather than concentrating on the record keeping. Thus it will help the users in better utilization of resources.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Development.</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is API based News Application.</strong>This
                application is developed using a API which helps us to fetch the
                daily news and allow users to get the daily news at there finger
                tips.
                News API is a simple HTTP REST API for searching and retrieving live articles from all over the web.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Contact us.</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Email:</strong> contact@bitsofnews.com <br />
                <strong>Phone:</strong> 9876543210
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
