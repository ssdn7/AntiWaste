<template>
  <div class="w-full p-4">
    <template v-if="isLoading">
      <LoadingSpinner />
    </template>
    <template v-else>
      <!-- Back Button -->
      <div class="px-5 pb-2">
        <button
          @click="navigateBack"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-4 py-2 focus:outline-none"
        >
          Back
        </button>
      </div>

      <!-- Welcome Banner -->
      <v-card max-height="230">
        <v-img
          class="text-white flex justify-center items-center"
          height="230"
          src="../../assets/recycledproduct/image_cover.jpg"
          cover
        >
          <div class="flex flex-col justify-center items-center">
            <div class="text-4xl font-bold mb-3">
              Discover Sustainable Solutions - Explore Our Range of Eco-Friendly Products
            </div>
            <router-link to="/product-post">
              <button
                class="mt-2 px-4 py-2 font-bold bg-green-600 border rounded-lg text-white hover:bg-green-800 focus:outline-none"
              >
                Sell Your Product Now
              </button>
            </router-link>
          </div>
        </v-img>
      </v-card>

      <!-- Filter and Search Bar -->
      <div class="bg-green-100">
        <div class="px-4 py-2">
          <div class="max-w-6xl mx-auto flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <button
                class="text-gray-700 hover:text-green-500 focus:outline-none"
                @click="filterItems('all')"
              >
                All
              </button>
              <button
                class="text-gray-700 hover:text-green-500 focus:outline-none"
                @click="filterItems('recent')"
              >
                Recently Viewed
              </button>
              <button
                class="text-gray-700 hover:text-green-500 focus:outline-none"
                @click="filterItems('favorites')"
              >
                Favorites
              </button>
            </div>
            <div class="flex items-center">
              <input
                v-model="searchQuery"
                type="text"
                class="w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-green-500"
                placeholder="Search products..."
                @input="searchProducts"
              />
              <button
                @click="searchProducts"
                class="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 px-20 py-5">
        <div
          v-for="item in paginatedItems"
          :key="item.id"
          class="w-auto overflow-hidden rounded-xl border"
        >
          <img
             class="object-cover h-64 w-full"
            :src="item.img"
            alt="Product Image"
            loading="lazy"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <div class="flex items-center text-sm text-gray-600">
              <span class="mr-1">{{ item.owner_name }}</span>
              <i class="text-red-500 mdi mdi-fire-circle text-sm"></i>
            </div>
            <div class="flex items-center mt-2">
              <div class="text-gray-600 ml-4">
                {{ item.rating }} ({{ item.reviews }} reviews)
              </div>
            </div>
            <p class="text-sm text-gray-600 mt-2">
              Location: {{ item.location }}
            </p>
            <p class="text-sm text-gray-600">
              Contact Number: {{ item.contact_number }}
            </p>
            <!-- Display Description -->
            <div class="text-sm text-gray-600 mt-2 line-clamp-3">
              <span class="font-bold">Description: </span>{{ item.description }}
            </div>
            <hr class="my-4" />
            <div class="text-lg font-semibold">${{ item.price }}</div>
            <div>
              <router-link :to="'/product-detail/' + item.id">
                <button
                  class="mt-2 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-lg hover:bg-green-100 focus:outline-none"
                >
                  View Detail
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-center mt-5">
        <button
          :disabled="currentPage === 1"
          @click="currentPage -= 1"
          class="px-4 py-2 bg-green-200 text-gray-700 hover:bg-gray-300 rounded-full mx-2 focus:outline-none"
        >
          Previous
        </button>
        <span class="px-4 py-2 bg-green-200 text-gray-700 hover:bg-gray-300 rounded-full mx-2 focus:outline-none">{{ currentPage }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage += 1"
          class="px-4 py-2 bg-green-200 text-gray-700 hover:bg-gray-300 rounded-full mx-2 focus:outline-none"
        >
          Next
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { API_BASE_URL } from "@/config";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner.vue";

export default {
  name: "ProductGrid",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: true,
      items: [],
      currentPage: 1,
      itemsPerPage: 8,
      searchQuery: "",
      filteredItems: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
  try {
    const response = await axios.get(`${API_BASE_URL}products`);
    console.log('Fetched products:', response.data); // Log fetched products for debugging
    this.items = response.data;
    this.filteredItems = this.items;
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    this.isLoading = false;
  }
},
    filterItems(filterType) {
      switch (filterType) {
        case 'recent':
          this.filteredItems = this.items.filter(item => item.rating > 4.0);
          break;
        case 'favorites':
          this.filteredItems = this.items.filter(item => item.favorite);
          break;
        default:
          this.filteredItems = this.items;
      }
      this.currentPage = 1; // Reset to first page on filter change
    },
    searchProducts() {
      if (this.searchQuery.trim() === "") {
        this.filteredItems = this.items;
      } else {
        const query = this.searchQuery.toLowerCase();
        this.filteredItems = this.items.filter(item => 
          item.name.toLowerCase().includes(query)
        );
      }
      this.currentPage = 1; // Reset to first page on search
    },
    navigateBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>
