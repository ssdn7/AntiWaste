<template>
  <div class="bg-white">
    <div class="mx-auto pb-10">
      <v-img
        class="w-full h--[90px]"
        src="https://img.pikbest.com/backgrounds/20190619/simple-environmental-protection-garbage-classification-harmonious-society-green-background_1895979.jpg!sw800"
        alt="Organic Waste Convertor"
        >
        <div class="flex flex-col justify-left items-center pl-10 pt-20">
            <div class="text-4xl font-bold mb-3">Welcome to AntiWaste’s Store</div>
            <div class="text-h6">
              Please enjoy buying our product that recycle, also can sell your waste to our service provider
              and feel free to deliver to other provinces too.
            </div>
           <div class="pt-32"> <router-link to="/listing-product">
              <button class="mt-2  px-4 py-2 text-lg font-bold bg-green-600 border rounded-lg text-green-100 hover:bg-green-800 hover:text-white focus:outline-none">
                Shop Now
              </button>
            </router-link></div>
          </div>
      </v-img>
<!-- "https://www.ptecologicalservices.com/assets/images/products/organicwasteconvertor.gif" -->
      <div class="font-bold text-4xl text-center pt-10">Our Clients</div>

      <div class="slider pt-5 ">
        <p class="text-center">
          We have been working with some community who working on zero waste
        </p>
        <div class="slide-track flex pt-10 space-x-10">
          <div
            class="slide flex-shrink-0 mx-4"
            v-for="(client, index) in clients"
            :key="index"
          >
            <img :src="client.img" class="h-20 w-48 md:h-24 md:w-56 lg:h-34 lg:w-64" alt="Community Client" />
          </div>
        </div>
      </div>
    </div>

    <trash-center />
    <about-us />
    <trust-user />
    <how-to />
    <founder-web />
    <faq-ques />
    <let-chat />
  </div>
  
</template>

<script>

export default {
  data() {
    
    return {
      user: null,
      clients: [
        {
          id: 1,
          img: require('../../assets/Sticker_icon/Cintri-cambodia-logo.png'),
        },
        {
          id: 2,
          img: require('../../assets/Sticker_icon/800-super-Gaea-logo.png'),
        },
        {
          id: 3,
          img: require('../../assets/Sticker_icon/mizuda-logo.jpg'),
        },
        {
          id: 4,
          img: require('../../assets/Sticker_icon/ClearCambodiaLogo.jpg'),
        },
        {
          id: 5,
          img: require('../../assets/Sticker_icon/ODC-New-logo.png'),
        },
        {
          id: 6,
          img: require('../../assets/Sticker_icon/waste-summit-cambodia-logo.png'),
        },
      ],
      communities: [
        {
          id: 1,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
        },
        {
          id: 2,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
        },
        {
          id: 3,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
        },
        {
          id: 4,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
        },
        {
          id: 5,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
        },
        {
          id: 6,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
        },
        {
          id: 7,
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.slider {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-right: 5px;
}

.slide-track {
  animation: scroll 30s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slide {
  height: 100px;
  width: 250px;
  margin: 0 1rem; /* Add space between slides */
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
</style>

<!-- Add Tailwind CSS to your project by including the following in your main.js or index.html -->
<!-- <script src="https://cdn.tailwindcss.com"></script> -->
