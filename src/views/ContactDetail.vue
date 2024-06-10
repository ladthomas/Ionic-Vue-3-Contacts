<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Contact Details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Nom</ion-label>
          <ion-input v-model="contact.name" placeholder="Enter name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input v-model="contact.email" placeholder="Saisir l'adresse e-mail"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Phone</ion-label>
          <ion-input v-model="contact.phone" placeholder="Entrez le numéro de téléphone"></ion-input>
        </ion-item>
      </ion-list>
      <ion-button expand="full" @click="updateContact">Sauvegarder</ion-button>
      <ion-button expand="full" color="danger" @click="deleteContact">Supprimer</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonBackButton, IonButtons } from '@ionic/vue';

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
    IonInput,
    IonButton,
    IonBackButton,
    IonButtons
  },
  data() {
    return {
      contact: {
        id: null,
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    loadContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const contact = contacts.find(c => c.id === parseInt(this.$route.params.id));
      if (contact) {
        this.contact = contact;
      }
    },
    updateContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const index = contacts.findIndex(c => c.id === this.contact.id);
      if (index !== -1) {
        contacts.splice(index, 1, this.contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
      this.$router.push('/');
    },
    deleteContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts = contacts.filter(c => c.id !== this.contact.id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push('/');
    }
  },
  created() {
    this.loadContact();
  }
};
</script>
