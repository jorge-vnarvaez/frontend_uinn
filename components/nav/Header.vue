<template>
   <nav class="bg-neutral-900">
        <v-container>
            <div class="max-w-screen-xl mx-auto text-white flex justify-between">
                <!-- Logo -->
                <div>
                    <span>LOGO</span>
                </div>
                <!-- Logo -->

                <!-- Menu -->
                <div class="flex space-x-20 justify-center">
                    <nuxt-link v-for="navItem in navItems" :key="navItem.id" :to="navItem.href" >
                        <span class="text-white">{{ navItem.title }}</span>
                    </nuxt-link>
                </div>
                <!-- Menu -->

                <!-- Search -->
                <div>
                    <span>Search</span>
                </div>
                <!-- Search -->
            </div>
        </v-container>
   </nav>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                {
                    id: 1,
                    title: 'Servicios',
                    href: '/servicios',
                },
                {
                    id: 2,
                    title: 'Noticias',
                    href: '/noticias',
                },
                {
                    id: 3,
                    title: 'Eventos',
                    href: '/eventos',
                },
                {
                    id: 4,
                    title: 'Aprende Innovación',
                    href: '/aprende-innovacion',
                },
            ]
        }
    }
};
</script>

<style></style>
