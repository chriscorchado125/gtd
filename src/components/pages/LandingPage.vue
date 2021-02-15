<template>
  <main class="container" id="content" role="main">

    <div class="hero-image center-text">

      <h1 class="bold">Hello, we&rsquo;re gtd.</h1>

      <img src="./../../assets/images/homepage/hero/img_hero-min.jpg"
        alt="Image of woman walking to the right"
      />
    </div>

    <div class="employee-images">
      <img src="./../../assets/images/people/employee/img_lisa-min.jpg"
        alt="Image of Lisa taking a picture"
      />

      <img src="./../../assets/images/people/employee/img_danielle-min.jpg"
        alt="Image of Danielle smiling"
      />

      <img src="./../../assets/images/people/employee/img_brian-min.jpg"
        alt="Image of Brian raising an eyebrow"
      />
    </div>

    <h2 class="bold center-text body-title">How it started</h2>

    <p class="main-text center-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
      in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="employee-images-info">

      <div class="employee-image center-text">
        <img src="./../../assets/images/people/employee/img_lisa-min.jpg"
          alt="Smaller image of Lisa taking a picture" />
      </div>
      <div>
        <p class="employee-name bold">Lisa</p>
        <p><a href="mailto:lisa@gtd.co?subject=How it Started">lisa@gtd.co</a></p>
      </div>

      <div class="employee-image center-text">
        <img src="./../../assets/images/people/employee/img_danielle-min.jpg"
          alt="Image of Danielle smiling" />
      </div>
      <div>
        <p class="employee-name bold">Danielle</p>
        <p><a href="mailto:danielle@gtd.co?subject=How it Started">danielle@gtd.co</a></p>
        <p><a href="tel:1234567890">(123)&nbsp;456-7890</a></p>
      </div>

    </div>

  </main>
</template>

<style scoped lang="scss">
  .hero-image {
    position: relative;
    z-index: -1;

    h1 {
      font-size: clamp(1.45rem, -1rem + 8.9vw, 4.8rem);
      color: $grey;
      position: absolute;
      top: clamp(44%, -1rem + -2vw, 54%);
      left: 48%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    img {
      margin-top: 35px;
      width: 100%
    }
  }

  // 3 images intersecting with the header
  .employee-images {
    width: 61%;
    display: grid;
    margin: clamp(-5.55rem, -1rem + -2.9vw, 4.8rem) auto 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 100;

    img {
      width: 70%;
      border-radius: 50%;
    }
  }

  // content title
  h2 {
    font-size: clamp(1.1rem, -.1rem + 4.9vw, 2.8rem);
    font-weight: bold;
    color: $yellow;
    margin:
      clamp(1.1rem, -.1rem + 4.9vw, 2.4rem) 0
      clamp(1.1rem, -.1rem + 4.9vw, 3.2rem) 0;
    width: 100%;
  }

  .main-text {
    font-size: 13px;
    line-height: 18px;
    max-width: 545px;
    margin: auto;
    padding: 0 15px;
    color: $grey;
  }

  // 2 images under main text
  .employee-images-info {
    display: grid;
    grid-gap: 0;
    grid-template-columns:
      clamp(3.5rem, 0.875rem + 6.333vw, 5.5rem)
      clamp(6rem, -0.875rem + 8.333vw, .5rem)
      clamp(3.5rem, 0.875rem + 6.333vw, 5.5rem)
      clamp(6rem, -0.875rem + 8.333vw, .5rem);

    margin:
      clamp(2.5rem, 0.875rem + 6.333vw, 3.5rem) auto
      clamp(4.5rem, 0.875rem + 6.333vw, 6rem) auto;

    justify-content: center;
    align-items: center;
    color: $grey;

    p {
      font-size: 12px;
      line-height: 15px;
      margin: 2px 0 0 10px;
      width: 100%;
    }

    .employee-name {
      color:$yellow
    }

    img {
      width: 80%;
      border-radius: 50%;
    }

    a {
      color: $grey;
    }
  }

  @media only screen and (min-width: 600px) {

    .hero-image {
      h1 {
        top: clamp(39%, -1rem + -2vw, 54%);
      }
    }

    .employee-images {
      margin: clamp(-5.55rem, -1rem + -2.2vw, 4.8rem) auto 0 auto;

      img {
        margin: -15% auto 10% auto;
      }
    }

    .main-text {
      font-size: 14px;
    }

      // 2 images under main text
    .employee-images-info {
      grid-template-columns:
        clamp(3.5rem, 0.875rem + 6.333vw, 5.5rem)
        clamp(7.5rem, -0.875rem + 8.333vw, .5rem)
        clamp(3.5rem, 0.875rem + 6.333vw, 5.5rem)
        clamp(6rem, -0.875rem + 8.333vw, .5rem);
    }
  }
</style>
