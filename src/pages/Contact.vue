<template>
  <Layout>
    <div class="contact__wrapper">
      <form
        class="go-bottom"
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" />
          </label>
        </p>
        <div class="sender-info">
          <div>
            <input id="name" required type="text" name="name" v-model="formData.name" />
            <label for="name">Name</label>
          </div>
          <div>
            <input id="email" required type="email" name="email" v-model="formData.email" />
            <label for="email">Email</label>
          </div>
        </div>

        <div class="sender-message">
          <textarea id="message" required name="message" v-model="formData.message"></textarea>
          <label for="message">Message</label>
        </div>

        <button type="submit" disabled>SUBMIT</button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  },
  metaInfo: {
    title: "Contact"
  }
};
</script>

<style lang="scss">
$green: rgba(27, 151, 85, 1);
$red: rgba(242, 38, 19, 1);

.contact {
  //   &__input-field {
  //     display: flex;
  //     flex-direction: column;
  //     margin: 1rem 0;
  //   }

  &__wrapper {
    height: 100%;
    width: 100%;
    display: flex;

    & button {
      height: 3rem;
      border-radius: 3px;
      width: 50%;
      margin-top: 1rem;
      background: #f06d06;
      color: white;
    }

    & form {
      width: 75%;
      float: left;
      margin: auto;

      > .sender-info div {
        position: relative;
        // overflow: hidden;
      }

      > .sender-message {
        position: relative;
        // overflow: hidden;
      }
      input,
      textarea {
        margin-top: 1rem;
        width: 100%;
        border: 2px solid gray;
        background: none;
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        padding: 8px 12px;
        outline: 0;
        border-radius: 3px;

        &:valid {
          // Hides the label
          background: white;
        }

        &:focus {
          border-color: #f06d06;
        }

        &:focus + label {
          background: #f06d06;
          color: white;
          font-size: 70%;
          padding: 1px 6px;
          z-index: 2;
          text-transform: uppercase;
        }
      }
      label {
        transition: // not padding background 0.2s, color 0.2s, top 0.2s, bottom 0.2s, right
            0.2s,
          left 0.2s;
        position: absolute;
        color: #999;
        padding: 7px 6px;
      }
      textarea {
        display: block;
        resize: vertical;
        height: 10rem;
      }
    }

    form.go-bottom {
      input,
      textarea {
        padding: 4px 4px 20px 6px;
      }
      label {
        top: 1rem;
        bottom: 0;
        left: 0;
        width: 100%;
      }

      .sender-message label {
        top: 0;
      }
      input:focus {
        padding: 4px 4px 20px 6px;
      }
      textarea:focus {
        padding: 4px 4px 20px 6px;
        // height: 10rem;
      }
      input:focus + label,
      textarea:focus + label {
        top: 100%;
        margin-top: -16px;
      }
    }

    // & form {
    //   margin: auto 0 auto 15rem;
    //   width: 50%;

    //   & input {
    //     height: 1.5rem;
    //     border: solid black 1px;
    //     border-radius: 3px;

    //     &:focus {
    //       outline: none;
    //       border: solid $red 1px;
    //     }
    //   }

    //   & label {
    //     font-size: 12px;
    //   }

    //   & textarea {
    //     height: 10rem;
    //     width: 100%;
    //     border-radius: 3px;

    //     &:focus {
    //       outline: none;
    //       border: solid $red 1px;

    //       label {
    //         font-size: 24px;
    //       }
    //     }
    //   }
    // }
  }

  //   @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  //     &__wrapper {
  //     //   & form {
  //     //     margin: auto;
  //     //     width: 75%;
  //     //   }
  //     }
  //   }
}
</style>
