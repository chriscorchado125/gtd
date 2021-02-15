<template>
  <footer id="site-footer">
    <div class="col-wrapper">

      <div class="cols">
        <span class="title">Team</span>
        <span><a href="">Lisa</a></span>
        <span><a href="">Danielle</a></span>
        <span><a href="">Brian</a></span>
        <span class="join-us"><a href="">Join us!</a></span>
      </div>

      <div class="cols">
        <span class="title">Learn More</span>
        <span><a href="">Manifesto</a></span>
        <span><a href="">Works</a></span>
        <span><a href="">Stories</a></span>
      </div>

      <div class="cols">
        <span class="title">Meet Us</span>
        <span><a href="">Studio</a></span>
        <span><a href="">Community</a></span>
        <span><a href="">Workshops</a></span>
      </div>

      <div class="cols">
        <span class="title">Contact</span>
        <span><a href="">Twitter</a></span>
        <span><a href="">Facebook</a></span>
        <span><a href="">Instagram</a></span>
      </div>

    </div>
  </footer>
</template>

<style scoped lang="scss">
  #site-footer {
    width: 100%;
    max-width: 1100px;
    padding: 15px 0 70px 0;
    background-color: $grey;
    border-top: 5px solid $yellow;

    /* Team, Learn More, Meet Us columns*/
    .col-wrapper {
      max-width: 600px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 10px;
      margin: auto;

      .cols {
        color: #fff;
        //margin-left: 10px; // set text align to left to use
        text-align: center;

        .title {
          font-size: 12px;
          color: $yellow;
          font-weight: bold;
          margin: 10px 0 13px 0;
        }

        span {
          display: block;
          font-size: 12px;
          line-height: 16px;

          a {
            color: #fff;
          }
        }

        .join-us {
          margin-top: 10px;
        }
      }
    }
  }

  @media only screen and (min-width: 500px) {

    #site-footer {
      .cols {
        color: #fff;
        text-align: center;
        padding-left: 30px;

        .title {
          font-size: 14px;
        }

        span {
          text-align: left;
        }
      }
    }
  }

  @media only screen and (min-width: 900px) {
    #site-footer {
      padding: 15px 0 50px 0;

      .col-wrapper {
        max-width: 650px;

        .cols {
          padding-left: 50px;

          .title {
            font-size: 15px;
          }
        }
      }
    }
  }
</style>
