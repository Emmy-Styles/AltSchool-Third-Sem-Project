<template>
    <section class="about">
      <div class="roww">
        <div className="columnn">
            <img src="../../assets/logo.png" alt="user" />
          </div>
        <div class="columnn">
          <div class="about-info">
            <div class="main-title">
              <h2>About GitXplore</h2>
            </div>
            <h3>
              GitXplore is a react web application that lets you explore your
              Github portfolio in a stylish and user-friendly way.
            </h3>
            <p>
              Simply enter your Github username on the home page and GitXplore
              will retrieve your data from the Github API.
            </p>
            <p>
              Your repositories will be displayed with eye-catching colors and
              designs, making it easy to navigate and find what you're looking
              for. By clicking on each repository, you'll be able to see
              specific information, including details about the
              repository and its contents. If you don't have a Github username,
              you can try the app out using the test case "Emmy-Styles".
            </p>
            <div class="personal-info">
              <div class="btn">
                <a
                  href="https://github.com/Emmy-Styles/AltSchool-Exam-Project"
                  class="banner-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  };
  </script>
  
  <style scoped>
    .about {
    padding-top: 4rem;
    padding-bottom: 4rem;
    height: 100%;
  }
  
  .roww {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .columnn {
    width: 40%;
  }
  
  
  .columnn img {
    background: lightseagreen;
    border-radius: 5px;
    width: 23rem;
    height: 30rem;
  }
  
  
  .main-title h2 {
    color: lightseagreen;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 27px;
    line-height: 1;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    letter-spacing: 1px;
    margin-bottom: 25px;
  }
  
  
  .about-info h3{
    position: relative;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    line-height: 1.62;
    margin-bottom: 30px;
    padding-bottom: 15px;
  }
  
  .about-info h3::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: 3px;
    width: 82px;
    background-color: lightseagreen;
  }
  
  .about-info p:first-of-type {
    margin-bottom: 10px;
  }
  
  .about-info p {
    line-height: 1.8;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 30px;
  }
  
  .personal-info {
    position: relative;
  }
  
  .banner-btn {
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    margin-right: 10px;
    transition: all 0.5s;
    color: white;
    background-color: lightseagreen;
    border: 2px solid lightseagreen;
  }
  
  .banner-btn:hover {
    color: lightseagreen;
    background: #fff;
  }
  
  
  @media screen and (max-width: 1050px) {
    .roww {
      display: flex;
      flex-direction: column;
    }
    .about-info {
      padding-top: 2rem;
    }
    .columnn {
      width: 90%;
    }
    .columnn img {
      width: 100%;
    }
  }
</style>
  