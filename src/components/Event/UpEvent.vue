<template>
  <div class="flex flex-col">
    <div>
      <div class="m-10 text-3xl font-bold">Upcoming Events</div>
      <div class="flex flex-wrap -mx-4">
        <div v-for="n in 6" :key="n" class="w-full sm:w-1/2 md:w-1/3 p-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="relative">
              <img
                class="w-full h-48 object-cover rounded-lg"
                src="https://socialcompass.jp/wp-content/uploads/2023/06/01-1.jpeg"
                alt="Event Image"
              />
              <div
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
              >
                <router-link to="/event-detail">
                  <button class="text-white bg-red-500 px-4 py-2 rounded">
                    See more info
                  </button>
                </router-link>
              </div>
            </div>
            <div class="mt-4">
              <h2 class="text-xl font-bold text-green-600">Waste Summit Cambodia</h2>
              <p class="text-gray-500">3 Weeks ago</p>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 mb-10">
        <div class="flex justify-center space-x-2">
          <button
            v-for="pageNum in 4"
            :key="pageNum"
            @click="page = pageNum"
            :class="{'bg-green-500 text-white': pageNum === page, 'bg-white text-green-500': pageNum !== page}"
            class="px-4 py-2 rounded-full border border-green-500"
          >
            {{ pageNum }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>
