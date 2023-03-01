<template>
  <div class="py-12">
    <v-container v-if="post">
      <div class="max-w-screen-xl mx-auto mt-1">
        <div class="mb-4">
          <span class="block text-xl lg:text-5xl text-gray-800 font-bold">{{ post.title }}</span>
          <span class="block mt-2 text-xl text-green-500 font-bold">{{ $moment(post.date_published).format('LL') }}</span>
        </div>

        <div class="w-full">
          <v-img :src="$config.apiUrlV2 + '/assets/' + post.featured_image" class="rounded-lg" height="450" max-width="100%"></v-img>
        </div>

        <div class="bg-gray-800 my-8 p-6 text-white text-xl lg:text-2xl rounded-br-xl shadow-md">
          <span class="bg-white text-gray-800 px-2 text-4xl">{{ post.excerpt.slice(0, 1) }}</span>
          <span class="leading-relaxed">{{ post.excerpt.slice(1, post.excerpt.length - 1) }}</span>
        </div>

        <span class="text-lg lg:text-2xl leading-relaxed lg:leading-relaxed" v-html="post.body"></span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    };
  },
  async fetch() {
    const slug = this.$route.params.slug;

    let route = "/items/posts";

    let query = this.$objectToQueryString({
      filter: {
        slug: {
          _eq: slug,
        },
      },
    });

    let fetchString = `${this.$config.apiUrlV2}${route}?${query}`;

    const { data } = await fetch(fetchString).then((res) => res.json());

    this.post = data[0];
  },
};
</script>

<style></style>
