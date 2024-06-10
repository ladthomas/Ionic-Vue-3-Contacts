<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contacts</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model="searchQuery" placeholder="Search contacts"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="contact in filteredContacts" :key="contact.id">
          <ion-label>
            <h2>{{ contact.name }}</h2>
            <p>{{ contact.email }}</p>
          </ion-label>
          <ion-button slot="end" fill="clear" :router-link="'/' + contact.id">Details</ion-button>
        </ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button router-link="/create">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonFab, IonFabButton, IonIcon, IonSearchbar } from '@ionic/vue';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonFab,
    IonFabButton,
    IonIcon,
    IonSearchbar
  },
  data() {
    return {
      contacts: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredContacts() {
      if (this.searchQuery) {
        return this.contacts.filter(contact => 
          contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return this.contacts;
    }
  },
  methods: {
    loadContacts() {
      const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contacts = storedContacts;
    }
  },
  created() {
    this.loadContacts();
  }
};
</script>

<style scoped>
ion-searchbar {
  margin-bottom: 10px;
}
</style>
