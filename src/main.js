import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Contact from '@/components/Contact/Contact.vue'
import Repos from '@/components/Repos/Repos.vue'
import SingleRepo from '@/components/Repos/SingleRepo.vue'
import WildCard from '@/components/WildCard.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faLocation } from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faLocationDot, faCodeFork, faWarning, faEye, faWifiStrong, faPeopleGroup, faArrowLeftRotate, faExpand }
from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faGithub, faEnvelope, faPhone, faLocationDot, faExpand, faArrowLeftRotate, 
faCodeFork, faWarning, faEye, faFolder, faWifiStrong, faPeopleGroup)

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/repos',
        name: 'Repos',
        component: Repos
    },
    {
        path: '/repos/:name',
        name: 'SingleRepo',
        component: SingleRepo
    },
    {
        path: '/:catchAll(.*)',
        name: 'WildCard',
        component: WildCard
    }
    ],
})

createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
