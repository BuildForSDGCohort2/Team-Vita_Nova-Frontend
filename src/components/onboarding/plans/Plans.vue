<template>
  <v-responsive>
    <v-container style="max-width: 1100px" grid-list-xl>
      <div :style="{'font-family': 'IBM Plex Sans'}">
        <v-row>
          <v-col cols="12" md="12" >
            <h1 class="selectPlan mt-7">Select A Plan</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <div>
              <p
                class="selectPlanSubtitle ma-3"
              >Import your demos or build pages visual layer. All images and illustrations included! Import your demos or build</p>
            </div>
          </v-col>
        </v-row>
        <v-row :style="{'justify-content': 'center'}" >
          <v-col cols="12" md="4" sm="6" v-for="(card) in cardData">
            <template>
              <v-hover v-slot:default="{ hover }">
                <v-card
                    elevation="2"
                    raised
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    style="background-size: cover"
                    height="600"
                    :loading=loading
                    class="card-style mx-auto my-10 pa-2 ml-0 align-self-stretch text-wrap"
                >
                  <template>
                    <v-card
                        class="subCard pa-2 align-self-auto text-wrap"
                        flat
                        height="160"
                    >
                      <v-card-text>
                        <div class="card-type mt-n4">{{ card.cardTitle }}</div>
                        <div class="plan" :style="{'color': card.color}">{{ card.title }}</div>
                        <div class="card-type-1 mb-n4">{{ card.subtitle }}</div>
                      </v-card-text>
                    </v-card>
                  </template>

                  <v-container fluid pa-2>
                    <v-card-text>
                      <div class="card-text my-4">
                        {{ card.cardContent }}
                      </div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="card-text my-4">
                        {{ card.cardContent }}
                      </div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="card-text my-4">
                        {{ card.cardContent }}
                      </div>
                    </v-card-text>
                  </v-container>
                  <v-card-actions :style="{'justify-content': 'center'}">
                    <v-btn
                        class="btn mt-n1"
                        large
                        :style="{'font-size': '14px', 'height': '43px', 'background': card.color, 'color': '#FFF', 'font-weight': 'bold'}"
                        @click="onButtonClick(card.cardTitle)"
                    >
                      <v-icon color="#fff">mdi-plus</v-icon>{{ card.buttonText }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </template>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <h1 class="benefits mt-7">Benefits</h1>
          </v-col>
          <v-divider class="mx-4 ma-5"></v-divider>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="ml-5 mr-3">
              <v-col cols="12" md="10">
                <h1 class="benefits-content">Highly Rich Content</h1>
              </v-col>
              <v-col cols="12" md="2">
                <v-img
                  class="mr-2"
                  src="~@/assets/highly-rich-content.svg"
                  alt=""
                  max-width="64"
                  max-height="64"
                />
              </v-col>
            </v-row>
            <v-row class="ml-3 mr-3 mt-n3">
              <v-col cols="12" md="12">
                <p
                  class="benefits-content-p ml-2 mr-2"
                >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-row class="ml-5 mr-3">
              <v-col cols="12" md="10">
                <h1 class="benefits-content">Access to Business Partnerships</h1>
              </v-col>
              <v-col cols="12" md="2">
                <v-img
                  class="mr-2"
                  src="~@/assets/access-to-business-partnerships.svg"
                  alt=""
                  max-width="64"
                  max-height="64"
                />
              </v-col>
            </v-row>
            <v-row class="ml-3 mr-3 mt-n3">
              <v-col cols="12" md="12">
                <p
                  class="benefits-content-p ml-2 mr-2"
                >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </v-col>
            </v-row>
          </v-col>
          <v-divider class="mx-4 ma-3"></v-divider>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-row class="ml-5 mr-3">
              <v-col cols="12" md="10">
                <h1 class="benefits-content">Mentorship & Consultancy</h1>
              </v-col>
              <v-col cols="12" md="2">
                <v-img
                  class="mr-2"
                  src="~@/assets/mentorship-and-consultancy.svg"
                  alt=""
                  max-width="64"
                  max-height="64"
                />
              </v-col>
            </v-row>
            <v-row class="ml-3 mr-3 mt-n3">
              <v-col cols="12" md="12">
                <p
                  class="benefits-content-p ml-2 mr-2"
                >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-row class="ml-5 mr-3">
              <v-col cols="12" md="10">
                <h1 class="benefits-content">Scale your team & Business</h1>
              </v-col>
              <v-col cols="12" md="2">
                <v-img
                  class="mr-2"
                  src="~@/assets/scale-your-team-and-business.svg"
                  alt=""
                  max-width="64"
                  max-height="64"
                />
              </v-col>
            </v-row>
            <v-row class="ml-3 mr-3 mt-n3">
              <v-col cols="12" md="12">
                <p
                  class="benefits-content-p ml-2 mr-2"
                >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <Footer />
  </v-responsive>
</template>

<script>
import Footer from "@/components/onboarding/layout/Footer";
export default {
  name: "Plans",
  data() {
    return {
      loading: false,
      selection: 1,
      cardData: [
        {
          cardTitle: 'Startups',
          title: 'N80,000',
          subtitle: 'Monthly',
          cardContent: 'This is  the benefit  you would get in the startup plan if you registered and subscribe',
          buttonText: 'Request a Demo',
          color: '#FF2E2E',
        },
        {
          cardTitle: 'Custom',
          title: 'Custom',
          subtitle: '',
          cardContent: 'This is  the benefit  you would get in the startup plan if you registered and subscribe',
          buttonText: 'Get Started',
          color: '#FFB403',
        },
        {
          cardTitle: 'Enterprise',
          title: 'N800,000',
          subtitle: 'Monthly',
          cardContent: 'This is  the benefit  you would get in the startup plan if you registered and subscribe',
          buttonText: 'Request a Demo',
          color: '#1C8AEC',
        },
      ]
    }
  },
  methods: {
    onButtonClick(cardTitle) {
      this.loading = true

      if (cardTitle === this.cardData[2].cardTitle) {
        setTimeout(() => (this.loading = false), 2000)
        console.log(this.cardData[2].cardTitle)
      } else if (cardTitle === this.cardData[1].cardTitle) {
        setTimeout(() => (this.loading = false), 2000)
        console.log(this.cardData[1].cardTitle)
      }else {
        setTimeout(() => (this.loading = false), 2000)
        console.log(this.cardData[0].cardTitle)
      }
    },
  },
  components: {
    Footer
  },
  computed: {}
};
</script>

<style scoped>
.selectPlan {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;

  color: #2b1c1c;
}
.selectPlanSubtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #455880;
}
.btn {
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  position: static;
  width: 180px;
  height: 63px;
  left: 0;
  top: 0;
  /* Inside Auto Layout */
  flex: none;
  order: 1;
  align-self: center;
  margin: 24px 0;
}
.subCard {
  background: #f8f8f8;
  border-radius: 10px 10px 0 0;
}
.card-type {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.5);
}
.plan {
  font-style: normal;
  font-weight: bolder;
  font-size: 44px;
  line-height: 42px;
  /* identical to box height, or 97% */
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;

  color: #ff2e2e;
}
.card-type-1 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 62px;
  /* identical to box height, or 258% */
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;

  color: rgba(0, 0, 0, 0.5);
}
.card-text  {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #455880;
}

.card-style {
  background: #ffffff;
  border-radius: 10px;
}
.benefits {
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.5);
}
.benefits-content {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 42px;
  /* identical to box height, or 207% */
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #645262;
}
.benefits-content-p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #000000;
}
</style>